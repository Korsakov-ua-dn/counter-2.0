type ActionType = ReturnType<typeof setError> | ReturnType<typeof setBasicDataValue>

export type StateType = typeof initialState

const initialState = {
    start: 0,
    max: 0,
    error: 'Invalid value'
}

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case ("SET_ERROR"): 
            return {...state, error: action.errorMessage}

        case ("SET_BASIC_DATA_VALUE"):
            return {...state, start: action.start, max: action.max}
            
        default:
            return state
    }
}

export const setError = (errorMessage: string) => ({type: "SET_ERROR", errorMessage} as const)
export const setBasicDataValue = (start: number, max: number) => ({type: "SET_BASIC_DATA_VALUE", start, max} as const)
