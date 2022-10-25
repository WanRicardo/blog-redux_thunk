import _ from 'lodash'
import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    
    await dispatch(fetchPosts())
    // const userIds =_.uniq(_.map(getState().posts, 'userId'))
    // userIds.forEach(id => dispatch(fetchUser(id)))

    //Refatorado
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
}

//Depois de refatorar
export const fetchPosts = () => async dispatch => {

    const response = await jsonPlaceholder.get('/posts')
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

//Antes de refatorar
// export const fetchPosts = () => {

//     return async function(dispatch, gesState) {

//         const response = await jsonPlaceholder.get('/posts')
        
//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: response
//         })
//     }
// }

export const fetchUser = (id) => async dispatch => {
    
    const response = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: response.data })
}

//Com memoize
// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch)

// const _fetchUser = _.memoize(async (id, dispatch) => {
    
//     const response = await jsonPlaceholder.get(`/users/${id}`)
//     dispatch({ type: 'FETCH_USER', payload: response.data })
// })