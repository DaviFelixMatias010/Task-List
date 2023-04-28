function add_task(){
    let input = document.getElementById("input_task");
    
    const task = document.createElement("div");
    const container = document.querySelector(".container");
    const p = document.createElement("p");
    const img = document.createElement("img");

    let paragraph = input.value;
    p.innerHTML = paragraph;

    img.src = "../img/trash.png"
    
    task.className = "tasks";
    img.className = "trash";

    container.appendChild(task);
    task.appendChild(p);
    task.appendChild(img);
}