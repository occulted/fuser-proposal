import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader, RoomEnvironment } from 'three-stdlib';

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
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 3, 10);
    camera.lookAt(0, 3, 0);
    cameraRef.current = camera;

    // Renderer setup - SEM sombras
    const renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = false;
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ✅ RoomEnvironment importado de three-stdlib
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envScene = new RoomEnvironment();
    const envMap = pmremGenerator.fromScene(envScene).texture;
    scene.environment = envMap;

    // Iluminação sem sombras
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight1.position.set(5, 10, 5);
    directionalLight1.castShadow = false;
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight2.position.set(-5, 5, -5);
    directionalLight2.castShadow = false;
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight3.position.set(0, -5, 5);
    directionalLight3.castShadow = false;
    scene.add(directionalLight3);

    // Fallback sword
    const createFallbackSword = () => {
      const group = new THREE.Group();

      const bladeMaterial = new THREE.MeshStandardMaterial({
        color: 0x909090,
        metalness: 0.7,
        roughness: 0.15,
        envMapIntensity: 3,
      });

      const bladeGeometry = new THREE.BoxGeometry(0.4, 8, 0.15);
      const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
      blade.position.y = 2;
      group.add(blade);

      const topGeometry = new THREE.ConeGeometry(0.8, 2, 4);
      const top = new THREE.Mesh(topGeometry, bladeMaterial);
      top.position.y = 7;
      group.add(top);

      const upperGuardGeometry = new THREE.BoxGeometry(3, 0.25, 0.25);
      const upperGuard = new THREE.Mesh(upperGuardGeometry, bladeMaterial);
      upperGuard.position.y = 5.5;
      group.add(upperGuard);

      const ornamentGeometry = new THREE.ConeGeometry(0.4, 1, 3);

      const leftOrnament1 = new THREE.Mesh(ornamentGeometry, bladeMaterial);
      leftOrnament1.position.set(-1.5, 5.5, 0);
      leftOrnament1.rotation.z = Math.PI / 2;
      group.add(leftOrnament1);

      const rightOrnament1 = new THREE.Mesh(ornamentGeometry, bladeMaterial);
      rightOrnament1.position.set(1.5, 5.5, 0);
      rightOrnament1.rotation.z = -Math.PI / 2;
      group.add(rightOrnament1);

      const guardGeometry = new THREE.BoxGeometry(4, 0.3, 0.3);
      const guard = new THREE.Mesh(guardGeometry, bladeMaterial);
      guard.position.y = -2;
      group.add(guard);

      const leftOrnament2 = new THREE.Mesh(ornamentGeometry, bladeMaterial);
      leftOrnament2.position.set(-2, -2, 0);
      leftOrnament2.rotation.z = Math.PI / 2;
      group.add(leftOrnament2);

      const rightOrnament2 = new THREE.Mesh(ornamentGeometry, bladeMaterial);
      rightOrnament2.position.set(2, -2, 0);
      rightOrnament2.rotation.z = -Math.PI / 2;
      group.add(rightOrnament2);

      const handleGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2.5, 8);
      const handle = new THREE.Mesh(handleGeometry, bladeMaterial);
      handle.position.y = -3.5;
      group.add(handle);

      const bottomGeometry = new THREE.ConeGeometry(1, 2.5, 4);
      const bottom = new THREE.Mesh(bottomGeometry, bladeMaterial);
      bottom.position.y = -6;
      bottom.rotation.z = Math.PI;
      group.add(bottom);

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

    // Load GLTF
    const loader = new GLTFLoader();
    console.log('Attempting to load GLTF model...');

    loader.load(
      '/scene.gltf',
      (gltf) => {
        console.log('GLTF loaded successfully!');
        const model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        model.position.set(-center.x, -center.y, -center.z);

        const targetHeight = 14;
        const scale = targetHeight / size.y;
        model.scale.setScalar(scale);
        model.rotation.set(0, 0, 0);

        model.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0x888888,
              metalness: 0.5,
              roughness: 0.3,
              envMapIntensity: 2.0,
              side: THREE.DoubleSide,
              transparent: false,
              opacity: 1,
            });
            child.castShadow = false;
            child.receiveShadow = false;
          }
        });

        scene.add(model);
        modelRef.current = model;
      },
      (progress) => {
        if (progress.lengthComputable && progress.total > 0) {
          const percent = Math.round((progress.loaded / progress.total) * 100);
          console.log(`Loading GLTF: ${percent}%`);
        }
      },
      (error) => {
        console.error('GLTF loading failed:', error.message || error);
        const fallbackSword = createFallbackSword();
        scene.add(fallbackSword);
        modelRef.current = fallbackSword;
      }
    );

    // Mouse events
    const canvas = renderer.domElement;
    canvas.style.cursor = 'grab';

    const handleMouseDown = (event) => {
      isDraggingRef.current = true;
      canvas.style.cursor = 'grabbing';
      previousMousePositionRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseMove = (event) => {
      if (!isDraggingRef.current || !modelRef.current) return;
      const deltaX = event.clientX - previousMousePositionRef.current.x;
      const deltaY = event.clientY - previousMousePositionRef.current.y;
      rotationRef.current.y += deltaX * 0.01;
      rotationRef.current.x += deltaY * 0.01;
      rotationRef.current.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, rotationRef.current.x)
      );
      previousMousePositionRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      canvas.style.cursor = 'grab';
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseUp);

    // Touch events
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
      if (
        !isDraggingRef.current ||
        !modelRef.current ||
        event.touches.length !== 1
      ) return;
      const deltaX = event.touches[0].clientX - previousMousePositionRef.current.x;
      const deltaY = event.touches[0].clientY - previousMousePositionRef.current.y;
      rotationRef.current.y += deltaX * 0.01;
      rotationRef.current.x += deltaY * 0.01;
      rotationRef.current.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, rotationRef.current.x)
      );
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
      if (modelRef.current) {
        // Rotação automática suave quando não está dragando
        if (!isDraggingRef.current) {
          rotationRef.current.y += 0.002;
        }
        modelRef.current.rotation.x = rotationRef.current.x;
        modelRef.current.rotation.y = rotationRef.current.y;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
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
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (mount && rendererRef.current?.domElement) {
        try {
          mount.removeChild(rendererRef.current.domElement);
        } catch (e) {
          // Elemento já foi removido
        }
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
