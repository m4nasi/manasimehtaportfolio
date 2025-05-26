import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
// No OrbitControls needed for this static view

const ChessGameBento: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x333333); // Dark background for contrast

    // 2. Camera - Fixed position
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 100);
    camera.position.set(0, 3, 3); // Positioned to look down at the board
    camera.lookAt(0, 0, 0); // Looking at the center of the board

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Chess Board ---
    const boardSize = 2; // Size of the entire board
    const squareSize = boardSize / 8;
    const lightMaterial = new THREE.MeshStandardMaterial({ color: 0xffe0b2 }); // Light wood/cream
    const darkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Dark wood/brown

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const material = (i + j) % 2 === 0 ? lightMaterial : darkMaterial;
        const squareGeometry = new THREE.BoxGeometry(squareSize, 0.1, squareSize);
        const square = new THREE.Mesh(squareGeometry, material);
        square.position.set(
          (i - 3.5) * squareSize,
          -0.05, // Slightly below 0 to cast shadow on floor
          (j - 3.5) * squareSize
        );
        square.receiveShadow = true;
        square.castShadow = true;
        scene.add(square);
      }
    }

    // --- Simple Chess Pieces (Example: Pawns) ---
    const pawnGeometry = new THREE.CylinderGeometry(0.15, 0.2, 0.5, 16);
    const whitePieceMaterial = new THREE.MeshStandardMaterial({ color: 0xf0f0f0 }); // White
    const blackPieceMaterial = new THREE.MeshStandardMaterial({ color: 0x404040 }); // Dark Gray

    // Add a few pawns (simplified positions)
    const pawnPositions = [
      { x: -0.75, z: 0.75, material: whitePieceMaterial }, // White
      { x: 0.75, z: 0.75, material: whitePieceMaterial },  // White
      { x: -0.75, z: -0.75, material: blackPieceMaterial }, // Black
      { x: 0.75, z: -0.75, material: blackPieceMaterial },  // Black
    ];

    pawnPositions.forEach(pos => {
      const pawn = new THREE.Mesh(pawnGeometry, pos.material);
      pawn.position.set(pos.x, 0.25, pos.z); // Half height for pawn
      pawn.castShadow = true;
      pawn.receiveShadow = true;
      scene.add(pawn);
    });

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(3, 5, 3);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 512;
    directionalLight.shadow.mapSize.height = 512;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 10;
    directionalLight.shadow.camera.left = -3;
    directionalLight.shadow.camera.right = 3;
    directionalLight.shadow.camera.top = 3;
    directionalLight.shadow.camera.bottom = -3;
    scene.add(directionalLight);

    // Animation Loop (Static, just renders once)
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize of Parent Container (very important for bento cells)
    const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) { // Changed 'let' to 'const'
        const { width, height } = entry.contentRect;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }
    });
    resizeObserver.observe(currentMount);

    // Cleanup
    return () => {
      if (rendererRef.current) {
        currentMount.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-r from-green-100 to-teal-100 p-3 rounded-xl mr-4 flex-shrink-0">
          <span className="text-teal-600 text-2xl">♟️</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 text-transparent">
          3D Chess Game
        </h2>
      </div>

      {/* THREE.JS RENDERER CONTAINER */}
      <div ref={mountRef} className="flex-grow w-full rounded-lg overflow-hidden border border-gray-200">
        {/* The Three.js canvas will be appended here */}
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100 text-center">
        <Link
          to="/chess" // Link to a dedicated full Chess Game Page (you'd create this)
          className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200"
        >
          Explore Game <span className="ml-2 text-xl">🎮</span>
        </Link>
      </div>
    </div>
  );
};

export default ChessGameBento;