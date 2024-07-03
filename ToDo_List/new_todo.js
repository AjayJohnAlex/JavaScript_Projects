let itemList = []

const body = document.getElementsByTagName("body")[0]
body.style.backgroundColor = '#F5F5DC' 

const itemDiv = document.getElementById("items")

const inputText = document.getElementById("input_text")

function viewItems(){

    itemDiv.innerHTML = null

    for (const[idx, text] of Object.entries(itemList)){

        const container = document.createElement('div')
        container.style.marginBottom = '10px'

        const para = document.createElement('p')
        para.textContent = text
        para.style.display = 'inline'
        para.style.marginRight = '10px'
        

        const editButton = document.createElement('button')
        editButton.textContent = 'Edit'
        editButton.onclick = () => editItems(idx)

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.onclick = () => deleteItems(idx)
        

        container.appendChild(para)
        container.appendChild(editButton)
        container.appendChild(deleteButton)

        itemDiv.append(container)

    }
    

    
}


function deleteItems(idx){

    itemList.splice(idx,1)
    viewItems()
    savedItems()
}

function editItems(idx) {
    const newText = prompt("Edit your item:", itemList[idx])
    if (newText !== null && newText.trim() !== "") {
        itemList[idx] = newText
        viewItems()
        savedItems()
    } else if (newText !== null && newText.trim() === "") {
        alert("You can't set an empty string as an item")
    }
}

function addToDO(){


    if(!inputText.value){
        alert("Can't enter empty string")
        return
    }
    itemList.push(inputText.value)
    viewItems()
    savedItems()
    inputText.value = ''
    
    
}


function savedItems(){
    const strItem = JSON.stringify(itemList)
    localStorage.setItem("items", strItem)
}


function loadItems(){

    const strItem = localStorage.getItem('items')

    if (strItem) itemList = JSON.parse(strItem)
    viewItems()
}

document.addEventListener("DOMContentLoaded", loadItems)