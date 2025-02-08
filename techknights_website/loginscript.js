// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjElrQLe-oE32OdyLzz7IpNBMuz1qZYvE",
  authDomain: "techknights-ddf6b.firebaseapp.com",
  projectId: "techknights-ddf6b",
  storageBucket: "techknights-ddf6b.appspot.com", // Fixed storageBucket
  messagingSenderId: "539253118811",
  appId: "1:539253118811:web:084248752cdefd4f52ac7e",
  measurementId: "G-S7D48ZXSCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

// Google Login Function
document.getElementById("loginBtn").addEventListener("click", function () {
    const provider = new GoogleAuthProvider(); // Use GoogleAuthProvider

    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User Info:", result.user);
            alert(`Welcome ${result.user.displayName}`);
            window.location.href = "homepage.html"; // Redirect after login
        })
        .catch((error) => {
            console.error("Login Error:", error);
        });
});
