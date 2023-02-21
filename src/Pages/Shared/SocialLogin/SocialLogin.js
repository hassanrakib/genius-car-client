import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { setAuthToken } from "../../../lib/auth";

const SocialLogin = () => {
  const { socialLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    socialLogin(googleProvider)
      .then((userCredential) => {
        const user = userCredential.user;
        setAuthToken(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="text-center mt-2">
      <p>------------ Social Login -------------</p>
      <button onClick={handleGoogleLogin} className="btn btn-warning mt-2">
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
