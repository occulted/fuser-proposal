import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';

const ThreeBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with WHITE background
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    sceneRef.current = scene;

    // Camera setup - closer for bigger model
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: false,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create environment map for reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0xffffff);
    const envMap = pmremGenerator.fromScene(envScene).texture;
    scene.environment = envMap;

    // Strong lighting for white glossy material
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight1.position.set(5, 10, 5);
    directionalLight1.castShadow = true;
    directionalLight1.shadow.mapSize.width = 2048;
    directionalLight1.shadow.mapSize.height = 2048;
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight2.position.set(-5, 5, -5);
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight3.position.set(0, -5, 5);
    scene.add(directionalLight3);

    // Add a subtle ground plane for depth
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.1 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -3;
    ground.receiveShadow = true;
    scene.add(ground);

    // Load GLTF Model
    const loader = new GLTFLoader();
    loader.load(
      '/scene.gltf',
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;
        
        // Get model dimensions
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        
        console.log('Model loaded - Size:', size, 'Center:', center);
        
        // Center the model
        model.position.x = -center.x;
        model.position.y = -center.y;
        model.position.z = -center.z;
        
        // Scale to occupy 40-50% of viewport height
        const maxDim = Math.max(size.x, size.y, size.z);
        const targetSize = 6; // Adjust this for size (bigger = larger model)
        const scale = targetSize / maxDim;
        model.scale.setScalar(scale);
        
        // Position vertically centered
        model.position.y = 0;
        
        // Set initial rotation to 0
        model.rotation.set(0, 0, 0);
        
        // Apply white glossy material with subtle gray tones
        model.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0xe8e8e8, // Very light gray, almost white
              metalness: 0.3,
              roughness: 0.15,
              envMapIntensity: 2,
            });
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        
        scene.add(model);
        console.log('Model added to scene');
      },
      (progress) => {
        if (progress.total > 0) {
          const percent = Math.round((progress.loaded / progress.total) * 100);
          console.log(`Loading model: ${percent}%`);
        }
      },
      (error) => {
        console.error('Error loading model:', error);
        // Fallback: create a stylized sword shape
        const group = new THREE.Group();
        
        // Blade
        const bladeGeometry = new THREE.BoxGeometry(0.3, 5, 0.1);
        const bladeMaterial = new THREE.MeshStandardMaterial({
          color: 0xe8e8e8,
          metalness: 0.3,
          roughness: 0.15,
        });
        const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
        blade.position.y = 2;
        group.add(blade);
        
        // Guard
        const guardGeometry = new THREE.BoxGeometry(2, 0.2, 0.3);
        const guard = new THREE.Mesh(guardGeometry, bladeMaterial);
        guard.position.y = 0;
        group.add(guard);
        
        // Handle
        const handleGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.5, 8);
        const handle = new THREE.Mesh(handleGeometry, bladeMaterial);
        handle.position.y = -1;
        group.add(handle);
        
        // Pommel
        const pommelGeometry = new THREE.SphereGeometry(0.25, 16, 16);
        const pommel = new THREE.Mesh(pommelGeometry, bladeMaterial);
        pommel.position.y = -1.8;
        group.add(pommel);
        
        scene.add(group);
        modelRef.current = group;
        console.log('Fallback sword created');
      }
    );

    // Mouse drag interaction
    const canvas = renderer.domElement;
    canvas.style.cursor = 'grab';
    
    const handleMouseDown = (event) => {
      isDraggingRef.current = true;
      canvas.style.cursor = 'grabbing';
      previousMousePositionRef.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    const handleMouseMove = (event) => {
      if (!isDraggingRef.current || !modelRef.current) return;

      const deltaX = event.clientX - previousMousePositionRef.current.x;
      const deltaY = event.clientY - previousMousePositionRef.current.y;

      rotationRef.current.y += deltaX * 0.01;
      rotationRef.current.x += deltaY * 0.01;

      // Limit x rotation to prevent flipping
      rotationRef.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotationRef.current.x));

      previousMousePositionRef.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      canvas.style.cursor = 'grab';
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseUp);

    // Touch events for mobile
    const handleTouchStart = (event) => {
      if (event.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePositionRef.current = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY
        };
        event.preventDefault();
      }
    };

    const handleTouchMove = (event) => {
      if (!isDraggingRef.current || !modelRef.current || event.touches.length !== 1) return;

      const deltaX = event.touches[0].clientX - previousMousePositionRef.current.x;
      const deltaY = event.touches[0].clientY - previousMousePositionRef.current.y;

      rotationRef.current.y += deltaX * 0.01;
      rotationRef.current.x += deltaY * 0.01;
      rotationRef.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotationRef.current.x));

      previousMousePositionRef.current = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      };
      event.preventDefault();
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);

    // Animation loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Apply rotation to model
      if (modelRef.current) {
        modelRef.current.rotation.x = rotationRef.current.x;
        modelRef.current.rotation.y = rotationRef.current.y;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      const mount = mountRef.current;
      if (mount && rendererRef.current) {
        mount.removeChild(rendererRef.current.domElement);
      }
      envMap.dispose();
      pmremGenerator.dispose();
      rendererRef.current?.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
};

export default ThreeBackground;
