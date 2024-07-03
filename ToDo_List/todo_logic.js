

// let input_data = "Hello World"
let itemList = []

const body = document.getElementsByTagName("body")[0]
const inputText = document.getElementById('input_text')
const storageKey ='items'

body.style.backgroundColor = '#F5F5DC' 

const itemDiv = document.getElementById("items")

function ViewToDO(){

    itemDiv.innerHTML = null

    for (const[idx, item] of Object.entries(itemList)) {

        const container = document.createElement('div')
        container.style.marginBottom = '10px'

        const text = document.createElement('p')
        text.style.display = 'inline'
        text.style.marginRight = "10px"
        text.textContent = item

        const delButton = document.createElement('button')
        delButton.textContent = 'Delete'
        delButton.onclick = () => removeToDO(idx)

        const editButton = document.createElement('button')
        editButton.textContent = 'Edit'
        editButton.onclick = () => editToDO(idx)

        container.appendChild(text)
        container.appendChild(editButton)
        container.appendChild(delButton)

        itemDiv.appendChild(container)
    }

}

 
function addToDO(){

    // itemDiv.innerHTML = null
    if (!inputText.value){
        alert("You can't add empty strings")
        return
    }
    itemList.push(inputText.value)
    ViewToDO()
    inputText.value = ''
    saveItems()

}

function removeToDO(idx){
    itemList.splice(idx, 1) 
    ViewToDO()
    saveItems()
}

function saveItems(){
    const itemStr = JSON.stringify(itemList)
    localStorage.setItem(storageKey, itemStr)
}


function loadItems(){
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) itemList = JSON.parse(oldItems)
    ViewToDO()
}


function editToDO(idx){
    const newText = prompt("Edit your item:", itemList[idx])
    if (newText !== null && newText.trim() !== "") {
        itemList[idx] = newText
        ViewToDO()
        saveItems()
    } else if (newText !== null && newText.trim() === "") {
        alert("You can't set an empty string as an item")
    }
}



document.addEventListener("DOMContentLoaded", loadItems)
