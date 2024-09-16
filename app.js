// ***************************Making the Variables*****************

const cover = document.querySelector(".cover");
const userInputBox = document.querySelector(".userInputBox");
const close = document.querySelector("#close");
const form = document.querySelector("form");
const addIcon = document.querySelector(".add");
const noteWrapper = document.querySelector(".noteBox");
const addNoteBtn = document.querySelector(".addBtn");
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const error = document.querySelector(".error");

// Date
const date = new Date();
const printDate = date.toLocaleDateString();

// **************** Events Handling ********************************

addIcon.addEventListener("click", showTheInputBox);
close.addEventListener("click", hideTheInputBox);
cover.addEventListener("click", blurTheInputBox);
userInputBox.addEventListener("click", stopBubbling);
form.addEventListener("submit", stopTheDefaultBehavior);
addNoteBtn.addEventListener("click", addNoteOnThePage);

// *******************Making the Functions ****************************

// Show the menu Icons
function showTheMenuIcons() {
    showIcons.style.display = "block";
}

// Show the note on the page

function addNoteOnThePage() {
    if (titleInput.value === "" || descriptionInput.value === "") {
        error.innerText = "Please fill the all the Fields...";
        error.style.opacity = "1";
        error.style.color = "crimson";
    } else {
        error.style.opacity = 0;
        const note = document.createElement("div");
        note.className = "notes";

        note.innerHTML = ` <h4 class="tilte">${titleInput.value}</h4>
                <p class="description">
                   ${descriptionInput.value}
                </p>
                <div class="noteFooter">
                    <div class="footerCover">
                        <div class="date">${printDate}</div>
                        <div class="menu">
                            <i id="editIcon" class="fa-solid fa-pen-to-square"></i>
                            <i id="delIcon" class="fa-solid fa-trash"></i>
        
                    </div>
                </div>
 `;
        noteWrapper.appendChild(note);
        cover.style.display = "none";


        const editIcon = document.querySelector("#editIcon");
        const delIcon = document.querySelector("#delIcon");


        // Delete the selected item from the list of notes
        delIcon.addEventListener("click", (e) => {
            note.remove();
        });

        editIcon.addEventListener("click", (e) => {
           note.remove();
           cover.style.display = "block";
           titleInput.value = note.querySelector(".tilte").innerText;
           descriptionInput.value = note.querySelector(".description").innerText;

        })


        //    Clear the Inputs

        titleInput.value = "";
        descriptionInput.value = "";

    }
}

// Show the input box
function showTheInputBox() {
    cover.style.display = "block";
}

// Hide the input box
function hideTheInputBox() {
    cover.style.display = "none";
}

// Hide the input box using blur event
function blurTheInputBox() {
    cover.style.display = "none";
}

// Stoping the default behavior of the form
function stopTheDefaultBehavior(e) {
    e.preventDefault();
}

// Stop the Event Bubbling
function stopBubbling(event) {
    event.stopPropagation();
}
