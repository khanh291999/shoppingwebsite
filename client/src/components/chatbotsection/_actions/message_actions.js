import {
    SAVE_MESSAGE,
} from './types';

export function saveMessage(dataToSubmit) {
   console.log(`dataToSubmit`, dataToSubmit)
    return {
        type: SAVE_MESSAGE,
        payload: dataToSubmit
    }
}
