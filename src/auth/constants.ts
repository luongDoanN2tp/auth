import * as crypto from 'crypto';

export interface IKeyPair {
  err: Error;
  privateKey: string;
  publicKey: string;
}

export const jwtConstants = {
  secret: 'suytCaiNayBiMat',
  // createSecret: () => {
  //   let keyPair: IKeyPair;
  //   // crypto.generateKeyPair(
  //   //   'rsa',
  //   //   {
  //   //     modulusLength: 4096,
  //   //     publicKeyEncoding: {
  //   //       type: 'spki',
  //   //       format: 'pem',
  //   //     },
  //   //     privateKeyEncoding: {
  //   //       type: 'pkcs8',
  //   //       format: 'pem',
  //   //       cipher: 'aes-256-cbc',
  //   //       passphrase: 'top secret',
  //   //     },
  //   //   },
  //   //   (err, publicKey, privateKey) => {
  //   //     keyPair = {
  //   //       err: err,
  //   //       publicKey: publicKey,
  //   //       privateKey: privateKey,
  //   //     };
  //   //     console.log('create keypair: ', keyPair);
  //   //   },
  //   // );
  //   return keyPair;
  // },
};
