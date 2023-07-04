import { decodeBase64, encodeBase64 } from "bcryptjs";
import { encode } from "next-auth/jwt";

var CryptoJS = require("crypto-js");

export const encryption=async(params)=>{
    return encodeURIComponent(CryptoJS.AES.encrypt(JSON.stringify(params), process.env.CRYPTO_KEY).toString());
}

export const decryption= async(ciphertext)=>{
   
    console.log(ciphertext);
    const bytes  = CryptoJS.AES.decrypt(decodeURIComponent(ciphertext),process.env.CRYPTO_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
}
