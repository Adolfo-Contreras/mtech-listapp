let setting = document.getElementById('Settings');
setting.addEventListener('click', ()=>{
    let settingMenu = document.getElementById('settingsMenu')
    settingMenu.classList.toggle('collapse')
    if(settingMenu.classList.contains('h-0')){
        settingMenu.classList.add('h-fit')
        settingMenu.classList.remove('h-0')
    }else{
        settingMenu.classList.remove('h-fit')
        settingMenu.classList.add('h-0')     
    }
});
//list data structure
let lists = JSON.parse(localStorage.getItem('lists')) ?? [{
    name: 'Edit this List or Create a New One!',
    todos: []
},];
let currentList = JSON.parse(localStorage.getItem('currentList')) ?? lists[0];
//render list
function render(){
    //make list
   if(lists.length>0){ 
    let listids = 0
    let listsHtml = '<ul class="listtitleContainer">';
    for (const key in lists) {
        if (lists.hasOwnProperty(key)) {
            const list = lists[key];
            listsHtml += `<li draggable="true" class="listTitle hovGrow" id="list${listids}"><button class="listBtn">${list.name}</button></li>`;
        }
        listids++
    }
    listsHtml += '</ul>';
    document.getElementById('listTitleContainer').innerHTML = listsHtml;}

    //creating eventlisteners for the lists
    let liVals = Object.values(document.querySelectorAll('.listTitle'));
    liVals.forEach((value, index) => value.setAttribute('onclick', `switchList(${index})`));
    //make title
    let currentListName = currentList.name;
    let listTitleHTML =`<div class ="listContainer"><div class="listTitletodo"><h1 class="listTitleText">${currentListName}</h1></div></div>` 
    document.getElementById('todoContainer').innerHTML = listTitleHTML
    //make todo    
    if(currentList.todos.length>0){
        let todoHtml = `<ul class="listContainer"><li class="listTitletodo"><h1 class="listTitleText">${currentListName}</h1></li>`;
        currentList.todos.forEach((list,index) =>{
            console.log(currentListName)
            Array.from(currentListName).forEach((char)=>{
                if(char === ' '){
                    let underscored = char.replace(' ', '-');
                    char = underscored;
                }
                console.log(`underscores worked:  ${currentListName}`)
            })
            console.log(currentListName)
            todoHtml += `
            <li class="todo" id="${currentListName}-${index}">
            <section>
                <input type="checkbox" name="" id="${currentListName}-${index}txt">
                <label class="break-words" id="${currentListName}-${index}todotxt" for="${currentListName}-${index}txt">${list.text}</label>
            </section>
            <section class="iconHolder">
                <button class="iconBtn delete"onclick="deleteItem(${index})">
                    <svg class=" deleteIcon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                </button>
                <button class="iconBtn edit" onclick="editItem(${index})">
                    <svg class=" editIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
                </button>
            </section>
        </li>`;
        document.getElementById('todoContainer').innerHTML = todoHtml;
    })}
}
render()
//unrender list
function unrender(){
    let listButtonsHTML = document.getElementById('listTitleContainer');
    let todoItemsHTML = document.getElementById('todoContainer');
    if(((listButtonsHTML&&todoItemsHTML)||todoItemsHTML) === true){
        listButtonsHTML.innerHTML = '';
        todoItemsHTML.innerHTML = '';
    }
}
//make new list object
let listcount = 0;
function makelistbutton(){
    let listTitle = document.getElementById('listTitle');
    let newListObj = {name: listTitle.value,todos: []};
    if(listTitle.value){
        lists.push(newListObj)
        currentList = lists[1]
        listTitle.value = '';
        render();
        listcount++
    }else{alert('Please enter a list title')}
}
    //eventlisteners to make the list object
document.getElementById('makelistbtn').addEventListener('click', function makelist(){
    makelistbutton();
    save(lists,currentList);
});
document.getElementById('listTitle').addEventListener('keydown', function makelist(e){ if(e.key === "Enter"){
    makelistbutton();
    save(lists,currentList);
}});

//render current list
function switchList(index){
   currentList = lists[index];
   console.log(currentList);
    render();
}
//make todo
document.getElementById('makeTodo').addEventListener('keydown', function makeTodo(e){
    if(e.key === "Enter"){
        // console.log(`current list is: ${currentList}`);
        let todoVal = document.getElementById('makeTodo');
        // console.log(`todo val: ${todoVal}`);
        let todoObj = {text: todoVal.value, completed: false};
        // console.log(`todoobj: ${todoObj}`);
        let checkForListTitle = document.getElementById('listTitleContainer');
        let listBtn = document.getElementById('list0');
        if(checkForListTitle.contains(listBtn)){
            if(todoVal.value){
                currentList.todos.push(todoObj);
                todoVal.value = '';
                render();
                save(lists,currentList)
            } else {
                alert('Please Enter text for the list item');
            }
        } else {
            alert('List has not been made');
        }
    }
});
//edit todo
function editItem(index){
    //make the text editable
    console.log(currentList.name);
    if(currentList.name.indexOf(' ') === false){
        let oldName = document.querySelector(`#${currentList.name}-${index}todotxt`);
    console.log(oldName);
        let oldText = oldName.innerText;
        let editInput = `<input type="text" placeholder="${oldText}" id="editingItem-${index}">`;
        oldName.innerHTML = editInput;
    }else{
        let underscoredid = currentList.name.replace(' ','-');
        let old_Name = document.querySelector(`#${underscoredid}-${index}todotxt`);
        console.log(old_Name);
        let old_Text = old_Name.innerText;
        let edit_Input = `<input type="text" placeholder="${old_Text}" id="editingItem-${index}">`;
        old_Name.innerHTML = edit_Input;
    }
    //get value and change it 
    document.getElementById(`editingItem-${index}`).addEventListener('keypress',(e)=>{
        if(e.key === 'Enter'){
            let newText = document.getElementById(`editingItem-${index}`);
            currentList.todos[index].text = newText.value;
            render();
            save(lists,currentList);
        }
    })
}
//delete todo
function deleteItem(index) {
    currentList.todos.splice(index, 1)
    render()
    save(lists,currentList);
}
//completed todo
function completedItem(){}
//clear completed
function clearCompleted(){}
//save
    function save(list, currList) {
        localStorage.setItem('lists', JSON.stringify(lists));
        localStorage.setItem('currentList', JSON.stringify(currentList));
    }
//drag and drop

//change colors

//change font