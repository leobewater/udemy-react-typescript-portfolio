interface ChildProps {
    color: string
}

export const Child = ({ color }: ChildProps) => {
    return (
        <div>{color}</div>
    )
}

// function component with typescript
// tell Ttypescript this is a react functional component
// this function will receive ChildProps
// this is better as intellisense showing properties
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
    return <div>{color}</div>

}
