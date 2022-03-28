interface ChildProps {
    color: string
    onClick: () => void
}

// this one doesn't allow children prop
export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}

// function component with typescript
// tell Typescript this is a react functional component
// this function will receive ChildProps
// this is better as intellisense showing properties
// this allow to receive a children prop
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <div>
        {color}
        {children}
        <button onClick={onClick}>Click Me</button>
    </div>
}
