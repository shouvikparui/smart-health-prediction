import React from 'react'
import { FaBeer } from 'react-icons/fa';
import Patient from '../asset/patient.png'
import Doctor from '../asset/doctor.png';
import Admin from '../asset/admin.png';
import Image from 'next/image';

const Module=[
  {
    name:'Patient',
    image:Patient
  },
  {
    name:'Admin',
    image:Admin
  },
  {
    name:'Doctor',
    image:Doctor
  }
]
const About=[
  {
    name:'Quick Book',
    image:Doctor
  },
  {
    name:'Quick Book',
    image:Doctor
  },
  {
    name:'Quick Book',
    image:Doctor
  },
  {
    name:'Quick Book',
    image:Doctor
  },
  {
    name:'Quick Book',
    image:Doctor
  },
  
]
const index = () => {
  return (
    <>
      <section className='bg-theme h-[80vh] flx-col md:flex-row md:justify-between justify-between primary-container'>
          <div className='md:w-2/5 w-full   text-primary '>
            <p className=' text-5xl '><b>Have your <span className='text-shade2'>health checkup</span> now!</b></p>
            <p className='text-lg font-inter my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <button className='primary-btn w-[200px]'>Get Started</button>
          </div>
          <div className='md:w-2/5 w-full'>
            <img src="https://cdn.medifind.com/wp/2020/08/31184653/00_3_8-Major-Problems-with-the-US-Healthcare-System-Today_hero-768x510.png" alt="Banner image" className='w-[400px]'/>
          </div>
      </section>
      <section className='flx-row flex-wrap justify-center base-container'>
        {Module.map((obj,id)=>(
            <div key={id} className='mx-10 w-[200px] h-[200px] p-5 rounded-md hover:border-2 hover:border-shade2 flx-col justify-center shadow-lg' >
              <Image src={obj.image} className='translate-x-3' alt="Patient" />
              <p className='text-2xl font-alata text-shade1'><b>{obj.name}</b></p>
            </div>
        ))}
      </section>
      <section className='bg-primary base-container'>

        <div className='text-center '>
           <p className='text-lg font-inter my-5 md:w-2/4 mx-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
        </div> 
        <div className='flx-row flex-wrap justify-center my-10 '>
          {About.map((obj,id)=>(
            <div key={id} className='mr-10 w-[200px] h-[200px] p-5 rounded-md hover:border-2 hover:border-shade2 flx-col justify-center gap-5 shadow-lg bg-light' >
            <Image src={obj.image} className='translate-x-3' alt="Patient" />
            <p className='text-2xl font-alata text-shade1'><b>{obj.name}</b></p>
            </div>
          ))}
        </div>
        
      </section>
    </>
  )
}

export default index