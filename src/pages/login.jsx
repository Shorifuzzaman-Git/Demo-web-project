// src/pages/login.jsx
import React from 'react'
import loginImage from '../assets/login-image.svg'
import { motion } from 'framer-motion'
import LoginCard from '../components/LoginCard.jsx'

const Login = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 pt-20 pb-10 px-4'>
      {/* Image - Left side on large devices */}
      <div className="order-2 lg:order-1">
        <motion.img
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          src={loginImage}
          alt="Login illustration"
          className="hidden lg:block w-120 xl:w-[450px] relative z-10 drop-shadow-lg"
        />
      </div>

      {/* Login Card - Right side on large devices */}
      <div className="order-1 lg:order-2 w-full sm:max-w-md md:max-w-lg lg:max-w-lg">
        <LoginCard />
      </div>
    </div>
  )
}

export default Login