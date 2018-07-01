import * as actions from "../actions/actionTypes";

export default function baseReducer(state, action = {}) {
  switch (action.type) {

    case actions.UPDATE_BASE:
    let baseHealth;
    let baseLevel = state.get('level');
    if(!action.addHealth){
      baseHealth = state.get('health') + action.healthValue;
      baseLevel++;
    }else{
      baseHealth = state.get('health') - action.healthValue;
    }
    if(baseHealth > 100){
      baseHealth = 100;
    }
    
    if(baseHealth <= 0){
      return state.withMutations(state => state
        .set('baseDestroyed',true)
        .set('health', baseHealth))
    }else{
      return state.withMutations(state => state
        .set('health', baseHealth))
        .set('level', baseLevel);
    }
   
    case actions.ADD_STEP:
    var totalSteps = state.get('totalSteps') + action.stepsCompleted;
    return state.withMutations(state => state
      .set('totalSteps', totalSteps))
    
    case actions.DESTROY_BASE:
    return state.withMutations(state => state
      .set('newBase',true)
      .set('baseDestroyed',false))//yeah I should of named these better

    case actions.CREATE_NEW_BASE:
    return state.withMutations(state => state
      .set('newBase', false)
      .set('health',100)
      .set('level', 1)
      .set('totalSteps', 0)
      .set('baseDestroyed',false))
      
    default:
      return state
  }
}