import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Reset email sent");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleReset}>Send Reset Link</button>
    </>
  );
}

export default ForgotPassword;
