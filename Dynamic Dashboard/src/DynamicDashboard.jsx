

const user = "Puja";
const isPremium = true;
const tasks = [
                {
                    taskName:"Study Basics Of React",
                    completed:"✅"
                },
                {
                    taskName:" React State Management and Event Handling",
                    completed:"❌"                   
                },
                {
                  taskName:"Gather the project ideas.",
                  completed:"❌"  
                }
];

const DynamicDashboard = () => {
const completedTasks = tasks.filter(task => task.completed === "✅").length; 
const notCompleteTasks = tasks.filter(task => task.completed === "❌").length; 
let displayDate = new Date().toLocaleDateString();
    return (
        
    <div>
        <p>Todays Date: {displayDate}</p>
         <h1 >Hello,{user}!</h1>

        {isPremium?  (<p style={{color: "darkmagenta", fontFamily: "cursive"}}>"Thank you for being a premium member!"</p>):"Upgrade to premium to enjoy exclusive features!"}

        {tasks.map((task) => (
           <ul style={task.completed === "✅"? {color:"green"}:{color:"red"}}> {task.taskName} {task.completed}
            </ul>
        ))
}
    <h4>Task Count:</h4>
    <p> 
        Tasks Completed: {completedTasks} </p>
        <p>Tasks not completed:{notCompleteTasks}</p>
    
</div>

)};

export default DynamicDashboard;