import firebase from "firebase";
import React from "react";
import  StyledFirebaseAuth  from "react-firebaseui/StyledFirebaseAuth";

SignInAuth.propTypes = {};

const uiConfig = {
    // redirect signin flow
    signInFlow: "redirect",
    signInSuccessUrl: "/photos",
    // We will display Google as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };


function SignInAuth() {
    
  return (
    <div>
      <div className="text-center">
        <h2>Login Form</h2>
        <p>Or Login with social account</p>
      </div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInAuth;
