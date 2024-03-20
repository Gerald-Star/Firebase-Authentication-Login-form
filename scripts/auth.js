//get data from firestore collections
// this takes an ansychronous tasks and returns a callback function

db.collection('Catalogues').get().then(snapshot => {
  //console.log(snapshot.docs)
  setupGuides(snapshot.docs);
});

//listen for auth status change to check whether the user is login/logout
//if the user exists or not - keeping track of the user authentication status
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user)
  } else {
    console.log('user logged out')
  }

});





//Sign up
//Attach an event listener to the sign-up to listen to every user that signs up
//prevent default action by using e.preventDefault to avoid refreshing the page

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // ? sign up the user using the auth method -createUserWith.......
  // this is asynchronous that returns a promise.
  // the response to this case will be the users credentials token
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // not needed console.log(cred.user);

    //set modal open and close after signup
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset(); // use the method reset to reset the form 
  });
});


//! logout method using eventListener Click.

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut()
  //.then(() => { not needed again to be tracked on top whenever the auth changes
  // console.log('user signed out')
  //})
})

//! login

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    //set modal open and close after signup
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset(); // use the method reset to reset the form 
  });
});