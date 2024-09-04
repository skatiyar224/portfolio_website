import React from 'react'
import Button from './Button'

function Skills() {
  return (
    <div className='w-full mt-20 pb-4'>
        <div className="max-w-[80%] mx-auto text-white">
            <h3 className='text-[3rem] text-center'>My <span className='text-[#06b6d4]'>Skills</span></h3>
            <p className='p-3 mt-5'>I possess a diverse technical skill set that includes expertise in HTML, CSS, JavaScript, React.js, Redux, Node.js, Express.js, and Vite.js. My professional skills include strong problem-solving abilities, effective teamwork, and project management. I am adaptable, detail-oriented, and committed to continuous learning, which allows me to stay ahead in the fast-evolving field of web development.
            <br />
            <br />
            You can checkout more by clicking on the button below...
            </p>
            <div className='h-[10vw] flex'>
              <div className='w-full flex justify-center mt-5'> 
                <Button title = {"About My Skills"} />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skills