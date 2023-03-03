import { checkIfUserLogedIn } from '../../api/firebase/login';
import { setCurrentUser } from '../slice';
import CurrentUserInterface from './../../interface/index';

export const checkIfUserLogedInAction = async (dispatch: any) => {
    await checkIfUserLogedIn().then((response) => {
        const userData = response as CurrentUserInterface;
        dispatch(setCurrentUser(userData));
    })
}

export default checkIfUserLogedInAction;