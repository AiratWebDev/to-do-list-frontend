let defaultState = []

const ADD_TASKS = 'ADD_TASKS'
const UPDATE_TASK_TEXT = 'UPDATE_TASK_TEXT'
const UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS'


export const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASKS:
            state = action.payload
            return state

        case UPDATE_TASK_STATUS:
            state[action.payload-1].status = !state[action.payload-1].status
            return state;

        case UPDATE_TASK_TEXT:
            state[action.payload.id-1].text = action.payload.text
            return state

        default:
            return state
    }
}

export const addTasksAction = (payload) => ({type: ADD_TASKS, payload})
export const updateTaskStatusAction = (payload) => ({type: UPDATE_TASK_STATUS, payload})
export const updateTaskTextAction = (payload) => ({type: UPDATE_TASK_TEXT, payload})
