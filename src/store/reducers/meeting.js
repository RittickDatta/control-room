import * as actionTypes from '../actions/actionTypes';

const initalState = {
  nextMeeting: null,
  upcomingMeeting: null,
  laterMeeting: null,
  meetings: [],
};

const meetingReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MEETING:
      const newMeeting = action.payload;
      const updatedMeetings = [...state.meetings, newMeeting];
      return {
        ...state,
        meetings: updatedMeetings,
      };
    case actionTypes.REMOVE_MEETING:
      const id = action.payload;
      const updatedMeetings_Removed = state.meetings.filter(
        (meeting) => meeting.id !== id
      );
      return {
        ...state,
        meetings: updatedMeetings_Removed,
      };
    case actionTypes.UPDATE_MEETING:
      const meeting_id = action.payload.id;
      const updateMeeting = action.payload;
      const updatedMeeting_Updated = state.meetings.map((meeting) => {
        if (meeting.id === meeting_id) {
          return updateMeeting;
        }
        return meeting;
      });
      return {
        ...state,
        meetings: updatedMeeting_Updated,
      };
    default:
      return {
        ...state,
      };
  }
};

export default meetingReducer;
