import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from './types';
import streams from '../apis/streams';
import history from '../history';

export const signIn = (userId) => {
    return {
        type: SIGN_IN, 
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

// action creator for POST convention, we use formValues to get the form data and POST them into json-server db.json file
export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('./streams', { ...formValues, userId}); 
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })       
    history.push('/');
}

// action creator for GET convention, we don't need any arguments as we are trying to GET array of records
export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
}

// action creator for GET/:id convention, we receive an id as a parameter and use this id to GET the record
export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
}

// action creator for PUT convention, we receive an id and form data as parameters to update the values of this (id) record
export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
    // URL based Selection to send user to a particular page
    history.push('/');
}

// action creator for DELETE convention, we receive an id as a parameter to delete a record from streams array
export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
}