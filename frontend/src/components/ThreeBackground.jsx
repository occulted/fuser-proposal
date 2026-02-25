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

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.position.y = 0;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create simple environment map (simulating HDRI)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    // Create a simple gradient environment
    const envScene = new THREE.Scene();
    const envCamera = new THREE.PerspectiveCamera();
    const envGeometry = new THREE.SphereGeometry(100, 32, 32);
    const envMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.BackSide,
    });
    const envMesh = new THREE.Mesh(envGeometry, envMaterial);
    envScene.add(envMesh);

    const envMap = pmremGenerator.fromScene(envScene).texture;
    scene.environment = envMap;

    // Lighting for glossy materials
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-5, 3, -5);
    scene.add(directionalLight2);

    // Load GLTF Model
    const loader = new GLTFLoader();
    loader.load(
      '/scene.gltf',
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;
        
        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        
        // Scale to fit
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxDim;
        model.scale.setScalar(scale);
        
        model.position.y = 0;
        
        // Set initial rotation to 0
        model.rotation.set(0, 0, 0);
        
        // Apply white glossy material
        model.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0xffffff,
              metalness: 0.1,
              roughness: 0.2,
              envMapIntensity: 1.5,
            });
          }
        });
        
        scene.add(model);
        console.log('Model loaded successfully');
      },
      (progress) => {
        if (progress.total > 0) {
          console.log('Loading model...', Math.round((progress.loaded / progress.total) * 100) + '%');
        }
      },
      (error) => {
        console.error('Error loading model:', error);
        // Fallback shape with white glossy material
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
        const material = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 0.1,
          roughness: 0.2,
          envMapIntensity: 1.5,
        });
        const fallbackMesh = new THREE.Mesh(geometry, material);
        scene.add(fallbackMesh);
        modelRef.current = fallbackMesh;
      }
    );

    // Create minimal particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 300;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xcccccc,
      transparent: true,
      opacity: 0.3,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse drag interaction
    const handleMouseDown = (event) => {
      isDraggingRef.current = true;
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

      previousMousePositionRef.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousedown', handleMouseDown);
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
      }
    };

    const handleTouchMove = (event) => {
      if (!isDraggingRef.current || !modelRef.current || event.touches.length !== 1) return;

      const deltaX = event.touches[0].clientX - previousMousePositionRef.current.x;
      const deltaY = event.touches[0].clientY - previousMousePositionRef.current.y;

      rotationRef.current.y += deltaX * 0.01;
      rotationRef.current.x += deltaY * 0.01;

      previousMousePositionRef.current = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      };
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    // Animation loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate particles very slowly
      particlesMesh.rotation.y += 0.0002;

      // Apply rotation to model based on user interaction
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
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      const mount = mountRef.current;
      if (mount && rendererRef.current) {
        mount.removeChild(rendererRef.current.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
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
        cursor: 'grab',
      }}
    />
  );
};

export default ThreeBackground;
