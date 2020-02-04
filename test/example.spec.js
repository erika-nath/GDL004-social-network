const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(

  () => null,
  () => mockauth,
  () => mockfirestore
);


import const {modelo} from '../src/model/model.js';
it('funcion que loguea a usuario con  email y password', async () => {
  expect.assertions(1);
  try {
    await user.loginEmailAndPassword('karen@gmail.com','123456');
  } catch (e) {
    expect(e).toEqual({
      ("The email address is already in use, please login");
    });
  };

