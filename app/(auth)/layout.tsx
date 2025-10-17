'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei'

function Model() {
    const group = useRef(null)
    const { scene, animations } = useGLTF('/free_rtx_5090.glb')
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        Object.values(actions).forEach((action) => {
            action?.reset().play()
            action?.setLoop(THREE.LoopRepeat, Infinity)
            if (action) {
                action.timeScale = 0.1
            }
        })
    }, [actions])

    return <primitive ref={group} object={scene} scale={1.5} />
}

const AuthLayout = ({ children }: { children: React.ReactNode }) => {


    return (
        <div className="w-full h-screen bg-black flex justify-center items-center bg-cover bg-center bg-[url('/background.png')] gap-10 overflow-hidden show-scroll-bar-when-short">
            <div className="relative justify-center items-center w-[50%] h-full hidden lg:block hide-when-short">
                <Canvas camera={{ position: [-3.3, -3.15, 3.48], fov: 70 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[3, 3, 3]} intensity={1.5} />
                    <pointLight position={[-2, 1, 3]} intensity={0.8} color="#ff8800" />
                    <pointLight position={[2, -1, 3]} intensity={0.5} color="#00aaff" />
                    <Model />
                    <OrbitControls enableRotate={false} enableZoom={false} />
                </Canvas>

                <h1
                    className="absolute text-white
                    text-6xl leading-tight tracking-wide 
                    bottom-[18%] left-[0%] w-[80%] z-20 font-light font-roboto
                    drop-shadow-[0_0_10px_rgba(255,100,180,0.25)]"
                >
                    YOUR FUTURE <br /> 
                    STARTS AT <span className="bg-clip-text bg-gradient-to-r text-transparent from-pink-500 via-orange-400 to-yellow-500"> 5090 MHz</span>
                </h1>
            </div>
            {children}
        </div>
    )
}

export default AuthLayout
