import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../config/firebase";

export async function signInWithGoogle() {
  const user = await signInWithRedirect(auth, new GoogleAuthProvider()).then(
    (user) => {
      console.log(user);
      window.location.reload();
    }
  );
}
