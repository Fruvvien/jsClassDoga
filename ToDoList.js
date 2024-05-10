class ToDoList {
    #task;
    #teljesitett;

    constructor(){
      this.#task = [];
      this.#teljesitett = [];
    }

    get task(){
        return this.#task;
    }
    get teljesitett(){
        return this.#teljesitett;
    }



    addTask(task){
        this.#task.push(task);
    }

    removeTask(index){
       for (let i = 0; i < this.#task.length; i++) {
            if(index == i ){
                this.#task.splice( index, 1);
            }
        
       }
    }


    completeTask(index){
        for (let i = 0; i < this.#task.length; i++) {
            if(index == i ){
                this.#teljesitett.push(this.#task[i]);
                
            }
        
       }
       let element = "";
       for (let index = 0; index < this.#teljesitett.length; index++) {
           element = this.#teljesitett[index];
           
       }
       if(element != ""){
        document.getElementById("mainTeendo").innerText = "";
         document.getElementById("completeTeendo").innerText = element;

       }
    }

    viewTask(){
        this.#task.forEach(element => {
            console.log(`teendők: ${element}`);                
            
        });
        if(this.#teljesitett.length != 0){
            this.#teljesitett.forEach(element => {
                console.log(`teljesített: ${element}`);
            });
        }
    }

    toString(){
        for (let index = 0; index < this.#task.length; index++) {
            const element = this.#task[index];
            return `${element}`
        }
    }

    toString2(){
        for (let index = 0; index < this.#teljesitett.length; index++) {
            const element = this.#teljesitett[index];
            return `${element}`
        }
    }
  
}