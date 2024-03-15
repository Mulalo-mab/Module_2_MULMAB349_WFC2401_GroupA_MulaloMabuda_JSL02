const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);



const addNewGoal = () => {
    // Get the input value for the new goal
    const goalInput = document.querySelector('#goalInput').value;
     // Get the list element where goals are displayed
    const goalList = document.querySelector('#goalList');
    

    
    // Check for duplicates
    const existingGoals = goalList.querySelectorAll('li');
    let isDuplicate = false;
    

    // Iterate over existing goals to check for duplicates
    existingGoals.forEach(goal => {
        // If the input goal matches any existing goal, set isDuplicate to true
        if (goal.textContent === goalInput) {
            isDuplicate = true;
            // Exit the loop early if a duplicate is found
            return;
        }
    });
    

    // If the goal is a duplicate, display an alert and return from the function
    if (isDuplicate) {
        alert('Goal already exists!');
        return;
    }
    
    // If it's not a duplicate, proceed with adding it as a new goal
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
