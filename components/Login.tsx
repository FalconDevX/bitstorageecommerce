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

const Login = () => {
    return (
        <div className="w-full h-screen bg-black flex justify-center items-center bg-cover bg-center bg-[url('/background.png')] px-20 gap-20">
            {/* Lewa strona z modelem */}
            <div className="flex justify-center items-center w-[50%] h-full">
                <Canvas camera={{ position: [-3.3, -3.15, 3.48], fov: 70 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[3, 3, 3]} intensity={1.5} />
                    <pointLight position={[-2, 1, 3]} intensity={0.8} color="#ff8800" />
                    <pointLight position={[2, -1, 3]} intensity={0.5} color="#00aaff" />

                    <Model />

                    <OrbitControls enableRotate={false} enableZoom={false} />
                </Canvas>
            </div>

            {/* Prawa strona z panelem logowania */}
            <div className="w-[400px] h-[500px] flex flex-col justify-center items-start text-white px-10 bg-[#1A1D21] rounded-md shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <h1 className="text-3xl font-semibold mb-6">Welcome Back</h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 px-4 py-2 rounded-md bg-[#282C30] border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white-500 font-light"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-6 px-4 py-2 rounded-md bg-[#282C30] border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white-500 font-light"
                />

                <button className="bg-gradient-to-br from-yellow-300 via-orange-400 via-pink-500 to-fuchsia-600 hover:brightness-110 hover:scale-[1.03] transition-all text-white px-6 py-3 rounded-md font-semibold shadow-[0_0_25px_rgba(255,100,80,0.4)] cursor-pointer w-full duration-400">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login
