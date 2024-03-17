let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let clearToDo = document.getElementById("clearToDo");

addToDoButton.addEventListener("click", function(e){
    e.preventDefault();
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-style")
    toDoContainer.appendChild(paragraph);
    console.log(toDoContainer);
    paragraph.innerText = inputText.value;
    inputText.value = "";

    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration="line-through";
    });  

    paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph);   //* Tek bir taskı silmek için üzerine çift tıkla
    });

    clearToDo.addEventListener("click", function(){
        // paragraph.style.display = "none";   //* Bu silmez, sadece o paragrafa none(görünmezlik) verir
        paragraph.remove();
    });
});

