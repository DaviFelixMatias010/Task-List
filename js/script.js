let btn_add = document.getElementById("add");

btn_add.addEventListener('click', function(){
    let input = document.getElementById("input_task");
    
    if(input.value != ''){
        const task = document.createElement("div");
        let container = document.querySelector(".container");
        let p = document.createElement("p");
        const img = document.createElement("img");
 
        let paragraph = input.value;
        p.innerHTML = paragraph;
 
        img.src = "../img/trash.png";
        task.className = "tasks";
        img.className = "trash";
 
        container.appendChild(task);
        task.appendChild(p);
        task.appendChild(img);
    
        img.addEventListener('click',function(){
            container.removeChild(task);
        })
 
        input.value = '';
   }else{
        let modal = document.querySelector("dialog");
        let btn_close = document.querySelector("#close");

        modal.showModal();
        btn_close.onclick = function(){
            modal.close();
        }
   }    
});

