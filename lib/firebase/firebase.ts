import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'test',
  authDomain: 'test.firebaseapp.com',
  projectId: 'test-app',
  storageBucket: 'test-app.appspot.com',
  messagingSenderId: '123456789',
  appId: 'test',
  measurementId: 'test'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app)

connectFirestoreEmulator(firestore, 'localhost', 8080);
connectAuthEmulator(auth, `http://localhost:9099`, { disableWarnings: true });


const testAsyncFunc = async () => {
  console.info('Running testAsyncFunc...')
}

await testAsyncFunc();

export { firestore };

