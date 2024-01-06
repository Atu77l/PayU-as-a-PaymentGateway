import React, { useState, useEffect } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Success = () => {
  return (
    <div className='flex text-center justify-center m-5'>
                <div className='shadow-lg border-2 shadow-blue-500 text-left p-2 W-96 rounded-lg'>
                    <div className='text-center justify-center text=green-600'><CheckCircleIcon sx={{color:"green"}} /></div>
                    <div className="text-center justify-center text-green-600">Payment Successful</div>
                    <div className='grid grid-cols-2'>
                        <div className=''>Payment Type</div>
                        <div className=" ">NetBanking</div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className=''>Bank</div>
                        <div className=" ">State Bank Of India</div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className=''>Name</div>
                        <div className=" ">Atul Kesharwani</div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className=''>Email</div>
                        <div className=" ">kesharwaniatul9935@gmail.com</div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className=''>Price</div>
                        <div className=" ">500</div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className=''>TransactionId</div>
                        <div className=" ">KSJKFUIIJ638762MNJSHFK</div>
                    </div>
                    {/* for Button */}
                    <div className='flex justify-end'>
                    <div className='flex flex-row gap-5'>
                      <div className='bg-blue-500 border-2 border-white w-24 text-center rounded-lg'>PRINT</div>
                      <div className='bg-blue-500 border-2 border-white w-24 text-center rounded-lg'>CLOSE</div>
                    </div>
                    </div>
                </div>
            </div>
  )
}

export default Success
