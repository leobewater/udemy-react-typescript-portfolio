import React from 'react'
import ReactDOM from 'react-dom'
import UserSearch from './refs/UserSearch'

const App = () => {
    return <div>
        <UserSearch />
    </div>
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)