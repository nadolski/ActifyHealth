import * as actions from "../actions/actionTypes";
import EventTasks from "../utils/eventTasks";

export function createNewTask() {
  let newTask = EventTasks.getNewTask()
  return {
    type: actions.UPDATE_CURRENT_TASK,
    currentTaskDescription:newTask.currentTaskDescription,
    positiveOutcome:newTask.positiveOutcome.message,
    negativeOutcome:newTask.negativeOutcome.message
  }
}

export function addStep(StepsCompleted) {
  return {
    type: actions.ADD_STEP,
    stepsCompleted: StepsCompleted
  }
}

export function closeOutcomeModal(){
  return {
    type: actions.CLOSE_OUTCOME_MODAL
  }
}

export function failTask(){
  return {
    type: actions.FAIL_TASK
  }
}
