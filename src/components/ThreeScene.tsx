
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x64ffda, 2);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // Create a group of objects
    const group = new THREE.Group();
    
    // Create a galaxy of particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      // Position
      const radius = Math.random() * 4 + 1;
      const spinAngle = radius * 5;
      const branchAngle = (i % 3) * Math.PI * 2 / 3;
      
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;

      positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i * 3 + 1] = randomY;
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
      
      // Color
      const colorIntensity = Math.random();
      colors[i * 3] = 0.2 + colorIntensity * 0.5; // r
      colors[i * 3 + 1] = 0.5 + colorIntensity * 0.5; // g
      colors[i * 3 + 2] = 0.8 + colorIntensity * 0.2; // b
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      alphaMap: new THREE.TextureLoader().load('/placeholder.svg'),
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    group.add(particles);

    // Create orbs
    const createOrb = (radius: number, color: number, posX: number, posY: number, posZ: number) => {
      const geometry = new THREE.SphereGeometry(radius, 32, 32);
      const material = new THREE.MeshStandardMaterial({ 
        color, 
        emissive: color,
        emissiveIntensity: 0.3,
        roughness: 0.2,
        metalness: 0.8
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(posX, posY, posZ);
      return sphere;
    };

    group.add(createOrb(0.2, 0x64ffda, 2, 0, 1));
    group.add(createOrb(0.3, 0x8a80ff, -2, 1, -1));
    group.add(createOrb(0.15, 0xff80bf, 1, -1, -2));
    
    scene.add(group);

    // Camera positioning
    camera.position.z = 6;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Spin the galaxy
      group.rotation.y += 0.001;
      
      // Update controls
      controls.update();
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      scene.clear();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full absolute top-0 left-0" />;
};

export default ThreeScene;
