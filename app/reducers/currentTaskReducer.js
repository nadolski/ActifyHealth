import * as actions from "../actions/actionTypes";

export default function currentTaskReducer(state, action = {}) {
  switch (action.type) {
    case actions.UPDATE_CURRENT_TASK:
      return state.withMutations(state => state
        .set('completed', false)
        .set('hasFailed', false)
        .set('currentTaskDescription', action.currentTaskDescription)
        .set('positiveOutcome', action.positiveOutcome)
        .set('negativeOutcome', action.negativeOutcome)
        .set('stepsCompleted', 0)
        .set('timeAmount',action.timeAmount)
        .set('stepsTarget', action.stepsTarget)
        );

    case actions.ADD_STEP:
    var steps = state.get('stepsCompleted') + action.stepsCompleted;
    if(state.get('stepsTarget') <= steps){
      console.log('completed task');
      return state.withMutations(state => state
        .set('completed',true)
        .set('stepsCompleted', steps)
        .set('outcomeModalIsOpen', true));
    }else{
      return state.withMutations(state => state
        .set('stepsCompleted', steps));
    }

    case actions.FAIL_TASK:
    return state.withMutations(state => state
      .set('completed',true)
      .set('hasFailed',true)
      .set('outcomeModalIsOpen', true));

    case actions.UPDATE_BASE:
    return state.withMutations(state => state
      .set('completed',true)
      .set('outcomeModalIsOpen', false));

    default:
      return state
  }
}