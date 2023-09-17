// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const getFirebaseApp = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyByybKSVjh6VR4HvuDn94qxCyHKjm1kiqI",
  authDomain: "cosmox-90271.firebaseapp.com",
  projectId: "cosmox-90271",
  storageBucket: "cosmox-90271.appspot.com",
  messagingSenderId: "100518749459",
  appId: "1:100518749459:web:fa06e5287aae1cfbc766e6"
    }

    // Initialize Firebase
    return initializeApp(firebaseConfig)
}
