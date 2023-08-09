const cryptojs = require('crypto-js');
var sha256 = require('js-sha256');
// import sha256 from 'crypto-js/sha256';
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import Base64 from 'crypto-js/enc-base64';

var data = "C16078006";

encript(data);

function encript(data){

    console.log(cryptojs.SHA256(data).toString(cryptojs.enc.Hex));
    console.log(sha256(data));
}

