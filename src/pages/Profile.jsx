import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { AuthContext } from '../context/AuthContext'

const Profile = () => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return (
      <div className='pt-24 container mx-auto px-4'>
        <p className='text-center text-gray-600'>You are not logged in.</p>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='pt-24 container mx-auto px-4'>
        <div className='max-w-3xl mx-auto bg-white p-8 rounded-lg shadow'>
          <h1 className='text-2xl font-bold mb-4'>Your Profile</h1>
          <p className='text-gray-700'><strong>Name:</strong> {user.name}</p>
          <p className='text-gray-700'><strong>Email:</strong> {user.email || '-'}</p>
          <p className='text-gray-700'><strong>Phone:</strong> {user.phone || '-'}</p>
          <p className='text-gray-700'><strong>Role:</strong> {user.role || '-'}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
