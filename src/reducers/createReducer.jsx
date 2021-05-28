import createNextState from 'immer';
import { act } from 'react-dom/test-utils';

export default function createReducer(initialState,actionMap){
    return(state = initialState,action) =>{
        return createNextState(state, (draft) =>{
            const caseReducer = actionMap[action.type];
            
            if(caseReducer){
                return caseReducer(draft,action);
            }
            return draft;
        })  
    }
}
