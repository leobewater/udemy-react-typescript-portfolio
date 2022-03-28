interface RepositoriesState {
  loading: boolean
  error: string | null
  data: string[]
}

// generic interface
// interface Action {
//   type: string
//   payload?: any // optional paypload with any type
// }

interface SearchRepositoriesAction {
  type: 'search_repositories' // exact match
}

interface SearchRepositoriesSuccessAction {
  type: 'search_repositories_success'
  payload: string[]
}

interface SearchRepositoriesErrorAction {
  type: 'search_repositories_error'
  payload: string
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] }

    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload }

    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] }

    default:
      return state
  }
}

export default reducer
