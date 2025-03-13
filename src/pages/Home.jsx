import React from 'react'
import Hero from '../components/Hero'
import Marquees from '../components/Marquees'
import Section_1 from '../components/Section_1'
import Section_2 from '../components/Section_2'
import SignUpDes from '../components/SignUpDes'
const Home = () => {
  return (
    <>
    <div>
        <Hero />
        <Marquees />
        <Section_1 />
        <Section_2 />
        <SignUpDes />
    </div>
    </>
  )
}

export default Home