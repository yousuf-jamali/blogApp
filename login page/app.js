import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1cHEVSUUL7HyKI1zHweqfW3TxJalrDqM",
  authDomain: "blog-site-21372.firebaseapp.com",
  projectId: "blog-site-21372",
  storageBucket: "blog-site-21372.appspot.com",
  messagingSenderId: "528244315597",
  appId: "1:528244315597:web:8f32f82fef90f4b387e084",
  measurementId: "G-GPGC7TBLH5"
};

//! Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const loginWithGoogleBtn = document.getElementById("loginWithGoogleBtn")

//! google  sgin start

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("suss")
      window.location.href = "../home page/index.html"

    }).catch((error) => {
      console.log("erorr")
    });
}
loginWithGoogleBtn && loginWithGoogleBtn.addEventListener("click", signInWithGoogle)
//! google  sgin End
//! email login password sginup start 
const SubmitDataEmaillogin = document.getElementById("SubmitDataEmaillogin");
SubmitDataEmaillogin&&SubmitDataEmaillogin.addEventListener("click", () => {
  const email = document.getElementById("emaillogin").value;
  const password = document.getElementById("passwordlogin").value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    window.location.href = "../home page/index.html";

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});





