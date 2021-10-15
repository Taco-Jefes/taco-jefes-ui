import { GET_TACO_COUNTS } from "./countActions";

export const GET_COMMENTS = "GET_COMMENTS"
export const ADD_COMMENT = "ADD_COMMENT"

// let targetURL = 'http://localhost:8080/api/comments'

let targetURL = 'https://taco-track.herokuapp.com/api/comments'

export const getComments = () => {
    return dispatch => {
        fetch(`${targetURL}`,
            {
                method: 'GET',
                hearders: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
            .then(response => response.json())
            .then(response =>
                dispatch({
                    type: GET_COMMENTS,
                    payload: response.tacoCommentList
                })
            )
    };
}

export const addComment = (comment) => {
    return dispatch => {
        fetch(`${targetURL}`,
            {
                method: 'POST',
                body: comment,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                }
            }
        )
            .then(response => response.json())
            .then(response =>
                dispatch({
                    type: ADD_COMMENT,
                    payload: response
                    // {
                    //     ID: Id,
                    //     message: comment
                    // }
                })

            )



    };
}