import { GoogleAuthProvider, signInWithPopup, signOut, getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '.';
import CurrentUserInterface from '../../interface';

const auth = getAuth(app);
async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();

        const { user } = await signInWithPopup(auth, provider);

        return { uid: user.uid, displayName: user.displayName };
    } catch (error: any) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }

        return null;
    }
}

async function signOutWithGoogle() {
    try {
        const result = await signOut(auth)

        return result;
    } catch (error: any) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }
        return null;
    }
}

function checkIfUserLogedIn() {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const currentUser: CurrentUserInterface = {
                    auth: true,
                    userName: user.displayName,
                    uid: user.uid,
                    loading: false,
                }
                resolve(currentUser);
            } else {
                const currentUser: CurrentUserInterface = {
                    auth: false,
                    userName: '',
                    uid: '',
                    loading: false,
                }
                resolve(currentUser)
            }
        });
      });   
}


export { loginWithGoogle, checkIfUserLogedIn, signOutWithGoogle };