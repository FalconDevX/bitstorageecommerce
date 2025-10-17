'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useAuth } from '@/api/useAuth.store'   
import Link from 'next/link'

import Google from '@/public/social_icons/google-icon.png'
import Github from '@/public/social_icons/github-icon.png'
import Facebook from '@/public/social_icons/facebook-icon.png'

const Register = () => {
    const register = useAuth((state) => state.register)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string>("")

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await register(username, email, password);
            console.log("Register successful");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Register failed");
            }
        }
    };

    return (

        <form onSubmit={handleRegister} className="min-w-[400px] h-[600px] my-40 flex flex-col justify-center items-start text-white px-10 py-20 bg-[#1A1D21] rounded-md shadow-[0_0_30px_rgba(255,255,255,0.1)] ">
            <h1 className="text-3xl font-semibold mb-6">Join us today</h1>

            <input
                type="text"
                placeholder="Username"
                className="w-full mb-4 px-4 py-2 rounded-md bg-[#131313] border border-[#414141] focus:outline-none focus:ring-1 focus:ring-white/50 font-light"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 px-4 py-2 rounded-md bg-[#131313] border border-[#414141] focus:outline-none focus:ring-1 focus:ring-white/50 font-light"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-2 rounded-md bg-[#131313] border border-[#414141] focus:outline-none focus:ring-1 focus:ring-white/50 font-light"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <button className="bg-[linear-gradient(to_bottom_right,theme(colors.yellow.300),theme(colors.orange.400),theme(colors.pink.500),theme(colors.fuchsia.700))] hover:brightness-110 hover:scale-[1.03] transition-all text-white px-6 py-3 rounded-md font-semibold shadow-[0_0_25px_rgba(255,100,80,0.4)] cursor-pointer w-full duration-400">
                Register
                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
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
                Masz już konto?{' '}
                <Link href="/login" className="text-pink-400 hover:text-pink-300">
                    Zaloguj się
                </Link>
            </p>
        </form >

    )
}

export default Register
