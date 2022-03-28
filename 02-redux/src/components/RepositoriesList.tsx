import { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('')
    const { searchRepositories } = useActions()

    // get repositories from state
    const { data, error, loading } = useTypedSelector((state) => state.repositories)

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // emit search event
        searchRepositories(term)
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        
        {!error && !loading && data}

    </div>
}
export default RepositoriesList