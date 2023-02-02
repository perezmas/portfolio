import React from 'react'
import resume from './files/resume.pdf'

const Resume = () => {
  return (
      <div className="gradient-bg-about text-left hover:bg-indigo-500 duration-300 hover:text-[#fec70c]" id="about">
          <a href={resume} target="_blank" rel="noopener noreferrer">
              <div id="resumé" className="py-1 text-left p-4 font-bold md:text-6xl xl:text-7xl text-5xl text-t-primary tracking-wider cursor-pointer">
                  Resumé
              </div>
          </a>
      </div>
  )
}

export default Resume;