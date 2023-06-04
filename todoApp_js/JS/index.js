
let tasks=[

    {
        "Title": 'الرياضة',
        "date":  '15/10/2023',
        "isDone": false
        
    },
    
    {
        "Title": 'الطعام',
        "date":  '15/10/2023',
        "isDone": false
        
    },
    
    {
        "Title": 'الصلاة',
        "date":  '15/10/2023',
        "isDone": false
        
    },

]
function addNewTaskTable()
{
document.getElementById('Tasks').innerHTML="";
    let index=0;
          for (task of tasks){
             let content  =
        `
            <div class="containerTasks" id="Tasks">

                <!-- Task content-->
                <div class="taskContent">

                <!-- task info -->
                <div class="taskInfo">
                    <h2>${task.Title}</h2>

                    <div>
                    <span><i class="fa-sharp fa-solid fa-calendar"></i></span>  </i><span>${task.date}</span>
                    </div>
                </div>

                    <!-- //task info -->

                    <!-- tasks Actions -->
                    
                    <div class="actions">
                        <button onclick="deleteTask(${index})" class="circleBtn Delete"><i class="fa-solid fa-trash colorIcon"></i></button>
                        <button class="circleBtn Cheeck"><i class="fa-solid fa-check colorIcon"></i></button>
                        <button  onclick="Edit(${index})" class="circleBtn Edite"><i class="fa-solid fa-pen-to-square colorIcon"></i></button>
                        <!-- <BUtton>per</BUtton> -->
                    </div>
                    <!-- //tasks Actions// -->
                </div>

                <!-- //task content //-->
        </div>
    `
    document.getElementById('Tasks').innerHTML +=content
    index++;
}
}

    addNewTaskTable();

//ِadd a new task 
document.getElementById('addNewTask').addEventListener('click', function() {
    let taskName = prompt("من فضلك قم بإدخال النص الذي تريده");
    let taskNameTrimmed = taskName.trim();
  
    // Validate the task name
    if (taskNameTrimmed === "") {
      alert("من فضلك انت لم تقم بأدخال اي نص الرجاء التأكد من ادخالك للنص ");
      return;
    }
  
    // Check for duplicate task
    // const isDuplicate = tasks.some((task) => task.Title === taskNameTrimmed);
    // if (isDuplicate) {
    //   alert("النص الذي تحاول ادخاله موجود بالفعل " +  "" + ` (  ${taskNameTrimmed} ) ` );
      
    //   return;
    // }
  
    const now = new Date();
    const date =
      now.getDate() +
      "/" +
      (now.getMonth() + 1) +
      "/" +
      now.getFullYear() +
      "|" +
      now.getHours() +
      ":" +
      now.getMinutes();
  
    let taskObj = {
      Title: taskNameTrimmed,
      date: date,
      isDone: false,
    };
  
    tasks.push(taskObj);
  
    // Sort tasks by title
    tasks.sort((a, b) => a.Title.localeCompare(b.Title));
  
    addNewTaskTable();
  });
  
  
// Task Delete 
function deleteTask(index) {
    let task = tasks[index];

    let isConfirmed = confirm("هل انت متأكد من انك تريد حذف النص : " +  ` !! ( ${task.Title} )`);

    if (isConfirmed) {
        tasks.splice(index, 1);
        addNewTaskTable();
    }
}
// End The function

function Edit(index){
    let task = tasks[index];
        let newTask = prompt("قم بأدخال النص الذي تريد تعديله",task.Title)
// vaildation
        let taskNamee = newTask.trim();
        if (taskNamee==="")
        {
            alert("من فضلك انت لم تقم بأدخال اي نص الرجاء التأكد من ادخالك للنص ")
            return;
        }
        /// end vaildatiom
        task.Title = newTask;
        tasks.sort((a, b) => a.Title.localeCompare(b.Title));

        addNewTaskTable();

    
}

