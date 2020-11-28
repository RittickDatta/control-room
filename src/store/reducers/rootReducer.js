const { ADD_TASK } = require("../actions/actionTypes")

const initialState = {

}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            console.log('ADD TASK[RR]');
            break;
        default:
            console.log('Action Type is Not Defined');
    }
}

export default rootReducer;

