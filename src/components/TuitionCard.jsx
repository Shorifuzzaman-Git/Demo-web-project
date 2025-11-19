import React from 'react'

const TuitionCard = ({ job }) => {
  const {
    id,
    class: cls,
    studentGender,
    location,
    subject,
    salary,
    perweek,
    tutoringMode,
    tutorGender,
  } = job

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Class {cls} • {subject}</h3>
            <p className="text-sm text-gray-500 mt-1">{tutoringMode} • {location}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-amber-600">{salary}৳</p>
            <p className="text-sm text-gray-500">{perweek}× / week</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 text-sm bg-amber-50 text-amber-700 rounded-full">Student: {studentGender}</span>
          <span className="px-3 py-1 text-sm bg-gray-50 text-gray-700 rounded-full">Tutor: {tutorGender}</span>
          <span className="px-3 py-1 text-sm bg-green-50 text-green-700 rounded-full">Mode: {tutoringMode}</span>
        </div>

        <div className="mt-5 flex gap-3">
          <button className="flex-1 px-4 py-2 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 transition">Apply</button>
          <button className="px-4 py-2 border border-amber-600 text-amber-600 rounded-md hover:bg-amber-50 transition">Details</button>
        </div>
      </div>
    </article>
  )
}

export default TuitionCard

