import React from 'react'

const Appointment=()=>(
    <div className='rounded-md font-inter w-3/5 mx-auto flx-row justify-between p-5 border border-shade1'>
        <div className=''>
            <img src="" alt="profile"/>
            <p>PK Mukherjee</p>
        </div>
        <p>Cardioloogist</p>
        <p>23 Patients</p>
    </div>
)
const appointment = () => {
  return (
    <div className='base-container'>
        <p className=' text-4xl font-alata'><b>Appointments <span className='text-shade2'>available for you,</span> </b></p>

        <div className='flx-col justify-center gap-10 my-10 '>
            <Appointment/>
        </div>
        <div className='flx-col justify-center gap-10 my-10 '>
            <button className='primary-btn mx-auto w-[200px]'>Book Appointment</button>
        </div>
    </div>
  )
}

export default appointment