import React from 'react'
import NewReleasesIcon from '@mui/icons-material/NewReleases';

const Failure = () => {
  return (
    <div className='flex text-center justify-center m-5'>
            <div className='rounded-lg w-80 shadow-lg shadow-blue-600'>
              <div className="flex text-center justify-center"><NewReleasesIcon sx={{color:"red",fontSize:"60px"}}/></div>
              <div className="text-red-600 text-xl font-semibold">Oh No,Your Payment Failed!!!.</div>
              <div className='font-semibold text-blue-600'>Reason: </div>
              <div className="text-l font-serif font-medium">Ensure that you've entered the correct card number, expiration date, CVV, and other required details.</div>
              <div className='flex text-center justify-center m-5'><div className='bg-green-400 w-24 rounded-lg border-2 font-semibold p-2'>Try Again</div></div>
            </div>
        </div>
  )
}

export default Failure
