import React from 'react';
import {useData} from './_app.js';

const profile = () => {
  const {user}=useData();

  return (
    <div className='container-center'>
        <div className='w-96 p-5 border-2 flx-col gap-5'>
            <img src="" alt="Profile Image" className='w-60 h-60 rounded-full border-2 border-shade2'/>
            <p className='text-lg font-inter'>{user?.email?.split('@')[0]}</p>
            <p className='text-lg font-inter'>{user?.email}</p>
            <button className='primary-btn w-full'>Update</button>
        </div>
    </div>
  )
}

export default profile