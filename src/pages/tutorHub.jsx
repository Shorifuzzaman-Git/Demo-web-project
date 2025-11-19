import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import TutorCard from '../components/TutorCard'
import HeroPng from '../assets/hero.svg'
import Education from '../assets/education.png'

const TutorHub = () => {
  const tutors = [
    { id: 1, name: 'Shuvo Khan', expertise: 'Web Development', image: HeroPng, rating: 4.9, students: 250 },
    { id: 2, name: 'Rina Ahmed', expertise: 'Python & ML', image: Education, rating: 4.8, students: 180 },
    { id: 3, name: 'Karim Hassan', expertise: 'React & Node.js', image: HeroPng, rating: 4.7, students: 320 },
    { id: 4, name: 'Fatima Jahan', expertise: 'UI/UX Design', image: Education, rating: 4.9, students: 200 },
    { id: 5, name: 'Arif Islam', expertise: 'Cloud & DevOps', image: HeroPng, rating: 4.6, students: 150 },
    { id: 6, name: 'Nadia Akter', expertise: 'Data Science', image: Education, rating: 4.8, students: 210 },
  ]

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      
      {/* Hero Section */}
      <div className='pt-24 pb-12 bg-linear-to-r from-amber-50 to-orange-50'>
        <div className='container mx-auto px-4 text-center'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'
          >
            Find Your Perfect Tutor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='text-lg text-gray-600 max-w-2xl mx-auto'
          >
            Connect with experienced tutors and take your learning to the next level.
          </motion.p>
        </div>
      </div>



      {/* Tutors Grid */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {tutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
      </div>



      {/* Call to Action */}
      <div className='bg-linear-to-r from-amber-500 to-orange-500 text-white py-12'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Become a Tutor</h2>
          <p className='mb-6 text-lg'>Share your knowledge and earn while helping others learn.</p>
          <button className='px-8 py-3 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition'>
            Join Now
          </button>
        </div>
      </div>
    
    </div>
  )
}

export default TutorHub