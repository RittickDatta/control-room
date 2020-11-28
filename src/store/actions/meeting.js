import * as actionTypes from './actionTypes';

export const addMeeting= (meeting) => {
    return {
        type: actionTypes.ADD_MEETING,
        payload: meeting
    }
}

export const removeMeeting = (id) => {
    return {
        type: actionTypes.REMOVE_MEETING,
        payload: id
    }
}

export const updateMeeting = (meeting) => {
    return {
        type: actionTypes.UPDATE_MEETING,
        payload: meeting
    }
}