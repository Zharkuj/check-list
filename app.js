const buttonhr = document.getElementsByTagName("button")[0];
const inputhr = document.getElementsByTagName("input")[0];
const buttonhrgrr = document.getElementsByTagName("button")[1];
console.log(inputhr)

buttonhr.addEventListener("click", ()=>{

    // alert("g")
    if(inputhr.value==""){
        alert("You cannot input an undefined value.")
    }else{
        const li = document.createElement("li");
        const edit = document.createElement("button");
        const deleter = document.createElement("button");
        li.innerText = inputhr.value;
        const ol = document.getElementsByTagName("ol")[0];
        ol.append(li);
        inputhr.value = "";

        edit.innerHTML=("<i class='bi bi-pen-fill'></i>")
        li.append(edit);
        edit.className = "edit"

        deleter.innerHTML=("<i class='bi bi-trash-fill'></i>")
        li.append(deleter);
        deleter.className = "deleter"
        
        
    }
})

const ol = document.getElementsByTagName("ol")[0];
ol.addEventListener("click", (e)=>{
    console.log(e.target);
    let target = e.target;
    let parent = target.parentElement;
    // console.log(parent);
    let del = parent.parentElement;
    let check = parent.parentElement;
    if(target.className == "bi bi-trash-fill"){
        del.remove();

    }else if(target.className == "bi bi-pen-fill"){
        check.classList.toggle("checked");

    }
    savedr();
})


function savedr(){
    localStorage.setItem('toDo', ol.innerHTML);
    

}

let getDatardr
function getLir(){
    getDatardr = localStorage.getItem('toDo');
    ol.innerHTML = getDatardr;
}
getLir();

buttonhrgrr.addEventListener("click", ()=>{

    savedr()

})