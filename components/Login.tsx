'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei'
import Image from 'next/image'
import Link from 'next/link'

import Google from '@/public/social_icons/google-icon.png'
import Github from '@/public/social_icons/github-icon.png'
import Facebook from '@/public/social_icons/facebook-icon.png'

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
                    className="absolute text-transparent bg-clip-text 
                    bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500
                    text-6xl leading-tight tracking-wide 
                    bottom-[18%] left-[0%] w-[80%] z-20 font-light font-roboto
                    drop-shadow-[0_0_10px_rgba(255,100,180,0.25)]"
                >
                    MEET FUTURE<br />NOW, OLD MAN
                </h1>
            </div>

            <div className="min-w-[400px] h-[600px] my-40 flex flex-col justify-center items-start text-white px-10 py-20 bg-[#1A1D21] rounded-md shadow-[0_0_30px_rgba(255,255,255,0.1)] ">
                <h1 className="text-3xl font-semibold mb-6">Welcome Back</h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 px-4 py-2 rounded-md bg-[#131313] border border-[#414141] focus:outline-none focus:ring-1 focus:ring-white/50 font-light"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 px-4 py-2 rounded-md bg-[#131313] border border-[#414141] focus:outline-none focus:ring-1 focus:ring-white/50 font-light"
                />
                <p className="w-full text-sm text-gray-400 text-center mb-4">
                    Nie pamiętasz hasła?{' '}
                    <Link href="/resetpassword" className="text-pink-400 hover:underline">
                        Zresetuj hasło
                    </Link>
                </p>

                <button className="bg-[linear-gradient(to_bottom_right,theme(colors.yellow.300),theme(colors.orange.400),theme(colors.pink.500),theme(colors.fuchsia.700))] hover:brightness-110 hover:scale-[1.03] transition-all text-white px-6 py-3 rounded-md font-semibold shadow-[0_0_25px_rgba(255,100,80,0.4)] cursor-pointer w-full duration-400">
                    Login
                </button>

                <div className="flex items-center justify-center w-full my-4">
                    <span className="flex-grow h-px bg-white/20"></span>
                    <span className="mx-3 text-gray-400 text-sm font-medium">LUB</span>
                    <span className="flex-grow h-px bg-white/20"></span>
                </div>

                <button className="w-full mb-4 px-4 py-2 rounded-md bg-[#181818] border border-[#414141] focus:outline-none focus:ring-1 focus:ring-white/50 font-normal text-white flex items-center justify-center gap-3 hover:bg-[#1F1F1F] transition-all duration-300 cursor-pointer">
                    <Image src={Facebook} alt="Facebook logo" width={20} height={20} className="rounded-sm" />
                    Kontynuuj z Facebook
                </button>

                <button className="w-full mb-4 px-4 py-2 rounded-md bg-[#181818] border border-[#414141] focus:outline-none focus:ring-1 focus:ring-white/50 font-normal text-white flex items-center justify-center gap-3 hover:bg-[#1F1F1F] transition-all duration-300 cursor-pointer">
                    <Image src={Google} alt="Google logo" width={20} height={20} className="rounded-sm" />
                    Kontynuuj z Google
                </button>

                <button className="w-full mb-4 px-4 py-2 rounded-md bg-[#181818] border border-[#414141] focus:outline-none focus:ring-1 focus:ring-white/50 font-normal text-white flex items-center justify-center gap-3 hover:bg-[#1F1F1F] transition-all duration-300 cursor-pointer">
                    <Image src={Github} alt="Github logo" width={20} height={20} className="rounded-sm" />
                    Kontynuuj z Github
                </button>

                <p className="w-full text-sm text-gray-400 text-center mb-4">
                    Nie masz jeszcze konta?{' '}
                    <Link href="/resetpassword" className="text-pink-400 hover:underline">
                        Zarejestruj się
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
