import React from 'react';
import { useState } from 'react'




const Home = () => {
  const [count, setCount] = useState(0)
  const [progress, setProgress]=useState(0);
  const HandleTasbih = () => {
    setCount(prev => (prev==100? 0:prev + 1));
    const newProgress=(count==100?progress+1:0);
    setProgress(newProgress);
    
  }
  return (
    <div className='hero min-h-screen text-center'
      style={{
    backgroundImage:
      "url('https://i.ibb.co.com/FLpsDsCn/2554172-13591.jpg')",
      
  }}
   
  >

      <div className='hero-overlay py-10'>
        <h1 className='text-2xl mt-5 font-bold font-ubuntu'>Daily Tasbih</h1>
      <div className=" hero-content max-w-md card h-full mx-auto text-center flex justify-center items-center " 
      >
        <button 
        style={{ "--value": count } } 
        aria-valuenow={count} 
        role="progressbar"
        className= 'relative size-32 p-8 font-bold text-8xl border-4 lg:h-52 lg:w-40 shadow-xl radial-progress bg-primary text-primary-content border-primary' 
        onClick={HandleTasbih}>
          {count}
        </button>
       <div className="absolute lg:top-75 lg:right-35 top-55 right-25 size-14 badge badge-soft badge-warning">{progress}</div>

      </div>
      </div>

    </div>
  );
};

export default Home;