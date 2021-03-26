import {
    SAVE_MESSAGE,
} from '../_actions/types';

export default function (state = {messages:[]}, action) {
    console.log(`state`, state)
    const messages = state.messages.concat(action.payload)
    console.log("🚀 ~ file: message_reducer.js ~ line 8 ~ messages", messages)
    switch (action.type) {
        case SAVE_MESSAGE:
            return {
                ...state,
                messages
            }
        default:
            return state;
    }
}