let textContent =document.querySelector(".inpUserValue");
let descrption =document.querySelector(".descrption");
let bottomClick =document.querySelector(".sub");
let showingSpace =document.querySelector(".showResult");
let deletAll =document.querySelector(".delAll");

bottomClick.addEventListener("click",()=>{
    //in the input not empty
    if (textContent.value.trim()!="" && descrption.value.trim()!="" ) {
    //Box 
    let newBox = document.createElement("div");
    newBox.className="parentBox";
    //text content
    let inputBtn = document.createElement("input");
    inputBtn.className="inputBtn";
    inputBtn.setAttribute('disabled', true);
    inputBtn.value = textContent.value;

    
    //descrption content
    let desBtn = document.createElement("input");
    desBtn.className="inputBtn";
    desBtn.setAttribute('disabled', true);
    desBtn.value = descrption.value;
    
    
    //get date
    let par = document.createElement("p");
    par.innerText=new Date();


    //delete content
    let deletBtn = document.createElement("button");
    deletBtn.className="delete";
    deletBtn.textContent="delete";
    //done 
    let doneBtn = document.createElement("button");
    doneBtn.className="done";
    doneBtn.textContent="done";

    //edit
    let editBtn = document.createElement("button");
    editBtn.className="edit";
    editBtn.textContent="edit";

    //append 
    newBox.appendChild(inputBtn);
    newBox.appendChild(desBtn);
    newBox.appendChild(deletBtn);
    newBox.appendChild(editBtn);
    newBox.appendChild(doneBtn);
    newBox.appendChild(par);
    showingSpace.appendChild(newBox);
    
    //to empty text
    textContent.value="";
    descrption.value="";
}

})
document.addEventListener("click",(e)=>{
        if (e.target.className == "delete"){
            e.target.parentElement.remove(); 

        }
        if (e.target.className == "delAll"){
            showingSpace.textContent="";

        }
        if (e.target.className == "edit"){
            e.target.parentElement.firstChild.removeAttribute("disabled");
            e.target.parentElement.children[1].removeAttribute('disabled');
        }
        if (e.target.className == "done"){
            e.target.parentElement.firstChild.setAttribute('disabled', true);
            e.target.parentElement.children[1].setAttribute('disabled', true);
        }
    })  
