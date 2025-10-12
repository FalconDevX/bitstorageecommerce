"use client"
import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRightIcon } from "lucide-react"


const FeatureProd = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const [isSliding, setIsSliding] = useState(false)
    const [isPageVisible, setIsPageVisible] = useState(true)

    const featureProducts = [
        {
            title: "Experience Next-Level Graphics – Power Meets Precision!",
            subtitle: "Limited Time Offer 40% Off",
            image: "/graphic-card.png",
            primaryButton: "Buy Now",
            secondaryButton: "Explore Deals",
        },
        {
            title: "Crystal Clear Audio – Hear Every Detail!",
            subtitle: "Exclusive Launch Discount 30% Off",
            image: "/graphic-card2.png",
            primaryButton: "Shop Now",
            secondaryButton: "Learn More",
        },
        {
            title: "Ultra-Fast SSDs – Performance You Deserve!",
            subtitle: "Special Offer for a Limited Time",
            image: "/graphic-card3.png",
            primaryButton: "Buy SSD",
            secondaryButton: "View Specs",
        },
        {
            title: "Ultra-Fast SSDs – Performance You Deserve!",
            subtitle: "Special Offer for a Limited Time",
            image: "/graphic-card4.png",
            primaryButton: "Buy SSD",
            secondaryButton: "View Specs",
        },
    ]

    const nextProduct = useCallback(() => {
        if (isSliding) return
        setIsSliding(true)
        setTimeout(() => {
            setCurrentSlideIndex((prev) => (prev + 1) % featureProducts.length)
            setIsSliding(false)
        }, 500)
    }, [isSliding, featureProducts.length])

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsPageVisible(!document.hidden)
        }

        document.addEventListener("visibilitychange", handleVisibilityChange)
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange)
        }
    }, [])

    useEffect(() => {
        if (!isPageVisible) return
        const interval = setInterval(nextProduct, 5000)
        return () => clearInterval(interval)
    }, [isPageVisible])

    return (
        <div className="py-10 flex justify-center px-12 sm:px-16 md:px-24 overflow-y-auto flex-col">
            <div className="w-full w-full bg-[#282C30] shadow-lg rounded-lg relative min-h-[420px] md:h-[440px] overflow-hidden">

                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlideIndex * 100}%)`,
                    }}
                >
                    {featureProducts.map((product, index) => (
                        <div
                            key={index}
                            style={{ transformStyle: "preserve-3d", transformOrigin: "center center", transition: "rotateY(-30deg) rotateX(30deg)" }}
                            className="perspective-[1000px] min-w-full flex flex-col md:flex-row justify-between items-center px-6 sm:px-10 md:px-12 py-10"
                        >
                            <div className="flex flex-col gap-4 max-w-lg">
                                <h3 className="text-orange-500">{product.subtitle}</h3>
                                <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
                                    {product.title}
                                </h1>
                                <div className="flex flex-row gap-4 items-center mt-4">
                                    <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-3 w-40 rounded-md font-medium cursor-pointer">
                                        {product.primaryButton}
                                    </button>
                                    <button className="flex items-center justify-center gap-2 text-pink-500 font-medium cursor-pointer border-2 border-pink-500 rounded-lg pl-3 py-3 w-40 whitespace-nowrap">
                                        {product.secondaryButton}
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <motion.div
                                initial={{ transform: "translateZ(-10px) translateY(20px)" }}
                                animate={{ transform: "translateZ(30px) translateY(-20px)" }}
                                transition={{ repeat: Infinity, repeatType: "mirror", duration: 2, ease: "easeInOut" }}
                                className="relative w-[280px] h-[380px] min-w-[220px] min-h-[260px]">

                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain transition-transform duration-700 ease-in-out"
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div

                    className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
                    {featureProducts.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlideIndex
                                ? "bg-orange-500 scale-110"
                                : "bg-gray-500/50"
                                }`}
                        ></div>
                    ))}
                </div>

            </div>

            <div className="w-full mt-10 h-auto bg-[#1e2227] flex items-center justify-center p-6 py-10 px-10">
                <div className="grid grid-cols-6 gap-6 w-full w-full">
                    {Array.from({ length: 18 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-[#2b2f34] rounded-xl aspect-square w-full relative shadow-inner border border-black/30"
                        >
                            <span className="absolute top-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded-md">
                                {index + 1}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default FeatureProd
