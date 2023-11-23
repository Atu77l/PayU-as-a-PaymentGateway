from flask import Flask, render_template, request, redirect, url_for, flash, jsonify,make_response
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

@app.route('/hello',methods=['GET'])
def hello():
    return jsonify({"message":"hello world"})

@app.route('/',methods=["GET","POST"])
def blank():
    return "hellow rold"

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
@app.route('/payu/payment',methods=["POST"])
def payu_payment():
    print('request.json',request.json)
    TransactionId=request.json['transactionId']
    FirstName=request.json['firstName']
    MobileNumber=request.json['mobileNumber']
    Amount=request.json['amount']
    SuccessUrl=request.json['surl']
    FailureUrl=request.json['furl']
    HashCode=request.json['hash']
    return jsonify({"transactionId":TransactionId,"firstName":FirstName,"mobileNumber":MobileNumber,"amount":Amount,"furl":FailureUrl,"hash":HashCode})


if __name__=='__main__':
    app.run(debug=True,port=8000)
