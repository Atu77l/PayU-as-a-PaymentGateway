import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

const App = () => {
  const navigate=useNavigate;
  const [result,setResult]=useState({})

  const onSubmit = async () => {
    try {
      const data = {"firstName": "stul","mobileNumber":"9935267467","productInfo": "subscription","email":"kesharwaniatul9935@gmail.com","amount":100 };
  
      const res = await fetch('http://localhost:8000/payu/payment', {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type
        },
        body: JSON.stringify(data), // Convert data to JSON format
      });
  
      const result1 = await res.json();
      setResult(result1);
      console.log(result1);
      // console.log(result.payload,result.url,result.header)
      // window.location.href=result.url+'?'+result.payload;
      // const res1=await fetch(result.url,{method:"POST",headers:result.header,body: result.payload})
      // console.log(res1);
      
    } catch (error) {
      console.log(error);
    }
  };
  
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
         {/* For redirection to another page with get method */}
         {/* window.location.href=result.url+'?'+result.payload; */}
         {/* For redirection to another page with post method */}
         {/* payload = f"key={key}&txnid={TransactionId}&amount={Amount}&productinfo={productInfo}&firstname={FirstName}&email={Email}&surl={SuccessUrl}&furl={FailureUrl}&hash={hash}" */}
         <form action="https://test.payu.in/_payment" method='post'>
         <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="key" value={result.key} onChange={()=>{}} />
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="txnid" value={result.transactionId} onChange={()=>{}} />
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="productinfo" value={result.productInfo} onChange={()=>{}}  />
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="amount" value={result.amount} onChange={()=>{}} />
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="firstname" value={result.firstName} onChange={()=>{}} />
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="email" value={result.email} onChange={()=>{}} />
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="phone" value={result.mobileNumber} onChange={()=>{}} />
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="surl" value={result.successUrl} onChange={()=>{}} />
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="furl" value={result.failureUrl}  onChange={()=>{}} />
        <input type="text" className="text-l border-2 border-black rounded-lg p-1 m-1" name="hash" value={result.hash} onChange={()=>{}}  />
        <input type="submit"></input>
         </form>
    </div>
  )
}

export default App