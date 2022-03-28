import { useState } from 'react'

const GuestList: React.FC = () => {
    const [name, setName] = useState('')

    // accept array of strings
    const [guests, setGuests] = useState<string[]>([])

    const onClick = () => {
        // reset name value
        setName('')

        // add name to guests array
        setGuests([...guests, name])
    }

    return <div>
        <h3>Guest List</h3>
        <ul>
            {guests.map(guest => <li key={guest}>{guest}</li>)}
        </ul>

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>Add Guest</button>
    </div>
}

export default GuestList