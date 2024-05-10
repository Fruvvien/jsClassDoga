document.addEventListener("DOMContentLoaded", () =>{
    let count = 0;
    const form = document.getElementById("form");
    const todolist = new ToDoList();
    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        const input = document.getElementById("teendo");
        todolist.addTask(input.value);
        kiiras();

    })

    function kiiras(){
       
            let table = "";
            for (let index = 0; index < todolist.task.length; index++) {            
                const element = todolist.task[index];
    
                let tables = 
                `
                <tr>
                    <th id="${index}" scope="row">${element.toString()}</th>
                    <td id="completeTeendo" style="font-weight:bold"></td>
                    <td><button onclick="teljesitett(${index})" class="btn btn-success">Kész</button></td>
                    <td><button onclick="eltavolit(${index})" class="btn btn-danger">Eltávolít</button></td>
                 </tr>
                `
                
                table+= tables;
                
                
               
            }
            document.getElementById("tbody").innerHTML= table;
        }
        
    


    function teljesitett(index){
        todolist.completeTask(index);
       
    }

    function eltavolit(index){
        todolist.removeTask(index);
        kiiras();
    }


    window.teljesitett = teljesitett;
    window.eltavolit = eltavolit;

    //1 feladat

/* 
    todolist.addTask("bevásárlás");
    todolist.addTask("edzés");
    todolist.addTask("olvasás");

    todolist.viewTask();

    todolist.completeTask(1);
    todolist.removeTask(2);

    todolist.viewTask(); */

})



