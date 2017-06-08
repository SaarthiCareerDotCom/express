var reqS2S = require('request');

// req.get('http://www.google.com',(err,res,body)=>{
  // console.log('error : ',err);
  // console.log('resCode : ',res && res.statusCode);
  // console.log('body : ',body);
// }) ;
var customReqHeader = {
  'X-Api-Key' : 'aa8ff19fddf6cabc8d923b7d401ba7b6',
  'X-Auth-Token' : '7e40194c2a81ddcd85fdf57382342991'
};
var customReqBody = {
  'amount' : '250',
  'purpose' : 'buyCourse',
  'buyer_name' : 'ajay',
  'email' : 'foo@example.com',
  'phone' : '1234567890',
  'allow_repeated_payments' : false
  // 'redirect_url' : 'http://www.google.com'
  // 'expires_at' : ''

};
reqS2S.post('https://test.instamojo.com/api/1.1/payment-requests/',{
  form : customReqBody,headers : customReqHeader},function(error,S2SResponse,resBody){
    console.log(S2SResponse.statusCode);
    console.log(error);
    console.log(resBody);

  }
);
