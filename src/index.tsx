import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return <div>
        <h1>Hi There!</h1>
    </div>
}

ReactDOM.render(
    <React.StrictMode>
        <App />,
    </React.StrictMode>,

    document.getElementById('root')
)