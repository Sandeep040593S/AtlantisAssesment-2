const INIT_STATE = {
  taskItem: [],
};

const todos = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state.taskItem,

        taskItem: [
          ...state.taskItem,
          action.action,
        ],
      };
    default:
      return state;
  }
};

export default todos;
