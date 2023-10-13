const firebaseConfig = {
  apiKey: 
};
  
  firebase.initializeApp(firebaseConfig);   
  const auth = firebase.auth();
  const db = firebase.firestore(); 
  const Login = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('Password').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        
        window.location.href = 'diary.html';
        
      })
      .catch((error) => {
        alert(error.message)
        console.log('Login error:', error.message);
      });
  };
  