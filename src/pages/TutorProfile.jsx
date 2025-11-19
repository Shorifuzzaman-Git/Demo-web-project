import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import HeroPng from '../assets/hero.svg'
import Education from '../assets/education.png'

const TutorProfile = () => {
  const { id } = useParams()

  // Sample tutor data
  const tutorsData = {
    1: {
      name: 'Shuvo Khan',
      expertise: 'Web Development',
      image: HeroPng,
      rating: 4.9,
      students: 250,
      bio: 'I am an experienced web developer with 8+ years of expertise in full-stack development. I specialize in teaching modern web technologies like React, Node.js, and MongoDB.',
      experience: '8+ years',
      qualifications: 'BSc in Computer Science, Google Cloud Certified',
      hourlyRate: '$25/hour',
      availability: 'Monday - Friday, 2 PM - 8 PM',
    },
    2: {
      name: 'Rina Ahmed',
      expertise: 'Python & ML',
      image: Education,
      rating: 4.8,
      students: 180,
      bio: 'Data Scientist and ML engineer passionate about teaching machine learning and Python. I help students understand real-world applications of AI.',
      experience: '6+ years',
      qualifications: 'MSc in Data Science, TensorFlow Certified',
      hourlyRate: '$28/hour',
      availability: 'Tuesday - Saturday, 3 PM - 9 PM',
    },
    3: {
      name: 'Karim Hassan',
      expertise: 'React & Node.js',
      image: HeroPng,
      rating: 4.7,
      students: 320,
      bio: 'Full-stack JavaScript developer specializing in React and Node.js. I focus on teaching best practices and modern development patterns.',
      experience: '7+ years',
      qualifications: 'AWS Certified, JavaScript Expert',
      hourlyRate: '$26/hour',
      availability: 'Monday - Thursday, 1 PM - 7 PM',
    },
    4: {
      name: 'Fatima Jahan',
      expertise: 'UI/UX Design',
      image: Education,
      rating: 4.9,
      students: 200,
      bio: 'Creative UI/UX designer with a passion for creating beautiful and user-friendly interfaces. I teach design thinking and modern design tools.',
      experience: '5+ years',
      qualifications: 'Adobe Certified, UX/UI Specialist',
      hourlyRate: '$22/hour',
      availability: 'Wednesday - Sunday, 2 PM - 8 PM',
    },
    5: {
      name: 'Arif Islam',
      expertise: 'Cloud & DevOps',
      image: HeroPng,
      rating: 4.6,
      students: 150,
      bio: 'DevOps engineer and cloud architect with expertise in AWS, Docker, and Kubernetes. I help students master cloud technologies.',
      experience: '9+ years',
      qualifications: 'AWS Solutions Architect, Docker Certified',
      hourlyRate: '$30/hour',
      availability: 'Monday - Friday, 3 PM - 9 PM',
    },
    6: {
      name: 'Nadia Akter',
      expertise: 'Data Science',
      image: Education,
      rating: 4.8,
      students: 210,
      bio: 'Data scientist focused on big data and analytics. I specialize in teaching SQL, Python, and data visualization techniques.',
      experience: '6+ years',
      qualifications: 'PhD in Statistics, Data Science Expert',
      hourlyRate: '$27/hour',
      availability: 'Monday - Saturday, 4 PM - 10 PM',
    },
  }

  const tutor = tutorsData[id] || tutorsData[1]

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />

      {/* Profile Header */}
      <div className='pt-24 pb-8 bg-linear-to-br from-amber-500 to-orange-500 text-white'>
        <div className='container mx-auto px-4'>
          <Link to='/TutorHub' className='flex items-center gap-2 mb-6 w-fit hover:opacity-80'>
            <span>← Back to Tutors</span>
          </Link>
          
          <div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              src={tutor.image}
              alt={tutor.name}
              className='w-48 h-48 rounded-full border-4 border-white shadow-lg object-cover'
            />
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className='text-center md:text-left'
            >
              <h1 className='text-4xl font-bold mb-2'>{tutor.name}</h1>
              <p className='text-xl mb-4 opacity-90'>{tutor.expertise}</p>
              <div className='flex flex-col md:flex-row gap-4 text-sm'>
                <span className='flex items-center gap-1'>⭐ {tutor.rating} ({tutor.students} students)</span>
                <span>💰 {tutor.hourlyRate}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2'>
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='bg-white rounded-lg shadow-lg p-8 mb-8'
            >
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>About Me</h2>
              <p className='text-gray-700 leading-relaxed mb-6'>{tutor.bio}</p>

              <div className='grid grid-cols-2 gap-6'>
                <div>
                  <h3 className='text-sm font-semibold text-gray-600 mb-2'>Experience</h3>
                  <p className='text-lg font-bold text-amber-600'>{tutor.experience}</p>
                </div>
                <div>
                  <h3 className='text-sm font-semibold text-gray-600 mb-2'>Availability</h3>
                  <p className='text-lg font-bold text-amber-600'>{tutor.availability}</p>
                </div>
              </div>
            </motion.div>

            {/* Qualifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className='bg-white rounded-lg shadow-lg p-8'
            >
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>Qualifications</h2>
              <div className='space-y-3'>
                {tutor.qualifications.split(',').map((qual, idx) => (
                  <div key={idx} className='flex items-center gap-3'>
                    <span className='text-amber-500 text-xl'>✓</span>
                    <span className='text-gray-700'>{qual.trim()}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className='lg:col-span-1'
          >
            <div className='bg-white rounded-lg shadow-lg p-8 sticky top-24'>
              <div className='mb-6'>
                <p className='text-3xl font-bold text-amber-600 mb-2'>{tutor.hourlyRate}</p>
                <p className='text-gray-600'>per hour</p>
              </div>

              <button className='w-full mb-3 px-6 py-3 bg-linear-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:opacity-90 transition'>
                Book Session
              </button>

              <button className='w-full px-6 py-3 border-2 border-amber-500 text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition'>
                Message
              </button>

              <div className='mt-8 space-y-4 border-t pt-6'>
                <div>
                  <p className='text-sm text-gray-600 mb-1'>Response Time</p>
                  <p className='font-semibold text-gray-800'>Within 2 hours</p>
                </div>
                <div>
                  <p className='text-sm text-gray-600 mb-1'>Languages</p>
                  <p className='font-semibold text-gray-800'>English, Bengali</p>
                </div>
                <div>
                  <p className='text-sm text-gray-600 mb-1'>Teaching Style</p>
                  <p className='font-semibold text-gray-800'>Interactive & Practical</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TutorProfile
