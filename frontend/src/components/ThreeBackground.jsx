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
    
    // Create fallback function
    const createFallbackSword = () => {
      const group = new THREE.Group();
      
      // Main blade - tall vertical blade
      const bladeGeometry = new THREE.BoxGeometry(0.4, 8, 0.15);
      const bladeMaterial = new THREE.MeshStandardMaterial({
        color: 0xc8c8c8,
        metalness: 0.7,
        roughness: 0.15,
        envMapIntensity: 3,
      });
      const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
      blade.position.y = 2;
      blade.castShadow = true;
      group.add(blade);
      
      // Top ornament - diamond shape
      const topGeometry = new THREE.ConeGeometry(0.8, 2, 4);
      const top = new THREE.Mesh(topGeometry, bladeMaterial);
      top.position.y = 7;
      top.castShadow = true;
      group.add(top);
      
      // Upper cross guard - horizontal
      const upperGuardGeometry = new THREE.BoxGeometry(3, 0.25, 0.25);
      const upperGuard = new THREE.Mesh(upperGuardGeometry, bladeMaterial);
      upperGuard.position.y = 5.5;
      upperGuard.castShadow = true;
      group.add(upperGuard);
      
      // Upper guard ornaments
      const ornamentGeometry = new THREE.ConeGeometry(0.4, 1, 3);
      const leftOrnament1 = new THREE.Mesh(ornamentGeometry, bladeMaterial);
      leftOrnament1.position.set(-1.5, 5.5, 0);
      leftOrnament1.rotation.z = Math.PI / 2;
      group.add(leftOrnament1);
      
      const rightOrnament1 = new THREE.Mesh(ornamentGeometry, bladeMaterial);
      rightOrnament1.position.set(1.5, 5.5, 0);
      rightOrnament1.rotation.z = -Math.PI / 2;
      group.add(rightOrnament1);
      
      // Main cross guard
      const guardGeometry = new THREE.BoxGeometry(4, 0.3, 0.3);
      const guard = new THREE.Mesh(guardGeometry, bladeMaterial);
      guard.position.y = -2;
      guard.castShadow = true;
      group.add(guard);
      
      // Guard ornaments
      const leftOrnament2 = new THREE.Mesh(ornamentGeometry, bladeMaterial);
      leftOrnament2.position.set(-2, -2, 0);
      leftOrnament2.rotation.z = Math.PI / 2;
      group.add(leftOrnament2);
      
      const rightOrnament2 = new THREE.Mesh(ornamentGeometry, bladeMaterial);
      rightOrnament2.position.set(2, -2, 0);
      rightOrnament2.rotation.z = -Math.PI / 2;
      group.add(rightOrnament2);
      
      // Handle
      const handleGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2.5, 8);
      const handle = new THREE.Mesh(handleGeometry, bladeMaterial);
      handle.position.y = -3.5;
      handle.castShadow = true;
      group.add(handle);
      
      // Bottom ornament - inverted diamond
      const bottomGeometry = new THREE.ConeGeometry(1, 2.5, 4);
      const bottom = new THREE.Mesh(bottomGeometry, bladeMaterial);
      bottom.position.y = -6;
      bottom.rotation.z = Math.PI;
      bottom.castShadow = true;
      group.add(bottom);
      
      // Lower decorative wings
      const wingGeometry = new THREE.ConeGeometry(0.6, 1.5, 3);
      const leftWing = new THREE.Mesh(wingGeometry, bladeMaterial);
      leftWing.position.set(-2.5, -6, 0);
      leftWing.rotation.z = Math.PI / 2 + Math.PI / 4;
      group.add(leftWing);
      
      const rightWing = new THREE.Mesh(wingGeometry, bladeMaterial);
      rightWing.position.set(2.5, -6, 0);
      rightWing.rotation.z = -Math.PI / 2 - Math.PI / 4;
      group.add(rightWing);
      
      return group;
    };
    
    // Try to load GLTF first
    console.log('Attempting to load GLTF model...');
    loader.load(
      '/scene.gltf',
      (gltf) => {
        console.log('GLTF loaded successfully!');
        
        const model = gltf.scene;
        
        // Get model dimensions
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        
        console.log('GLTF Size:', size.x.toFixed(2), 'x', size.y.toFixed(2), 'x', size.z.toFixed(2));
        console.log('GLTF Center:', center.x.toFixed(2), center.y.toFixed(2), center.z.toFixed(2));
        
        // Center the model perfectly
        model.position.set(-center.x, -center.y, -center.z);
        
        // Calculate scale - the model is 31.97 units tall, we want it about 12 units tall
        const targetHeight = 12;
        const scale = targetHeight / size.y;
        model.scale.setScalar(scale);
        
        console.log('Applied scale:', scale.toFixed(3));
        
        // Set initial rotation to 0
        model.rotation.set(0, 0, 0);
        
        // Apply glossy light gray material to all meshes
        let materialCount = 0;
        let geometryCount = 0;
        
        model.traverse((child) => {
          if (child.isMesh) {
            geometryCount++;
            
            // Create a bright, visible material
            child.material = new THREE.MeshStandardMaterial({
              color: 0xd0d0d0, // Light gray
              metalness: 0.6,
              roughness: 0.2,
              envMapIntensity: 2.5,
              side: THREE.DoubleSide,
              transparent: false,
              opacity: 1,
            });
            
            child.castShadow = true;
            child.receiveShadow = true;
            materialCount++;
            
            // Log mesh info for debugging
            if (geometryCount <= 3) {
              console.log(`Mesh ${geometryCount}:`, child.geometry.attributes.position.count, 'vertices');
            }
          }
        });
        
        console.log(`Total meshes: ${materialCount}, applied glossy material to all`);
        
        // Add to scene
        scene.add(model);
        modelRef.current = model;
        
        console.log('✓ GLTF model successfully added to scene and should be visible');
      },
      (progress) => {
        if (progress.lengthComputable && progress.total > 0) {
          const percent = Math.round((progress.loaded / progress.total) * 100);
          console.log(`Loading GLTF: ${percent}%`);
        } else {
          console.log('Loading GLTF:', progress.loaded, 'bytes loaded');
        }
      },
      (error) => {
        console.error('❌ GLTF loading failed:', error.message || error);
        console.log('→ Using fallback procedural sword instead');
        
        // Use fallback sword
        const fallbackSword = createFallbackSword();
        scene.add(fallbackSword);
        modelRef.current = fallbackSword;
        console.log('✓ Fallback sword created and displayed');
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
