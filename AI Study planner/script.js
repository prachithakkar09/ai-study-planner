function generatePlan(){

let subject = document.getElementById("subject").value
let difficulty = document.getElementById("difficulty").value

let hours

if(difficulty == "hard"){
hours = 3
}
else if(difficulty == "medium"){
hours = 2
}
else{
hours = 1
}

let list = document.getElementById("plan")

let item = document.createElement("li")

item.textContent = subject + " - " + hours + " hours"

list.appendChild(item)

}