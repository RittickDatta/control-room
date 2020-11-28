import * as actionTypes from '../actions/actionTypes';

const initalState = {
  nextPerson: null,
  upcomingPerson: null,
  laterPerson: null,
  people: [],
};

const personReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = action.payload;
      const updatedPeople = [...state.people, newPerson];

      return {
        ...state,
        people: updatedPeople,
      };

    case actionTypes.REMOVE_PERSON:
      const id = action.payload;
      const updatedPeople_Removed = state.people.filter(
        (person) => person.id !== id
      );

      return {
        ...state,
        people: updatedPeople_Removed,
      };

    case actionTypes.UPDATE_PERSON:
      const person_id = action.payload.id;
      const updatedPerson_Object = action.payload;

      const updatedPeople_Updated = state.people.map((person) => {
        if (person.id === person_id) {
          return updatedPerson_Object;
        }
        return person;
      });

      return {
        ...state,
        people: updatedPeople_Updated,
      };

    default:
      return {
        ...state,
      };
  }
};

export default personReducer;
