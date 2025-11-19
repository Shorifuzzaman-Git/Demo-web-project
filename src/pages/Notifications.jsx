import React from 'react'
import Navbar from '../components/Navbar'

const Notifications = () => {
  const items = [
    { id: 1, text: 'New message from Shuvo', time: '2h' },
    { id: 2, text: 'Your profile was viewed 10 times', time: '1d' },
    { id: 3, text: 'New tuition request in your area', time: '3d' },
  ]

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='pt-24 container mx-auto px-4'>
        <h1 className='text-2xl font-bold mb-4'>Notifications</h1>
        <div className='space-y-3'>
          {items.map((it) => (
            <div key={it.id} className='bg-white p-4 rounded shadow-sm flex justify-between'>
              <div>{it.text}</div>
              <div className='text-sm text-gray-400'>{it.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notifications
