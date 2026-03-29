import { HomeIcon, Moon, Settings, Settings2, Sun } from 'lucide-react';
import React from 'react';
import { useState } from 'react'
import { data } from 'react-router';




const Home = () => {
  const [theme, setTheme] = useState('coffee');
  const [count, setCount] = useState(0)
  const [progress, setProgress] = useState(0);
  const HandleTasbih = () => {
    setCount(prev => {
      if (prev === 100) {
        setProgress(p => p + 1);
        return 0;
      }
      return prev + 1;
    });

  }

  const toggleTheme = () => {
    const nextTheme = theme == 'cmyk' ? 'coffee' : 'cmyk';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme)
  }
  return (
    <div className='hero min-h-screen text-center'
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/23PhXnZz/23615475-6807000.jpg')"
      }}

    >

      <div className='hero-overlay py-10'>

        <div className='flex justify-center items-center space-x-4 py-8'>
          <HomeIcon className='size-20 btn btn-primary p-4 btn-circle'></HomeIcon>
          <Settings className='size-20  btn btn-primary p-4 btn-circle'></Settings>
          <button onClick={toggleTheme}> {
            theme === 'cmyk' ? <Sun className='size-20  btn btn-primary p-4 btn-circle'></Sun>
              : <Moon className='size-20  btn btn-primary p-4 btn-circle'></Moon>
          }
          </button>

        </div>
        <div className=" hero-content max-w-md card h-full mx-auto text-center flex justify-center items-center "
        >
          <button
            style={{ "--value": count, "--thickness": "6px" }}
            aria-valuenow={count}
            role="progressbar"
            className='active:scale-90 transition-transform duration-100 select-none md:hover:bg-primary hover:bg-primary relative size-32 p-8 font-bold text-8xl border-4 h-52 w-40 radial-progress before:bg-transparent bg-primary text-primary-content border-primary'
            onClick={HandleTasbih}>
            {count}

          </button>
          <div className="rounded-box absolute lg:top-55 lg:right-35 top-55 right-25 size-14 text-lg badge badge-soft badge-warning">
            {progress}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;