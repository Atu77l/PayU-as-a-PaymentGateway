import React from 'react'
import './index.css'

const App = () => {

  const onSubmit=async()=>{
    try {
       const res=await fetch('http://localhost:8000/hello',{"method":"GET"})
       const result =await res.json()
       console.log('result',result)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='grid grid-cols-2 h-screen'>
        <div className="bg-blue-300 flex-col">
         <div className='text-left ml-5 mr-5 mt-10' style={{fontSize:"140px"}}>Pay U</div>
         <div className='text-center ml-5 mr-5 mt-10' style={{fontSize:"140px"}}>as a</div>
         <div className='text-right ml-5 mr-5 mt-10' style={{fontSize:"140px"}}>Payment</div>
        </div>
        <div className="p-4 m-4 shadow-xl font-semibold rounded-lg grid grid-cols-1">
        {/* <form action='https://test.payu.in/_payment' method='post'> */}
        <div className="font-serif text-xl text-center mt-2 text-blue-500">Payment Details</div>
        {/* <div className="m-1 text-blue-600 text-l font-serif">Name</div>
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="key" value="JP***g" /> */}
        <div className="m-1 text-blue-600 text-l font-serif">Transaction Id</div>
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="txnid" value="t6svtqtjRdl4ws" />
        <div className="m-1 text-blue-600 text-l font-serif">Product</div>
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="productinfo" value="iPhone" />
        <div className="m-1 text-blue-600 text-l font-serif">Amount</div>
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="amount" value="10" />
        <div className="m-1 text-blue-600 text-l font-serif">Email Address</div>
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="email" value="test@gmail.com" />
        <div className="m-1 text-blue-600 text-l font-serif">First Name</div>
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="firstname" value="Ashish" />
        <div className="m-1 text-blue-600 text-l font-serif">Last Name</div>
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="lastname" value="Kumar" />
        {/* <div className="m-1 text-blue-600 text-l font-serif">Name</div>
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="surl" value="https://apiplayground-response.herokuapp.com/" />
        <div className="m-1 text-blue-600 text-l font-serif">Name</div>
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="furl" value="https://apiplayground-response.herokuapp.com/" />
        <div className="m-1 text-blue-600 text-l font-serif">Name</div>
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="hash" value="eabec285da28fd0e3054d41a4d24fe9f7599c9d0b66646f7a9984303fd6124044b6206daf831e9a8bda28a6200d318293a13d6c193109b60bd4b4f8b09c90972" /> */}
        <input type="submit" className='bg-blue-600 text-white rounded-lg' onClick={onSubmit}/>
        </div>
    </div>
  )
}

export default App