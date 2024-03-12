const initState = {
    isLoading: false,
}

type initStateType = typeof initState

type ActionType = LoadingActionType

export const loadingReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            return {
                ...state,
                isLoading: action.isLoading,
            }
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
