from flask import Flask, render_template, request, redirect, url_for, flash, jsonify,make_response
from flask_cors import CORS
import hashlib
import uuid
from dotenv import load_dotenv
import os
import asyncio
import requests


app = Flask(__name__,template_folder='templates')


CORS(app)
load_dotenv()

@app.route('/hello',methods=['GET'])
def hello():
    return jsonify({"message":"hello world"})

@app.route('/',methods=["GET","POST"])
def blank():
    return "hellow rold"

def generate_transaction_id():
    # Generate a random UUID (Version 4)
    transaction_id = uuid.uuid4()
    
    # Convert the UUID to a string
    transaction_id_str = str(transaction_id)

    return transaction_id_str

def createHash(transactionId,amount,firstName,Email,MobileNumber,productInfo,surl,furl):
    # sha512(key|txnid|amount|
    # productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5||||||SALT)
    key=os.environ.get('MERCHANT_KEY')
    salt=os.environ.get('MERCHANT_SALT')
    print(key,salt)
    input_string=key+'|'+transactionId+'|'+amount+'|'+productInfo+'|'+firstName+'|'+Email+'|||||||||||'+salt
    hashed_value = hashlib.sha512(input_string.encode()).hexdigest()
    print(hashed_value)
    return hashed_value

# curl -X POST "https://test.payu.in/_payment-H "accept: application/json" -H 
# "Content-Type: application/x-www-form-urlencoded" -d”
# key=JP***g&
# txnid=bvRCCBO4YiGGHE&
# amount=10.00&
# firstname=Ashish&email=test@gmail.com&
# phone=9876543210&productinfo=iPhone&pg=MC&bankcode=SODEXO&
# surl=https://apiplayground-response.herokuapp.com/&
# furl=https://apiplayground-response.herokuapp.com/&
# ccnum=637513XXXXXX9318
# &ccexpmon=05&
# ccexpyr=2022&
# ccvv=123&
# ccname=Ashish&
# hash=ad36b3253313753088c662053b043fbe6d”

# My Account:: (PayU hosted website)
# curl -X POST "https://test.payu.in/_payment"
# -H "Content-Type: application/x-www-form-urlencoded" -d
# "key=JP***g&
# txnid=txnid120197641440&
# amount=10.00&
# firstname=PayU User
# &email=test@gmail.com&
# phone=9876543210&
# productinfo=iPhone&
# surl=https://test-payment-middleware.payu.in/simulatorResponse&
# furl=https://test-payment-middleware.payu.in/simulatorResponse&
# hash=19b6bf3fe30dbc5aaa3ba068e781f5f87e5dcc307dc74f729cf9f7e703e622ea37642d7f9fbd7426d9a5dbb83d621f5b210ea9c2f9dab1cb3c6bd649a079d41c"

@app.route('/payu/payment', methods=["POST"])
def payu_payment():
    print('request.json', request.json)
    key = os.environ.get('MERCHANT_KEY')
    TransactionId = generate_transaction_id()
    FirstName = request.json['firstName']
    MobileNumber = request.json['mobileNumber']
    Email = request.json['email']
    Amount = request.json['amount']
    productInfo = request.json['productInfo']
    SuccessUrl = 'http://localhost:8000/payu/payment/success'
    FailureUrl = 'http://localhost:8000/payu/payment/failure'
    hash = createHash(TransactionId, str(Amount), FirstName, Email, MobileNumber, productInfo, SuccessUrl, FailureUrl)
    
    url = "https://test.payu.in/_payment"
    payload = f"key={key}&txnid={TransactionId}&amount={Amount}&productinfo={productInfo}&firstname={FirstName}&email={Email}&surl={SuccessUrl}&furl={FailureUrl}&hash={hash}"

    headers = {"Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded"}

    # Use redirect from Flask
    
    return jsonify({"key":key,"transactionId":TransactionId,"productInfo":productInfo,"firstName":FirstName,"mobileNumber":MobileNumber,"amount":Amount,"email":Email,"failureUrl":FailureUrl,"successUrl":SuccessUrl,"hash":hash})

@app.route('/payu/payment/success',methods=["GET","POST"])
async def payu_payment_success():
    try:
        return redirect('http://localhost:3000/success')
    except Exception as e:
        return e

@app.route('/payu/payment/failure',methods=["POST"])
async def payu_payment_failure():
    try:
        return redirect('http://localhost:3000/failure')
    except Exception as e:
        print(e)
        return e

if __name__=='__main__':
    app.run(debug=True,port=8000)
