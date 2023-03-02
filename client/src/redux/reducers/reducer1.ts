import CurrentUserInterface from "../../interface"
import { PayloadAction } from '@reduxjs/toolkit'

const INITIAL_STATE: CurrentUserInterface = {
	auth: false,
	userName: '',
    uid: '',
    loading: true,
}

export default function currentUser (state = INITIAL_STATE, action: any) {
    switch(action.type) {
        case 'CURRENT_USER':
            return action.payload
        case 'CHECK_LOGIN':
            return action.payload
    }
    return state
}