import * as actionTypes from './actionTypes';

export const addPerson = (person) => {
    return {
        type: actionTypes.ADD_PERSON,
        payload: person
    }
}

export const removePerson = (id) => {
    return {
        type: actionTypes.REMOVE_PERSON,
        payload: id
    }
}

export const updatePerson = (person) => {
    return {
        type: actionTypes.UPDATE_PERSON,
        payload: person
    }
}