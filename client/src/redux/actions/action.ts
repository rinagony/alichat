import { checkIfUserLogedIn } from "../../api/firebase/login";
import CurrentUserInterface from "../../interface";

export function setCurrentUserAction(currentUser: CurrentUserInterface) {
    console.log(currentUser)
    return {
        type: 'CURRENT_USER',
        payload: currentUser
    }
}