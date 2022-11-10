const body = document.querySelector("body");
const button = document.querySelector("button");
const name = document.getElementById("name");
const username = document.getElementById("surname");
const age = document.getElementById("age");
const email = document.getElementById("email");
const table = document.querySelector("table");
const tbody = document.createElement("tbody");

table.appendChild(tbody);

button.addEventListener("click", () => {
    if(name.value.trim() == ""){
        name.style.border = "2px solid red";
    }else{
        const td =document.createElement("td");
        tbody.appendChild(td);
        td.innerText = name.value;
        name.style.border = "1px solid black";
        name.valume = "";
    }

    if(username.value.trim() == ""){
        username.style.border = "2px solid red";
    }else{
        const td =document.createElement("td");
        tbody.appendChild(td);
        td.innerText = username.value;
        username.style.border = "1px solid black";
        username.valume = "";
    }

    if(age.value.trim() == ""){
        age.style.border = "2px solid red";
    }else{
        const td =document.createElement("td");
        tbody.appendChild(td);
        td.innerText = age.value;
        age.style.border = "1px solid black";
        age.valume = "";
    }

    if(email.value.trim() == ""){
        email.style.border = "2px solid red";
    }else{
        const td =document.createElement("td");
        tbody.appendChild(td);
        td.innerText = email.value;
        email.style.border = "1px solid black";
        email.valume = "";
    }
})