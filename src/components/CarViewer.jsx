import React, { useEffect, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Bumping this version forces a re-mount of Camera and Controls 
// ensuring new positions/props are applied during HMR dev.
const VERSION = 5; // Final version for the fix

// Shared logic for applying color to car materials
const useCarColor = (scene, color) => {
    useEffect(() => {
        if (!scene || !color) return;

        // Traverse the scene and apply color to target materials
        scene.traverse((child) => {
            if (child.isMesh && child.material) {
                const matName = child.material.name.toLowerCase();

                // Target 'primary' materials (found via debugging)
                // Also including 'body' just in case, but 'primary' was the key.
                if (matName.includes('primary') || matName.includes('body')) {
                    // Apply color
                    child.material.color.set(color);
                    child.material.metalness = 0.9;
                    child.material.roughness = 0.1;
                    child.material.envMapIntensity = 1.5;
                    child.material.needsUpdate = true;
                }
            }
        });

    }, [scene, color]);
};

function TeslaModel({ color }) {
    const { scene: originalScene } = useGLTF('/models/tesla_2018_model_3.glb');

    // Clone scene to ensure we have a fresh instance for this component.
    // This isolates our changes from other instances and ensures re-renders work as expected.
    const scene = useMemo(() => originalScene.clone(), [originalScene]);

    useCarColor(scene, color);

    // Reduced scale even further to 1.2 to help with "view from afar" feel
    return <primitive object={scene} rotation={[0, -Math.PI / 4, 0]} scale={1.2} position={[0, -0.6, 0]} />;
}

// Interior view using the same model but zoomed in
function InteriorView({ color }) {
    const { scene: originalScene } = useGLTF('/models/tesla_2018_model_3.glb');

    // Clone scene here too
    const scene = useMemo(() => originalScene.clone(), [originalScene]);

    useCarColor(scene, color);

    return (
        <group>
            <primitive object={scene} scale={1.6} position={[0, -65, 0]} />
        </group>
    );
}

export default function CarViewer({ color, viewMode = 'exterior' }) {
    return (
        <div className="w-full h-full relative" style={{ background: viewMode === 'exterior' ? 'radial-gradient(circle at 50% 50%, #4a4a4a 0%, #000 100%)' : '#000' }}>
            <Canvas shadows>
                <PerspectiveCamera
                    key={`cam-${viewMode}-${VERSION}`}
                    makeDefault
                    position={viewMode === 'exterior' ? [600, 100, 600] : [0.3, 3.8, 2.5]}
                    fov={viewMode === 'exterior' ? 45 : 80}
                />

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <Environment preset={viewMode === 'exterior' ? "city" : "studio"} />

                {viewMode === 'exterior' ? (
                    <>
                        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
                            {/* Adding key={color} ensures the component remounts when color changes, guaranteeing a fresh scene clone and effect run */}
                            <TeslaModel key={color} color={color} />
                        </Float>

                        <ContactShadows resolution={1024} scale={10} blur={2.5} opacity={0.5} far={10} color="#000000" />
                        <OrbitControls
                            key={`controls-ext-${viewMode}-${VERSION}`}
                            enablePan={false}
                            minPolarAngle={Math.PI / 4}
                            maxPolarAngle={Math.PI / 2.2}
                            autoRotate
                            autoRotateSpeed={0.5}
                            minDistance={200}
                            maxDistance={1500}
                        />
                    </>
                ) : (
                    <>
                        {/* Interactive Interior View */}
                        <InteriorView key={color} color={color} />
                        <OrbitControls
                            key={`controls-int-${viewMode}-${VERSION}`}
                            enableZoom={false}
                            enablePan={false}
                            rotateSpeed={-0.3}
                            target={[0, 1.0, 0]} // Adjusted target to look lower into the car center
                            minPolarAngle={Math.PI / 3} // Limit vertical look
                            maxPolarAngle={Math.PI / 1.8}
                        />
                    </>
                )}
            </Canvas>

            {/* Overlay info */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
                <span className="text-white/40 text-xs font-mono tracking-widest uppercase">
                    {viewMode === 'exterior' ? 'Live 3D Preview' : 'Interactive Interior View'}
                </span>
            </div>
        </div>
    );
}
