var vardas = document.getElementById("vardas")
var pavarde = document.getElementById("pavarde")
var amzius = document.getElementById("amzius")
var tableData = document.getElementsByTagName("tbody")[0]
var buttonAdd = document.getElementsByTagName("button")[0]
var buttonDeleteFirstRow = document.getElementsByTagName("button")[1]
var buttonDeleteLastRow = document.getElementsByTagName("button")[2]



function validation (){
    if(vardas.value != "" && isNaN(vardas.value)
        && pavarde.value != "" && isNaN(pavarde.value)
        && amzius.value >0){
            addRow()
        }
    else{
        alert("Įveskite visus duomenis")}
}

buttonAdd.addEventListener("click", function(){
    validation()
    }
)

function  addRow (){
    var tr = document.createElement("tr")
    var vardastd = document.createElement("td")
    var pavardetd = document.createElement("td")
    var amziustd = document.createElement("td")

    vardastd.classList.add("vardastab")
    pavardetd.classList.add("pavardetab")
    amziustd.classList.add("amziustab")

    vardastd.innerHTML = vardas.value
    pavardetd.innerHTML = pavarde.value
    amziustd.innerHTML = amzius.value
    
    tr.appendChild(vardastd)
    tr.appendChild(pavardetd)
    tr.appendChild(amziustd)
    tableData.appendChild(tr)
}

 function deleteRow (type){
    if (type == "firstRow"){
        var element = tableData.getElementsByTagName("tr")[1]
    } 
    else if( type == "lastRow"){
        var element = tableData.lastElementChild
    }
    if (element === undefined || element.getElementsByTagName("td")[0] === undefined){
         alert("Nebier ką trynt!")
    } 
    else{
        tableData.removeChild(element)
    }
}


buttonDeleteFirstRow.addEventListener("click", function(){
    deleteRow("firstRow")
    }
)

buttonDeleteLastRow.addEventListener("click", function(){
    deleteRow("lastRow")
    }
)