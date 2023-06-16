import * as crypto from 'crypto';
import fs = require('fs');

export const generateKeyPair = (
  publicKeyPath: string,
  privateKeyPath: string,
) => {
  // Generates an object where the keys are stored in properties `privateKey` and `publicKey`
  crypto.generateKeyPair(
    'rsa',
    {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: 'top secret',
      },
    },
    (err, publicKey, privateKey) => {
      if (err) console.log('ERROR! ', err);
      // Create the public key file
      fs.writeFileSync(publicKeyPath, publicKey);
      // Create the private key file
      fs.writeFileSync(privateKeyPath, privateKey);
      if (!err) console.log('Create key pair success!');
    },
  );
};
