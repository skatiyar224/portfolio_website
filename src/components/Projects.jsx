import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Projects() {
  return (
    <div className='max-w-[80%] mx-auto mt-5 flex items-center justify-center flex-col'>
        <span className='text-[3rem] border-b-2'>Projects</span>
        <div className='mt-16 text-center '>
            <h2 className='text-[7rem]'>Coming {""}
                <span style={{textShadow: "0 0 .45rem ##35e1ff"}} className='text-[#35e1ff]'>
                    <Typewriter
                        words={["Soon...", "Shortly..."]}
                        loop = {false}
                        cursor = {true}
                        cursorStyle = '|'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                </span>
            </h2>
        </div>
    </div>
  )
}

export default Projects