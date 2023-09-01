
let btn = document.getElementById('addBtn');
btn.addEventListener('click', addnote);

let parentList = document.getElementById('parent-list');

// function to add
function addnote(e) {
    //check that emptyMsg class exsit or not
    if(parentList.children[0].className == "emptyMsg"){
        parentList.children[0].remove();
    }
    //let select the current button that is next to input text
    let currentBtn = e.currentTarget;

    //as the input text is just before the button we store it, in a variable  
    let currentInput = currentBtn.previousElementSibling;

    //storing the class of li in new variable
    let currentNoteName = currentInput.value;

    //checking the output in the console
    console.log(currentInput.value);
    console.log(e);

    //Create a Element
    let newLi = document.createElement('li');
    // newLi.classList.add('list-group-item');
    // newLi.textContent = currentInput.value;
    newLi.className = 'list-group-item d-flex justify-content-between';
    newLi.innerHTML = `<h5 class="flex-grow-1">${currentNoteName}</h5>
            <button type="button" class="btn btn-warning mx-3" onclick="editNote(this)"><span class="bi bi-pencil"></span>Edit</button>
            <button class="btn btn-danger" onclick="removeNote(this)"><span>X</span></button>`

    // let parentList = document.getElementById('parent-list');
    parentList.appendChild(newLi);
}

//function to remove the note
function removeNote(currentElement){
    console.log(currentElement.parentElement);
    currentElement.parentElement.remove();

    if(parentList.children.length <= 0)
    {
        //create new h5 element
        let newemptyMsg = document.createElement('h4');
        //add class to it
        newemptyMsg.classList.add("emptyMsg");
        newemptyMsg.textContent = "Add Note";
        //Add the empty msg to parent
        parentList.appendChild(newemptyMsg)
    }
}

// function to edit the note
function editNote(currElement){
    if(currElement.textContent == "Done"){
        currElement.textContent = "Edit";
        let currentNoteName = currElement.previousElementSibling.value;
        let newcurrentHeading = document.createElement("h5");
        newcurrentHeading.className = "flex-grow-1";
        newcurrentHeading.textContent = currentNoteName;
        currElement.parentElement.replaceChild(newcurrentHeading, currElement.previousElementSibling);

    }
    else {
    //After clicking the edit button, change the text to done
    currElement.textContent = "Done";
    console.log(currElement.previousElementSibling);
    let currentNoteName = currElement.previousElementSibling.textContent;
    //create a new input element with type = text
    let newcurrentInput = document.createElement('input');
    newcurrentInput.type = "text";
    newcurrentInput.className = "form-control";// same class name 
    newcurrentInput.placeholder = "Item Name";
    newcurrentInput.value = currentNoteName;

    currElement.parentElement.replaceChild(newcurrentInput, currElement.previousElementSibling);
    }
}