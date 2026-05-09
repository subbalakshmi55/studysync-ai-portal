let taskCount = 0;

let hours = 0;

setInterval(()=>{

  hours++;

  document.getElementById("hours").innerText =
    hours + " hrs";

},5000);

document.getElementById("addTaskBtn")
.addEventListener("click",()=>{

  let taskInput =
    document.getElementById("taskInput");

  let task = taskInput.value;

  if(task === ""){
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = "✅ " + task;

  document.getElementById("taskList")
  .appendChild(li);

  taskCount++;

  document.getElementById("taskCount")
  .innerText = taskCount;

  localStorage.setItem("tasks",
    document.getElementById("taskList").innerHTML);

  taskInput.value = "";

});

window.onload = ()=>{

  let savedTasks =
    localStorage.getItem("tasks");

  if(savedTasks){

    document.getElementById("taskList")
    .innerHTML = savedTasks;

  }

};

let tips = [

  "Use Pomodoro technique for better focus.",

  "Revise difficult subjects before sleeping.",

  "Practice coding at least 1 hour daily.",

  "Take short breaks between study sessions.",

  "Prepare handwritten notes for quick revision."

];

document.getElementById("tipBtn")
.addEventListener("click",()=>{

  let randomTip =
    tips[Math.floor(Math.random()*tips.length)];

  document.getElementById("tip")
  .innerText = randomTip;

});

document.getElementById("darkModeBtn")
.addEventListener("click",()=>{

  document.body.classList.toggle("dark");

});