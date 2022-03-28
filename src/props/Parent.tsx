import { Child } from './Child'

const Parent = () => {
    return <Child color="purple" onClick={() => console.log('clicked')} />
}

export default Parent