import * as actionTypes from '../actions/actionTypes';

const initalState = {
  nextTask: null,
  upcomingTask: null,
  laterTask: null,
  tasks: [],
};

const taskReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      const newTask = action.payload;
      const updatedTasks_NewTask = [...state.tasks, newTask];
      return {
        ...state,
        tasks: updatedTasks_NewTask,
      };
    case actionTypes.REMOVE_TASK:
      const id = action.payload;
      const updatedTasks_RemovedTask = state.tasks.filter(
        (task) => task.id !== id
      );
      return {
        ...state,
        tasks: updatedTasks_RemovedTask,
      };
    case actionTypes.UPDATE_TASK:
      const task_id = action.payload.id;
      const updatedTask = action.payload;

      const updatedTask_UpdatedTask = state.tasks.map((task) => {
        if (task.id === task_id) {
          return updatedTask;
        }
        return task;
      });

      return {
        ...state,
        tasks: updatedTask_UpdatedTask,
      };
    default:
        return {
            ...state
        }
  }
};

export default taskReducer;
