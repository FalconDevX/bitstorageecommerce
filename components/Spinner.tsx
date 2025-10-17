'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
    >
      <Image
        src="/loading-fan.png"
        alt="Loading fan"
        width={100}
        height={100}
        color="white"
        className="opacity-90"
      />
    </motion.div>
  </div>
)
