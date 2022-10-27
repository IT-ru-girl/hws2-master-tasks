import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string)=> void // need to fix any
}

export const pureAddUser = (name: string    , setError: (error:string)=> void, setName: (name: string)=> void, addUserCallback: (name: string)=> void) => {
  let nameTrimmed = name.trim()
    if (nameTrimmed){
        addUserCallback(nameTrimmed)
        setName('')

    } else {
        setError('Ошибка! Введите имя! ')
        setName(name)
    }

    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (error:string)=>void) => {
    if (name === ''){
        setError('показать ошибку')
    }
    // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=> void) => {
    if (e.key === 'Enter'){
        addUser()
    }
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback,}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event:ChangeEvent<HTMLInputElement>) => { // need to fix any

        setName(event.target.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix


    let lastUserName =(totalUsers> 0) ? users[users.length-1].name : ''

    // if (totalUsers> 0){
    //     lastUserName
    // }
    // else '
    //     lastUserName = ''
    // }


    // need to fix
    //console.log(lastUserName)

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
