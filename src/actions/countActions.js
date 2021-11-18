import { trackPromise } from "react-promise-tracker"
export const GET_TACO_COUNTS = "GET_TACO_COUNTS"
export const UPDATE_COUNTS = "UPDATE_COUNTS"

// let targetURL = 'http://localhost:8080/api/tacos'

//let targetURL = 'https://taco-track.herokuapp.com/api/tacos'

let targetURL = 'http://10.0.2.60:8080/api/tacos'

export const tacoCounts = () => {
    return dispatch => {
        trackPromise(
            fetch(`${targetURL}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                })

                .then(response => response.json())
                .then(response =>
                    dispatch({
                        type: GET_TACO_COUNTS,
                        payload: response.tacoTeamCounts
                    }
                    )
                )
        )
    };
}

export const updateCount = (teamName) => {
    return dispatch => {
        fetch(`${targetURL}`,
            {
                method: 'POST',
                body: teamName,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                }
            })
            .then(response => response.json())
            .then(response =>
                dispatch({
                    type: UPDATE_COUNTS,
                    payload: {
                        team: teamName
                    }
                }
                )
            )
    }
}
