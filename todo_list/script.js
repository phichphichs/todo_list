function addNote() {
    //create div
    var div = document.createElement("div");
    div.classList.add("noteInput");

    // create input 
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    div.appendChild(input);
    
    //create checkbox
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    div.appendChild(checkbox);

    //decoration text when check
    checkbox.onclick = function() {
        input.classList.toggle("decoration");
    }

    //create button delete
    var deleteNote = document.createElement("button");
    deleteNote.innerHTML = "Delete";
    deleteNote.classList.add("btnDelete");
    div.appendChild(deleteNote);

    //delete note
    deleteNote.onclick= function() {
        div.remove();
    }
    
    document.getElementsByClassName("addHtml")[0].appendChild(div);
}