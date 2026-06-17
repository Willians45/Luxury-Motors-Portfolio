import React, { useEffect, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const VERSION = 5;

const useCarColor = (scene, color) => {
    useEffect(() => {
        if (!scene || !color) return;

        scene.traverse((child) => {
            if (child.isMesh && child.material) {
                const matName = child.material.name.toLowerCase();

                if (matName.includes('primary') || matName.includes('body')) {
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

    const scene = useMemo(() => originalScene.clone(), [originalScene]);

    useCarColor(scene, color);

    return <primitive object={scene} rotation={[0, -Math.PI / 4, 0]} scale={1.2} position={[0, -0.6, 0]} />;
}

function InteriorView({ color }) {
    const { scene: originalScene } = useGLTF('/models/tesla_2018_model_3.glb');

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
                        <InteriorView key={color} color={color} />
                        <OrbitControls
                            key={`controls-int-${viewMode}-${VERSION}`}
                            enableZoom={false}
                            enablePan={false}
                            rotateSpeed={-0.3}
                            target={[0, 1.0, 0]}
                            minPolarAngle={Math.PI / 3}
                            maxPolarAngle={Math.PI / 1.8}
                        />
                    </>
                )}
            </Canvas>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
                <span className="text-white/40 text-xs font-mono tracking-widest uppercase">
                    {viewMode === 'exterior' ? 'Live 3D Preview' : 'Interactive Interior View'}
                </span>
            </div>
        </div>
    );
}
