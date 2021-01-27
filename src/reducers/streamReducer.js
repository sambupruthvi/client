import { CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from '../actions/types';
import _ from 'lodash';
const streamReducer =  (state = {}, action) => {
    switch (action.type) {
        // We use spread operator to create a new state instead of modifying the old one that way the application reloads as there is a change in state.
        // Also key interpolation syntax is used to update, edit and create a new record
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload };

        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};

        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')};

        // omit function from lodash is gonna create a new object of state instead of modifying the old one which helps reducer to reload the state
        case DELETE_STREAM:
            return _.omit(state, action.payload);
    
        default:
            return state;
    }
}
export default streamReducer;

/***
 *  using vanilla js for FETCH_STREAMS 
 * case FETCH_STREAMS:
   `return {
        ...state,
        ...payload.reduce((newState, stream) => {
            newState[stream.id] = stream
            return newState
        }, {})
    }`


  * case FETCH_STREAMS:
    const mapMyArray = (array, param) =>
        Object.assign({}, ...array.map( index => ( {[index[param]]: index} )))
 
    return { ...state, ...mapMyArray(action.payload, "id")}
*/