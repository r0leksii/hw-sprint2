import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

type StateType = UserType[]

export const homeWorkReducer = (state: StateType, action: ActionType): StateType => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state].sort((a: UserType, b: UserType) => {
                if (a.name < b.name) {
                    return action.payload === 'up' ? -1 : 1
                }
                if (a.name > b.name) {
                    return action.payload === 'up' ? 1 : -1
                }
                return 0
            })
            // need to fix
        }
        case 'check': {
            return [...state].filter((u: UserType) => u.age >= action.payload)
            // need to fix
        }
        default:
            return state
    }
}


