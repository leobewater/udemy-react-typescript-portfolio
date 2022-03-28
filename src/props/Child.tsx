interface ChildProps {
    color: string
    onClick: () => void
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}

// function component with typescript
// tell Ttypescript this is a react functional component
// this function will receive ChildProps
// this is better as intellisense showing properties
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
    return <div>
        {color}
        <button onClick={onClick}>Click Me</button>
    </div>
}
