import React from 'react'
import Navbar from '../components/Navbar'
import TuitionCard from '../components/TuitionCard'


const tuitionJobs = () => {

  const tuitionJobs = [
    { id: 1, class: 6, studentGender:"Male", location:"Mirpur 6, Dhaka", subject:"All", salary:4000, perweek:3, tutoringMode:"Home Tutoring", tutorGender:"Male"},
    { id: 2, class: 11, studentGender:"Female", location:"Bagichagaon, Cumilla", subject:"English", salary:4500, perweek:3, tutoringMode:"Home Tutoring", tutorGender:"Female"},
    { id: 3, class: 4, studentGender:"Male", location:"Tejgaon, Dhaka", subject:"Math", salary:3000, perweek:3, tutoringMode:"Online", tutorGender:"Male"},
    { id: 4, class: 9, studentGender:"Female", location:"Mirpur 10, Dhaka", subject:"Science group subject", salary:5000, perweek:4, tutoringMode:"Home Tutoring", tutorGender:"Female"},
    { id: 5, class: 8, studentGender:"Female", location:"Ambarkhana, Sylhet", subject:"All", salary:4000, perweek:3, tutoringMode:"Home Tutoring", tutorGender:"Male"},
    { id: 6, class: 12, studentGender:"Male", location:"Mirpur 6, Dhaka", subject:"Math", salary:4000, perweek:4, tutoringMode:"Home Tutoring", tutorGender:"Male"},

  ]


  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />

      <div className='pt-24 container mx-auto px-4'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>Tuition Jobs</h1>
        <p className='text-gray-600 mb-8'>Browse recent tuition requests and apply to those matching your skills.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {tuitionJobs.map((job) => (
            <TuitionCard key={job.id} job={job} />
          ))}
        </div>
      </div>


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

export default tuitionJobs

