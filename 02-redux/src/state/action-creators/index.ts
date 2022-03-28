import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'

export const searchRepositories = (term: string) => {
  // tell TS to use Action for all dispatches
  return async (dispatch: Dispatch<Action>) => {
    // emit the search event
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    })

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      )

      // parse response data
      const names = data.objects.map((result: any) => {
        return result.package.name
      })

      // emit success event
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      })
    } catch (err: any) {
      // emit error event
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      })
    }
  }
}
