const events = [
    {
        currentTaskDescription:"A giant bear roams outside let's build our defensives",
        amountOfSteps:2500,
        timeAmount:600,
        positiveOutcome:{
            message:"The repairs managed to hold against the beast!"
        },
        negativeOutcome:{
            message:"The bear just invited itself in!"
        }
    },
    {
        currentTaskDescription:"A lute player has taken up residence somewhere in the walls. He's not a good lute player. If you go for a walk maybe he will go away",
        amountOfSteps:2500,
        timeAmount:600,
        positiveOutcome:{
            message:"You arrive back and the lute player appears to be gone."
        },
        negativeOutcome:{
            message:"Turns out he is also very persistent."
        }
    }
];

const EventTasks = {
    getNewTask: () => {
    return events[Math.floor(Math.random() * events.length)];;
  }
};

export default EventTasks;