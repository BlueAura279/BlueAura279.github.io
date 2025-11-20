/* A function for the user to apply their name in h1 (to customize the greeting) */

function userNameChanger(){

    let userName = document.querySelector('#nameCustomizer').value;

    let printGreeting = "Hello there " + userName + "!";

    document.querySelector('#greeting').innerHTML = printGreeting;

}

/* A function for the apply the brief message the user made to be displayed inside of the <p> element created in step 1. */

function briefMessageChanger(){

    let printMessage = document.querySelector('#briefMessageCustomizer').value;

    document.querySelector('#briefMessage').innerHTML = printMessage;
}

/* A function that changes the background color of the page from several options provided in the drop box. */

function changeBackgroundColor(){

    let color = document.querySelector('#backgroundColor').value;

    if(color == "red"){
        document.body.style.backgroundColor = 'red';
    }
    else if(color == "yellow"){
        document.body.style.backgroundColor = 'yellow';
    }
    else if(color == "green"){
        document.body.style.backgroundColor = 'green';
    }
    else if(color == "blue"){
        document.body.style.backgroundColor = 'blue';
    }
    else{
        document.body.style.backgroundColor = 'white';
    }
}

/* A function that allows the user the user to add "To Do" items using an additional text box and button */

function addToDoItems(){

    let item = document.querySelector('#addToList').value;

    let node = document.createElement("li");
    let textnode = document.createTextNode(item);
    node.appendChild(textnode);
    document.getElementById("toDoList").appendChild(node);
}