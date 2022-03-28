import { useState, useRef } from 'react'

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 },
]

const UserSearch: React.FC = () => {
    // ref with TS as input element and null value
    const inputRef = useRef<HTMLInputElement | null>(null)

    const [name, setName] = useState('')

    // generic type
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })
        setUser(foundUser)
    }

    return <div>
        <h3>User Search</h3>
        <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>

}

export default UserSearch