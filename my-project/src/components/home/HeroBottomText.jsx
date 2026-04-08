import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const HeroBottomText = () => {
  const textRef = useRef(null)
  const btn1Ref = useRef(null)
  const btn2Ref = useRef(null)

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    )
  }, [])

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 relative'>
      <p ref={textRef} className='absolute lg:w-[17vw] w-64 lg:right-20 right-0 bottom-28 lg:bottom-72 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight text-white/80 backdrop-blur-sm p-2 rounded-xl'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l'étincelle pour générer de l'émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>
      <Link to='/projects'>
        <div ref={btn1Ref} className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300 lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_#D3FD50]'>
          <span className='text-[6vw] lg:mt-6'>Projects</span>
        </div>
      </Link>
      <Link to='/agence'>
        <div ref={btn2Ref} className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300 lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_#D3FD50]'>
          <span className='text-[6vw] lg:mt-6'>agence</span>
        </div>
      </Link>
    </div>
  )
}

export default HeroBottomText