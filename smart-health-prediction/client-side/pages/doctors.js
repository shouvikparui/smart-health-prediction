import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Doctor=({name,specialist,patients})=>(
    <div className='rounded-md font-inter w-3/5 mx-auto flx-row justify-between p-5 border border-shade1'>
        <div className=''>
            <img src="" alt="profile"/>
            <p>{name}</p>
        </div>
        <p>{specialist}</p>
        <p>{patients}&nbsp; Patients</p>
    </div>
)
const doctors = () => {
  const [doctors,setDoctors]=useState([]);
    useEffect(()=>{
        const loadContents=async()=>{
        try{
            const res=await axios.get('http://localhost:3030/doctors');
            setDoctors(res.data.message);
        }
        catch(err){
            console.log(err.message)
        }
        }
        loadContents();
    },[])
  return (
    <div className='base-container'>
        <p className=' text-4xl font-alata'><b>Doctors <span className='text-shade2'>available for you,</span> </b></p>

        <div className='flx-col justify-center gap-10 my-10 '>
            {doctors?.map((obj,id)=>(
                <Doctor key={id} name={obj.name} specialist={obj.specialist} patients={obj.patients}/>
            ))}
        </div>
    </div>
  )
}

export default doctors