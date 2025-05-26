import React, { useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import * as THREE from 'three';
// OrbitControls is not used in this bento version, but keeping import for consistency if needed elsewhere.
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; 

const PhotographyStudioBento: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  // Store a ref to the object we want to animate
  const animatedObjectRef = useRef<THREE.Group | null>(null); 

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    
    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x333333); // Darker background outside the room

    // 2. Camera - Fixed position for the bento box view
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 100);
    camera.position.set(0, 1.2, 3); // Positioned to look into the studio
    camera.lookAt(0, 1, 0); // Looking at the room's center

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Softer shadows
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer; // Store renderer ref for cleanup

    // --- Studio Environment (Simplified) ---

    // Floor
    const floorGeometry = new THREE.PlaneGeometry(3, 3);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc, side: THREE.DoubleSide });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Backdrop (Cyclorama)
    const backdropRadius = 2.5;
    const backdropHeight = 2;
    const backdropSegments = 16;
    const backdropGeometry = new THREE.CylinderGeometry(
        backdropRadius, backdropRadius, backdropHeight,
        backdropSegments, 1, true,
        0, Math.PI
    );
    const backdropMaterial = new THREE.MeshStandardMaterial({ color: 0xe0e0e0, side: THREE.DoubleSide });
    const backdrop = new THREE.Mesh(backdropGeometry, backdropMaterial);
    backdrop.position.set(0, backdropHeight / 2, -backdropRadius);
    backdrop.rotation.y = Math.PI;
    backdrop.receiveShadow = true;
    scene.add(backdrop);

    // --- Retro Red Room (as the object to photograph) ---
    const roomGroup = new THREE.Group();

    const roomWidth = 2.5; // Smaller for bento box
    const roomHeight = 2;
    const roomDepth = 2.5;

    // Floor within the room
    const roomFloorGeometry = new THREE.PlaneGeometry(roomWidth, roomDepth);
    const roomFloorMaterial = new THREE.MeshStandardMaterial({ color: 0x8b0000 }); // Dark Red
    const roomFloor = new THREE.Mesh(roomFloorGeometry, roomFloorMaterial);
    roomFloor.rotation.x = -Math.PI / 2;
    roomFloor.position.y = 0.01; // Slightly above main floor
    roomFloor.receiveShadow = true;
    roomGroup.add(roomFloor);

    // Back Wall
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(roomWidth, roomHeight, 0.1), new THREE.MeshStandardMaterial({ color: 0xcb2d3e, side: THREE.DoubleSide })); // Brighter Red
    backWall.position.set(0, roomHeight / 2, -roomDepth / 2);
    roomGroup.add(backWall);

    // Left Wall
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.1, roomHeight, roomDepth), new THREE.MeshStandardMaterial({ color: 0xcb2d3e, side: THREE.DoubleSide }));
    leftWall.position.set(-roomWidth / 2, roomHeight / 2, 0);
    roomGroup.add(leftWall);

    // Right Wall (Optional, depends on camera angle)
    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.1, roomHeight, roomDepth), new THREE.MeshStandardMaterial({ color: 0xcb2d3e, side: THREE.DoubleSide }));
    rightWall.position.set(roomWidth / 2, roomHeight / 2, 0);
    roomGroup.add(rightWall);

    // Ceiling
    const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(roomWidth, roomDepth), new THREE.MeshStandardMaterial({ color: 0x8b0000, side: THREE.DoubleSide }));
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = roomHeight;
    roomGroup.add(ceiling);

    // Retro Element: Simple Table
    const tableTop = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.05, 0.6), new THREE.MeshStandardMaterial({ color: 0x4a148c }));
    tableTop.position.set(0, 0.4 + 0.025, -0.6); // Positioned inside the room
    roomGroup.add(tableTop);
    const tableLegsMaterial = new THREE.MeshStandardMaterial({ color: 0x4a148c });
    const tableLegHeight = 0.4;
    [-0.35, 0.35].forEach(x => {
        [-0.25, 0.25].forEach(z => {
            const leg = new THREE.Mesh(new THREE.BoxGeometry(0.05, tableLegHeight, 0.05), tableLegsMaterial);
            leg.position.set(x, tableLegHeight / 2, z - 0.6);
            roomGroup.add(leg);
        });
    });

    // Retro Element: Simple Lamp (for mood lighting inside)
    const lampLight = new THREE.PointLight(0xffa500, 0.5, 1.5); // Orange light
    lampLight.position.set(0.7, 1.5, 0.7);
    roomGroup.add(lampLight);

    // Assign the group to the ref for animation
    animatedObjectRef.current = roomGroup; 
    scene.add(roomGroup);

    // --- Lighting (Adjusted for indoor scene) ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Overall ambient light
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 0.6); // General fill light from outside
    mainLight.position.set(2, 3, 2);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 512;
    mainLight.shadow.mapSize.height = 512;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 10;
    mainLight.shadow.camera.left = -3;
    mainLight.shadow.camera.right = 3;
    mainLight.shadow.camera.top = 3;
    mainLight.shadow.camera.bottom = -3;
    scene.add(mainLight);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (animatedObjectRef.current) {
        animatedObjectRef.current.rotation.y += 0.005; // Make the room slowly rotate
      }
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


    // Cleanup on component unmount
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
  }, []); // Run once on mount

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-3 rounded-xl mr-4 flex-shrink-0">
          <span className="text-purple-600 text-2xl">📸</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-transparent">
          3D Photography Studio
        </h2>
      </div>

      {/* THREE.JS RENDERER CONTAINER */}
      <div ref={mountRef} className="flex-grow w-full rounded-lg overflow-hidden border border-gray-200">
        {/* The Three.js canvas will be appended here */}
      </div>

      {/* <div className="mt-auto pt-4 border-t border-gray-100 text-center">
        <Link
          to="/studio" // Link to the dedicated full studio page
          className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200"
        >
          Launch Full Studio <span className="ml-2 text-xl">🚀</span>
        </Link>
      </div> */}
    </div>
  );
};

export default PhotographyStudioBento;