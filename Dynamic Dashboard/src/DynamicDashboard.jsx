

const user = ["Puja"];
const isPremium = true;
const tasks = [
                {
                    taskName:"Study Basics Of React",
                    completed:true
                },
                {
                    taskName:" React State Management and Event Handling",
                    completed:false                   
                },
                {
                  taskName:"Gather the project ideas.",
                  completed:true  
                }
];

const DynamicDashboard = () => {
const completedTasks = tasks.filter(task => task.completed).length; 
const notCompleteTasks = tasks.filter(task => ! task.completed).length; 
let displayDate = new Date().toLocaleDateString();
    return (
        
    <div>
        <p>Todays Date: {displayDate}</p>
         <h1 >Hello,{user}!</h1>

        {isPremium?  (<p style={{color: "darkmagenta", fontFamily: "cursive"}}>"Thank you for being a premium member!"</p>):"Upgrade to premium to enjoy exclusive features!"}

        {tasks.map((task) => 
            task.completed ? 
            (<p style={{ color: "green"}}>{task.taskName}: ✅ Completed!</p>) :
            (<p style={{ color: "red"}}>{task.taskName}: ❌ Not Completed.</p>)
        )
    }
    <h4>Task Count:</h4>
    <p>Number of Completed ✅ tasks: {completedTasks}</p>
    <p>Number of InComplete ❌ tasks: {notCompleteTasks}</p>
    
     </div>

     );
       
};

export default DynamicDashboard;