import {AppStoreType} from '../../hw10/bll/store';




const initState = {
    themeId :1
}



export const themeReducer = (state = initState, action: ChangeTypeIdType): typeof initState => { // fix any
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
    type: 'SET_THEME_ID',
    id: number
}
