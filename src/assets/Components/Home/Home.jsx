import { HomeIcon, Moon, RotateCcw, Sun, Volume2, VolumeX } from 'lucide-react';
import React, { useRef } from 'react';
import { useState } from 'react'

import Swal from 'sweetalert2';




const Home = () => {
  const [theme, setTheme] = useState('coffee');
  const [count, setCount] = useState(0)
  const [progress, setProgress] = useState(0);
  const [soundOn, setSoundOn] = useState(true);


  const audioRef = useRef(new Audio('/pop.mp3'))


  const HandleReset = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success btn-lg",
        cancelButton: "btn btn-danger btn-lg mr-2"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, reset it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {

      if (result.isConfirmed) {

        setCount(0);
        setProgress(0);

        swalWithBootstrapButtons.fire({
          title: "Reset!",
          text: "Your tasbih has been reset.",
          icon: "success"
        });
      }

      else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your Tasbih count is safe :)",
          icon: "error"
        });
      }
    });
  };

  const HandleTasbih = () => {

    if (soundOn) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => { });
    }

    if (navigator.vibrate) {
      navigator.vibrate(15);
    }

    setCount(prev => {
      if (prev === 100) {
        setProgress(p => p + 1);
        return 0;
      }
      return prev + 1;
    });

  }

  const toggleTheme = () => {
    const nextTheme = theme == 'autumn' ? 'coffee' : 'autumn';
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

      <div className='hero-overlay py-10 '>

        <div className='flex justify-center items-center space-x-4 py-8 px-4'>
          <HomeIcon className='size-16 md:size-20  btn btn-primary p-4 btn-circle'></HomeIcon>
          <button onClick={HandleReset} className=''> <RotateCcw className='size-16 md:size-20  btn btn-primary p-4 btn-circle'></RotateCcw></button>
          <button onClick={toggleTheme}> {
            theme === 'autumn' ? <Sun className='size-16 md:size-20  btn btn-primary p-4 btn-circle'></Sun>
              : <Moon className='size-16 md:size-20  btn btn-primary p-4 btn-circle'></Moon>
          }
          </button>
          <button onClick={() => setSoundOn(prev => !prev)}>
            {
              soundOn ? <Volume2 className='size-16 md:size-20   btn btn-primary p-4 btn-circle' />
                : <VolumeX className='size-16 md:size-20  btn btn-primary p-4 btn-circle' />
            }
          </button>

        </div>
        <div className=" hero-content max-w-md card h-full mx-auto text-center flex justify-start mt-35 md:mt-55 items-center "
        >
          <button
            style={{ "--value": count, "--thickness": "6px" }}
            aria-valuenow={count}
            role="progressbar"
            className='active:scale-90 transition-transform duration-100 select-none md:hover:bg-primary hover:bg-primary relative size-32 p-8 font-bold md:text-8xl text-5xl border-4 md:h-52 h-40 w-28 md:w-40 radial-progress before:bg-transparent bg-primary text-primary-content border-primary'
            onClick={HandleTasbih}>
            {count}

          </button>
          <div className="rounded-box absolute lg:top-0 lg:right-35 -top-2 right-25 size-14 text-lg badge badge-soft badge-warning">
            {progress}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;