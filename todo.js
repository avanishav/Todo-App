let todolist = [
];
printitem();
function todo(){
    let inputelement = document.querySelector('#todo-input');
    let dateelement = document.querySelector('#todo-date');
    let todoitem = inputelement.value;
    let tododate = dateelement.value;
    todolist.push({item: todoitem, dueDate : tododate});
    inputelement.value = '';
    dateelement.value = '';
    printitem();
}
function printitem(){
    let item = document.querySelector('.todo-container');
    let newhtml = '';
    for(let i = 0; i<todolist.length; i++){
        let todoitem = todolist[i].item;
        let tododate = todolist[i].dueDate;
        newhtml += `
        <span>${todoitem}</span> 
        <span>${tododate}</span> 
        <button  class ="btn-delete" onclick = "deleteitem(${i})">Delete</button>
         `;
    }
    item.innerHTML = newhtml;
}
function deleteitem(index){
    todolist.splice(index, 1);
    printitem();
}