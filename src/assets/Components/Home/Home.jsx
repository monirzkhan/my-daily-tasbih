import React from 'react';
import { useState } from 'react'




const Home = () => {
  const [count, setCount] = useState(0)
  const HandleTasbih = () => {
    setCount(prev => (prev==100? 0:prev + 1));
    
  }
  return (
    <div className='hero min-h-screen text-center'
      style={{
    backgroundImage:
      "url('https://i.ibb.co.com/FLpsDsCn/2554172-13591.jpg')",
      
  }}
   
  >

      <div className='hero-overlay'>
        <h1 className='text-2xl mt-5 font-bold font-ubuntu'>Daily Tasbih</h1>
      <div className="hero-content card h-full mx-auto text-center flex justify-center items-center " 
      >
        <button 
        style={{ "--value": count }} aria-valuenow={count} role="progressbar"
        className=' p-8 text-8xl border-4 h-40 w-32 shadow-xl radial-progress bg-primary text-primary-content border-primary' onClick={HandleTasbih}>
          {count}
        </button>
       

      </div>
      </div>

    </div>
  );
};

export default Home;