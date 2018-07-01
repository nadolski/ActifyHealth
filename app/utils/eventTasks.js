const events = [
    {
        currentTaskDescription:"this is a test task",
        amountOfSteps:1200,
        timeAmount:100,
        positiveOutcome:{
            message:"You did it awesome!"
        },
        negativeOutcome:{
            message:"Oh dear you failed!"
        }
    }
];

const EventTasks = {
    getNewTask: () => {
    return events[Math.floor(Math.random() * events.length)];;
  }
};

export default EventTasks;