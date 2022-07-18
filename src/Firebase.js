import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDcffnEjqxKJZYhLARYENeiHSLF28w50dc',
    authDomain: 'cosmo-app-crk.firebaseapp.com',
    projectId: 'cosmo-app-crk',
    storageBucket: 'cosmo-app-crk.appspot.com',
    messagingSenderId: '439584078013',
    appId: '1:439584078013:web:5a99d4a616a59e97e61fd4',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWitGoogle = () => {
    signInWithPopup(auth, provider)
        .then(result => {
            console.log(result);
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;
            const accessToken = result.user.accessToken;

            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            //   localStorage.setItem('profilePic', profilePic);
            localStorage.setItem('accessToken', accessToken);

            //   window.location.reload(false);
        })
        .catch(err => {
            console.log(err);
        });
};
