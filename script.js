const addNote = document.querySelector("#addN");
const deleteNotes = document.querySelector("#deleteNs");
//const deleteNote = document.querySelector("deleteN");
const Download = document.querySelector("#download");
const addPage = document.querySelector("#addP");
const deletePage = document.querySelector("#deleteP"); 
const Notes = document.querySelector(".notes");
const Container = document.querySelector(".container");



function FcreateNote(e){
    console.log(e.target);
    console.log("addnote");
    Notes.innerHTML += `<div class="note">
    <div class="top">
        <input class="Name" placeholder="Title">
        <i class="bi bi-trash3-fill" style="cursor: pointer;"></i>
        <i class="bi bi-unlock-fill" style="cursor: pointer;"></i>
    </div>
    <div class="content">
        <textarea rows="7" cols="25"></textarea>
    </div>
</div>`;
}

function FdeleteNotes(e){
    console.log(e.target);
    console.log("delete notes");
    Notes.innerHTML = '';
}

function FaddPage(e){
    Container.innerHTML += ` <div class="pageContainer">
    <div class="titleP">
        <h1 class="nameWindow">   Food recipes </h1>
        <i class="bi bi-chevron-up"></i>
        <i class="bi bi-trash3-fill"></i>
    </div>
    <div class="notes">
    </div>
</div>`;
}

function FdeletePage(e){
    Container.innerHTML = '';
}

function Fdownload(){
    console.log(e.target);
    console.log("download");
}


function Events(){
    //deleteNote.addEventListener("click",FdeleteNote);
    addNote.addEventListener("click",FcreateNote);
    deleteNotes.addEventListener("click",FdeleteNotes);
    addPage.addEventListener("click",FaddPage);
    deletePage.addEventListener("click",FdeletePage);
    Download.addEventListener("click",Fdownload);
} 


class stickyNote{
    saveLocalStorage(){

    }
    
    editLocalStorage(){

    }

    deleteLocalStorage(){

    }
}

const WebNotes = new stickyNote();

Events();