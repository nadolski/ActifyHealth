import * as actions from "../actions/actionTypes";

export function createNewBase(StepsCompleted) {
  return {
    type: actions.CREATE_NEW_BASE
  }
}

export function destroyBase(){
  return {
    type:actions.DESTROY_BASE
  }
}

export function UpdateBase(healthValue,isAdditive) {
  return {
    type: actions.UPDATE_BASE,
    addHealth:isAdditive,
    healthValue:healthValue
  }
}