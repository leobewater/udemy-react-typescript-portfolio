import { ChildAsFC } from './Child'

const Parent = () => {
    return <ChildAsFC color="purple" onClick={() => console.log('clicked')} >children props</ChildAsFC>
}

export default Parent