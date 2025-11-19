import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const TutorCard = ({ tutor }) => {
  const { id, name, expertise, image, rating, students } = tutor

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="h-48 bg-linear-to-br from-amber-200 to-amber-100 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="h-40 w-40 object-cover rounded-full border-4 border-white shadow-md"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-amber-600 font-semibold">{expertise}</p>

        {/* Rating & Students */}
        <div className="flex justify-center gap-4 my-3 text-xs text-gray-600">
          <span>⭐ {rating} rating</span>
          <span>👥 {students} students</span>
        </div>

        {/* Button */}
        <Link to={`/tutor/${id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-3 px-4 py-2 bg-linear-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200"
          >
            View Profile
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default TutorCard
