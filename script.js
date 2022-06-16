const addNote = document.querySelector("#addN");
const deleteNotes = document.querySelector("#deleteNs");
const Download = document.querySelector("#download");
const Upload = document.querySelector("#upload");
const addPage = document.querySelector("#addP");
const deletePage = document.querySelector("#deleteP"); 
const Notes = document.querySelector(".notes");
const Container = document.querySelector(".container");
const Modal = document.querySelector(".modal-bg");
const Alerts = document.querySelector(".alerts");
let Cancel,Accept,Warning; 

function cancelModal(e){
    window.document.body.removeChild(document.querySelector(".modal-bg"));
}

function FcreateNote(e){
    console.log(e.target);
    console.log("addnote");
    window.document.body.insertAdjacentHTML('afterbegin', `<div class="modal-bg">
    <div class="modal">
        <h1>New Note</h1>
        <div class="info">
            <h1>Name of P</h1>
            <input type="text" name="" id="Text" placeholder="Page Name">
            <select name="select">
            <option value=""> Select</option>
            </select> 
        </div>
        <div class="buttons">
            <div class="button Acp">
                <h1>Accept</h1> 
                <i class="bi bi-check-square"></i>
            </div>
            <div class="button Can">
                <h1>Cancel</h1> 
                <i class="bi bi-x-circle"></i>
            </div>
        </div>
    </div>
    </div>`);
    
    console.log(window.document.body.children);
    Cancel = document.querySelector(".Can");
    Cancel.addEventListener("click",cancelModal);
    Accept = document.querySelector(".Acp");
    Accept.addEventListener("click",()=>{
        Notes.innerHTML += `
        <div class="note">
            <div class="top">
                <input class="Name" placeholder="Title">
                <i class="bi bi-trash3-fill" style="cursor: pointer;"></i>
                <i class="bi bi-unlock-fill" style="cursor: pointer;"></i>
            </div>
            <div class="content">
                <textarea rows="7" cols="25"></textarea>
            </div>
        </div>`
    });
    /*Notes.innerHTML += `<div class="note">
    <div class="top">
        <input class="Name" placeholder="Title">
        <i class="bi bi-trash3-fill" style="cursor: pointer;"></i>
        <i class="bi bi-unlock-fill" style="cursor: pointer;"></i>
    </div>
    <div class="content">
        <textarea rows="7" cols="25"></textarea>
    </div>
    </div>`;*/
}

function FdeleteNotes(e){
    window.document.body.insertAdjacentHTML('afterbegin', `<div class="modal-bg">
    <div class="modal">
        <h1>
        Delete Notes</h1>
        <div class="info">
            <h1>Select the page</h1>
            <select name="select">
            <option value=""> Select</option>
            </select> 
        </div>
        <div class="buttons">
            <div class="button Acp">
                <h1>Accept</h1> 
                <i class="bi bi-check-square"></i>
            </div>
            <div class="button Can">
                <h1>Cancel</h1> 
                <i class="bi bi-x-circle"></i>
            </div>
        </div>

    </div>
    </div>`);
    
    console.log(window.document.body.children);
    Cancel = document.querySelector(".Can");
    Cancel.addEventListener("click",cancelModal);
    Notes.innerHTML = '';
}

function FaddPage(e){

    window.document.body.insertAdjacentHTML('afterbegin', `<div class="modal-bg">
    <div class="modal">
        <h1>New Note</h1>
        <div class="info">
            <h1>Name of Page</h1>
            <input type="text" name="" id="Text" placeholder="Page Name">         
        </div>
        <div class="buttons">
            <div class="button Acp">
                <h1>Accept</h1> 
                <i class="bi bi-check-square"></i>
            </div>
            <div class="button Can">
                <h1>Cancel</h1> 
                <i class="bi bi-x-circle"></i>
            </div>
        </div>
    </div>
    </div>`);
    
    console.log(window.document.body.children);
    Cancel = document.querySelector(".Can");
    Cancel.addEventListener("click",cancelModal);
   
    Accept = document.querySelector(".Acp");
    Accept.addEventListener("click",()=>{
        console.log("crear pagina");
        Container.innerHTML += `
        <div class="pageContainer">
            <div class="titleP">
                <h1 class="nameWindow">   ${document.getElementById("Text").value} </h1>
                <i class="bi bi-chevron-up"></i>
                <i class="bi bi-trash3-fill"></i>
            </div>
            <div class="notes">
            </div>
        </div>`
        cancelModal();
    });

    /*Container.innerHTML += ` <div class="pageContainer">
    <div class="titleP">
        <h1 class="nameWindow">   Food recipes </h1>
        <i class="bi bi-chevron-up"></i>
        <i class="bi bi-trash3-fill"></i>
    </div>
    <div class="notes">
    </div>
    </div>`;*/

}

function FdeletePage(e){
    window.document.body.insertAdjacentHTML('afterbegin', `<div class="modal-bg">
    <div class="modal">
        <h1>
        Delete Notes</h1>
        <div class="info">
            <h1>Select the page</h1>
            <select name="select">
            <option value=""> Select</option>
            </select> 
        </div>
        <div class="buttons">
            <div class="button Acp">
                <h1>Accept</h1> 
                <i class="bi bi-check-square"></i>
            </div>
            <div class="button Can">
                <h1>Cancel</h1> 
                <i class="bi bi-x-circle"></i>
            </div>
        </div>

    </div>
    </div>`);
    
    console.log(window.document.body.children);
    Cancel = document.querySelector(".Can");
    Cancel.addEventListener("click",cancelModal);
    Notes.innerHTML = '';
    //Container.innerHTML = '';
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

document.addEventListener("DOMContentLoaded",()=>{
    if(Container.children.length === 0){
        for(var i = 0; i < 2; i++){
            if( i === 0){
                Alerts.innerHTML += `<div class="alert transitionIn ">
                <i class="bi bi-x-circle"></i> <h1> Sin Pagina</h1>
            </div>`;
            } 

            if( i === 1){
                Alerts.innerHTML += `<div class="alert transitionIn">
                <i class="bi bi-x-circle"></i> <h1> Sin Notas</h1>
                </div>`;
            } 
        }
        setInterval(()=>{
            for(var i = 0; i < 2; i++){
                if( i === 0){
                    Alerts.children[0].classList.add("transitionOut");
                } 
    
                if( i === 1){
                    Alerts.children[1].classList.add("transitionOut")
                } 
            }
            setTimeout(()=>{
                Alerts.innerHTML = '';
            },2500);
        },4500);
        
    }

});

Events();