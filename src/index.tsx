import React from 'react'
import ReactDOM from 'react-dom'
import EventComponent from './events/EventComponent'

const App = () => {
    return <div>
        <EventComponent />
    </div>
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)