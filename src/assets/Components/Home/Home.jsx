import React from 'react';
import { useState } from 'react'
import BgImage from '../../../../public/tea-glass-with-dates-fruit-beads-canvas.jpg'


const Home = () => {
  const [count, setCount] = useState(0)
  const HandleTasbih = () => {
    setCount(prev => (prev==100? 0:prev + 1));
    
  }
  return (
    <div className='h-screen   mx-auto text-center '
      style={{
    backgroundImage:
      {BgImage},
  }}
   
  >

      <h1 className='text-2xl mt-5 font-bold font-ubuntu'>Daily Tasbih</h1>
      <div className="card h-full mx-auto text-center flex justify-center items-center" 
      >
        <button 
        style={{ "--value": count }} aria-valuenow={count} role="progressbar"
        className='p-8 text-8xl border-4 h-40 w-32 shadow-2xl radial-progress bg-primary text-primary-content border-primary' onClick={() => HandleTasbih()}>
          {count}
        </button>
       

      </div>

    </div>
  );
};

export default Home;