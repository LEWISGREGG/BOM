import '../styles/globals.css';
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import Loading from '../components/Loading';
import SignIn from '../components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from "react";
import { auth, db } from ".././firebase";
import firebase from 'firebase/compat/app';

const progress = new ProgressBar({
  size: 8,
  color: "#ea99b1",
  className: "z-50",
  delay: 300,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);


function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  
  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <SignIn />;

  return <Component {...pageProps} />
}

export default MyApp
