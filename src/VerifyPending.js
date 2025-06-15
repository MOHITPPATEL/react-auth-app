import { useEffect, useState } from "react";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "./firebase";

function VerifyPending() {
  const [message, setMessage] = useState("");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  const resendVerification = async () => {
    try {
      if (!auth.currentUser) return;

      await sendEmailVerification(auth.currentUser);
      setMessage("✅ Verification email sent again. Please check your inbox.");
      setCooldown(60); // 60-second cooldown
    } catch (error) {
      if (error.code === "auth/too-many-requests") {
        setMessage("⚠️ Too many attempts. Please wait before trying again.");
      } else {
        setMessage("Error sending email: " + error.message);
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Please Verify Your Email</h2>
      <p>We've sent a verification link to your email. Please check and verify.</p>

      {message && <p>{message}</p>}

      <button
        onClick={resendVerification}
        disabled={cooldown > 0}
        style={{ marginTop: "15px" }}
      >
        {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend Verification Email"}
      </button>
    </div>
  );
}

export default VerifyPending;
