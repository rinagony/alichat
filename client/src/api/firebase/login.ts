import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '.';
import CurrentUserInterface from '../../interface';
import { setCurrentUserAction } from '../../redux/actions/action';

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
                // setCurrentUserAction(currentUser)
                console.log('User is loged in', user)
    
                resolve(currentUser);
            } else {
                const currentUser: CurrentUserInterface = {
                    auth: false,
                    userName: '',
                    uid: '',
                    loading: false,
                }
                // setCurrentUserAction(currentUser)
                resolve(currentUser)
            }
        });
      });   
}


export { loginWithGoogle, checkIfUserLogedIn };