let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createDate = new Date();
    let table = document.getElementById('list')
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-userName').value;
    row.insertCell(1).innerHTML = document.getElementById('new-userId').value;
    row.insertCell(2).innerHTML = ("0" + (createDate.getMonth() + 1)).slice(-2) + "/" + ("0" + createDate.getUTCDate()).slice(-2) + `/${createDate.getFullYear()}`;
    let action = row.insertCell(3);
    action.appendChild(createDeleteButton(id++));
    document.getElementById('new-userName').value = '';
    document.getElementById('new-userId').value = '';
})

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-outline-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }

    return btn;
}



