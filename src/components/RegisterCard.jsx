import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const RegisterCard = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="w-full max-w-md bg-white rounded-xl shadow-md p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">Create an account</h2>
      <p className="text-sm text-gray-500 mb-6 text-center">Sign up as a Tutor or Student to get started</p>

      {/* Select role */}
      <div className="flex gap-3 justify-center mb-4">
        <label className="inline-flex items-center gap-2">
          <input type="radio" name="role" defaultChecked className="h-4 w-4" />
          <span className="text-sm">Tutor</span>
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="radio" name="role" className="h-4 w-4" />
          <span className="text-sm">Student</span>
        </label>
      </div>

      {/* Form */}
      <form className="space-y-3" onSubmit={(e) => {
        e.preventDefault()
        const form = e.target
        const name = form.querySelector('input[placeholder="Your full name"]').value || 'User'
        const phone = form.querySelector('input[placeholder="01XXXXXXXXX"]').value || ''
        const email = form.querySelector('input[placeholder="you@example.com"]').value || ''
        const role = form.querySelector('input[name="role"]:checked')?.nextSibling?.textContent || 'Tutor'
        const userObj = { id: Date.now(), name, phone, email, role }
        login(userObj)
        navigate('/profile')
      }}>
        {/* form fields */}
        
        <div>
          <label className="block text-sm text-gray-600 mb-1">Full name</label>
          <input className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Your full name" />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Phone</label>
          <input className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="01XXXXXXXXX" />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input type="email" className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="you@example.com" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input type="password" className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Password" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Confirm</label>
            <input type="password" className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Confirm password" />
          </div>
        </div>

        <button type="submit" className="w-full mt-2 px-4 py-2 bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-95 transition">Register</button>

        <div className="text-center text-sm text-gray-500 mt-2">Already have an account? <a href="/login" className="text-amber-600">Log in</a></div>
      </form>
    </motion.div>
  )
}

export default RegisterCard