import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { IoMdNotifications } from 'react-icons/io'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false)
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [])

  const handleProfile = () => {
    setOpen(false)
    navigate('/profile')
  }

  const handleLogout = () => {
    logout()
    setOpen(false)
    navigate('/')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white shadow">
      <div className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        <Link to="/" className="text-amber-500 font-semibold">Online Tuition Media</Link>

        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            <li><Link to="/" className="text-gray-700 hover:text-amber-500">Home</Link></li>
            <li><Link to="/tuitionJobs" className="text-gray-700 hover:text-amber-500">TuitionJobs</Link></li>
            <li><Link to="/tutorHub" className="text-gray-700 hover:text-amber-500">TutorHub</Link></li>
            {user ? (
              <>
                <li>
                  <button
                    className="relative p-1 text-gray-700 hover:text-amber-500"
                    aria-label="Notifications"
                    onClick={() => navigate('/notifications')}
                  >
                    <IoMdNotifications size={20} />
                  </button>
                </li>
                <li ref={dropdownRef} className="relative">
                  <button onClick={() => setOpen((v) => !v)} className="px-3 py-1 rounded-md bg-amber-50 text-gray-800">
                    {user.name}
                  </button>

                  {open && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg py-1 z-50">
                      <button onClick={handleProfile} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Profile</button>
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
                    </div>
                  )}
                </li>
              </>
            ) : (
              <>
                <li><Link to="/register" className="text-gray-700 hover:text-blue-50 bg-amber-400 p-1 rounded-md">Register</Link></li>
                <li><Link to="/login" className="text-gray-700 hover:text-blue-50 bg-amber-400 p-1 rounded-md">Login</Link></li>
              </>
            )}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <IoMdClose size={22} /> : <IoMdMenu size={22} />}
        </button>
      </div>

      {/* Mobile panel */}
      <div className={`md:hidden bg-white border-t ${open ? 'block' : 'hidden'}`}>
        
        <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-3">
            <li><Link to="/" className="block text-center text-gray-700 bg-amber-300 p-1 rounded-sm hover:text-amber-50" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/tuitionJobs" className="block text-center text-gray-700 bg-amber-300 p-1 rounded-sm hover:text-amber-50" onClick={() => setOpen(false)}>TuitionJobs</Link></li>
            <li><Link to="/tutorHub" className="block text-center text-gray-700 bg-amber-300 p-1 rounded-sm hover:text-amber-50" onClick={() => setOpen(false)}>TutorHub</Link></li>
            {user ? (
              <>
                <li>
                  <button onClick={() => { setOpen(false); navigate('/notifications') }} className="block w-full text-center text-gray-700 bg-amber-300 p-1 rounded-sm hover:text-amber-50">Notifications</button>
                </li>
                <li>
                  <div className="flex flex-col gap-2">
                    <button onClick={() => { setOpen(false); navigate('/profile') }} className="block w-full text-center text-gray-700 bg-amber-300 p-1 rounded-sm hover:text-amber-50">Profile</button>
                    <button onClick={() => { logout(); setOpen(false); navigate('/') }} className="block w-full text-center text-gray-700 bg-amber-300 p-1 rounded-sm hover:text-amber-50">Logout</button>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/register" className="block text-center text-gray-700 bg-amber-300 p-1 rounded-sm hover:text-amber-50" onClick={() => setOpen(false)}>Register</Link></li>
                <li><Link to="/login" className="block text-center text-gray-700 bg-amber-300 p-1 rounded-sm hover:text-amber-50" onClick={() => setOpen(false)}>Login</Link></li>
              </>
            )}
          </ul>
        </div>

      </div>

    </header>
  )
}

export default Navbar