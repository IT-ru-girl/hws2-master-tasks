






const initState = {
    themeId: 1,
}

export type InitialStateType ={
    themeId: number
}

export const themeReducer = (state = initState, action: ChangeTypeIdType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
       return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeTypeIdType =>
    ({ type: 'SET_THEME_ID', id }) // fix any

export type ChangeTypeIdType= {
    type: string,
    id: number
}
