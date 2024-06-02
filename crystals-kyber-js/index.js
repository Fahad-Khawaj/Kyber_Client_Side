module.exports = {...require("./kyber512"), ...require("./kyber768"), ...require("./kyber1024")};
const kyber = require('crystals-kyber');

console.time("Total Execution Time");

console.time("Key Generation");
// To generate a public and private key pair (pk, sk)
let pk_sk = kyber.KeyGen1024();

let pk = pk_sk[0];
let sk = pk_sk[1];
console.timeEnd("Key Generation");
console.log("Public Key------------",pk,"-----------");

console.log("\nSecret Key------------",sk,"-----------");

const pkReceivedBase64 = "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";

const pkReceived = Uint8Array.from(Buffer.from(pkReceivedBase64, 'base64'));
console.log("recivied key ---------",pkReceived);

console.time("Encryption");
let c_ss = kyber.Encrypt1024(pkReceived);
let c = c_ss[0];
console.timeEnd("Encryption");
console.log("encapsulated key (cipher text) --------------",c);
const cBase64 = Buffer.from(c).toString('base64');
console.log("Encapsulated Key (Base64) --------------", cBase64);
let ss1 = c_ss[1];

console.log("SS1-------",ss1);

console.timeEnd("Total Execution Time");