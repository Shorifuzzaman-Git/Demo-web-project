import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { UserContext } from '../context/UserContext.jsx'

const LoginCard = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('Tutor') // default role
    const [error, setError] = useState('')
    //  const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            // send role along with email & password
            const res = await axios.post(
                // http://localhost:3000/api/${role}/login ,
                { email, password },
                { withCredentials: true }
            )

            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user));
            setUser(res.data.user)
            navigate('/')
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed')
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="w-full bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10"
        >
            <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">Log in</h2>
            <p className="text-sm text-gray-500 mb-6 text-center">Enter your credentials to continue</p>

            {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}

            <form className="space-y-3" onSubmit={handleLogin}>
                {/* Role selection */}
                <div className="flex gap-3 justify-center mb-4">
                    <label className="inline-flex items-center gap-2">
                        <input
                            type="radio"
                            name="role"
                            value="Tutor"
                            checked={role === 'Tutor'}
                            onChange={() => setRole('Tutor')}
                            className="h-4 w-4"
                        />
                        <span className="text-sm">Tutor</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                        <input
                            type="radio"
                            name="role"
                            value="Student"
                            checked={role === 'Student'}
                            onChange={() => setRole('Student')}
                            className="h-4 w-4"
                        />
                        <span className="text-sm">Student</span>
                    </label>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
                        placeholder="you@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">Password</label>
                    <input
                        type="password"
                        className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full mt-2 px-4 py-2 bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-95 transition"
                >
                    Log in
                </button>

                <div className="text-center text-sm text-gray-500 mt-2">
                    Don’t have an account? <a href="/register" className="text-amber-600">Register</a>
                </div>

                <Link
                    to="/forgot-password"
                    state={{ role: role.toLowerCase() }}
                    className="text-amber-600 text-sm mt-4 block text-center"
                >
                    Reset Password
                </Link>


            </form>
        </motion.div>
    )
}

export default LoginCard