import jsonPlaceholder from "../apis/jsonPlaceholder"

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