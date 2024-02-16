
interface User {
    name: string,
    email: string,
}

interface UserState {
    user: User | null,
}

const initialState: UserState = {
    user: null,
}

interface UserAction {
    type: string,
    payload?: User
}


//Reducer: guarda o estado para compartilhar na aplicação, manipula e altera o estado
export function userReducer(state = initialState, action: UserAction): UserState {
    if (action.type === 'user/login') {
        return {
            ...state,
            user: action.payload as User,
        };
    } else if (action.type === 'user/logout') {
        return {
            ...state,
            user: null,
        };
    };

    return state;   
}