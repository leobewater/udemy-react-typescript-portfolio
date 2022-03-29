import * as esbuild from 'esbuild-wasm'
import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const ref = useRef<any>()
    const [input, setInput] = useState('')
    const [code, setCode] = useState('')

    // init esbuild wasm and assign it to a ref
    const startService = async () => {
        ref.current = await esbuild.startService({
            worker: true,
            wasmURL: '/esbuild.wasm'
        })
    }

    useEffect(() => {
        startService()
    }, [])

    const onClick = async () => {
        // use esBuild to transpile the JS code from input and display on screen
        if (!ref.current) {
            return
        }

        // console.log(ref.current)
        const result = await ref.current.transform(input, {
            loader: 'jsx',
            target: 'es2015',
        })

        //console.log(result)
        setCode(result.code)
    }

    return <div>
        <textarea value={input} onChange={e => setInput(e.target.value)}></textarea>
        <div>
            <button onClick={onClick}>Submit</button>
        </div>
        <pre>
            {code}
        </pre>
    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)