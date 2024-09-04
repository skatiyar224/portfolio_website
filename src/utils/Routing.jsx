import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Front from '../components/Front'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element= {<Front />}/>
            <Route path='/About' element= {<About />}/>
            <Route path='/Skill' element= {<Skills />}/>
            <Route path='/Projects' element= {<Projects />}/>
            <Route path='/Contact' element= {<Contact />}/>
        </Routes>
    </div>
  )
}

export default Routing