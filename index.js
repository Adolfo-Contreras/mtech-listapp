//use createElement and createTextNode and appendChild to add to list
//remember to minify code
// make sure to use a randomly generated id for each list
//lazy loading techniques need to be used

//dropdown menu
let setting = document.getElementById('Settings');

setting.addEventListener('click', ()=>{
    let settingMenu = document.getElementById('settingsMenu')
    settingMenu.classList.toggle('collapse')
    if(settingMenu.classList.contains('max-h-0')){
        settingMenu.classList.add('h-fit')
        settingMenu.classList.remove('max-h-0')
    }else{
        settingMenu.classList.remove('h-fit')
        settingMenu.classList.add('max-h-0')     
    }
});

//list data structure
let lists = {
1:  {name: `shops`,
    todos: [
        {
            text: 'need stuff',
            description:'why stuff',
            completetd:false
        },
        {
            text: 'need some stuff',
            description:'why some stuff',
            completetd:false
        },
        {
            text: 'need more stuff',
            description:'why more stuff',
            completetd:false
        },{
            text: 'need more stuff',
            description:'why more stuff',
            completetd:false
        },{
            text: 'need more stuff',
            description:'why more stuff',
            completetd:false
        },{
            text: 'need more stuff',
            description:'why more stuff',
            completetd:false
        },{
            text: 'need more stuff',
            description:'why more stuff',
            completetd:false
        },{
            text: 'need more stuff',
            description:'why more stuff',
            completetd:false
        },{
            text: 'need more stuff',
            description:'why more stuff',
            completetd:false
        },{
            text: 'need more stuff',
            description:'why more stuff',
            completetd:false
        },{
            text: 'need more stuff',
            description:'why more stuff',
            completetd:false
        },{
            text: 'need more stuff',
            description:'why more stuff',
            completetd:false
        },{
            text: 'need more stuff',
            description:'why more stuff',
            completetd:false
        }
    ]
},
2:  {name: `shopping`,
    todos: [
        {
            text: 'need stuff',
            description:'why stuff2',
            completetd:false
        },
        {
            text: 'need some stuff',
            description:'why some stuff2',
            completetd:false
        },
        {
            text: 'need more stuff',
            description:'why more stuff2',
            completetd:false
        },
        {
            text: 'need more stuff',
            description:'why more stuff2',
            completetd:false
        },
        {
            text: 'need more stuff',
            description:'why more stuff2',
            completetd:false
        },
        {
            text: 'need more stuff',
            description:'why more stuff2',
            completetd:false
        }
    ]
},
3:  {
    name: `shopsdf`,
    todos:{}
},4:  {
    name: `shopsdf`,
    todos:{}
},5:  {
    name: `shopsdf`,
    todos:{}
},6:  {
 name: `shopsdf`,
    todos:{}
},7:  {
    name: `shopsdf`,
    todos:{}
},8:  {
    name: `shopsdf`,
    todos:{}
},
}

let currentList = lists[1]
// console.log(lists[1].name) get name of list
// console.log(lists[1].todos[0])gets you the actual list item
// console.log(lists[1].todos[1].description) gets you the specific part of the list item
// console.log(lists[2]) get list by name which in this case is '2' and does not go by index
let currentListName = lists[1].name
console.log(currentListName)
function render(){
    let listsHtml = '<ul class="listtitleContainer">';
    for (const key in lists) {
        if (lists.hasOwnProperty(key)) {
            const list = lists[key];
            listsHtml += `<li class="listTitle"><button class="listBtn">${list.name}</button></li>`;
        }
    }
    listsHtml += '</ul>';
    document.getElementById('listTitleContainer').innerHTML = listsHtml;
    //make todo
    let todoHtml = `<ul class="listContainer"><li class="listTitle"><h1 class="listTitleText">${currentListName}</h1></li>`;
    let idIncremnt = 0;
    currentList.todos.forEach((list) =>{
        idIncremnt++
        console.log(idIncremnt)
        todoHtml += `
        <li class="todo">
        <section class="">
            <h4 class="break-words">${list.text}</h4>
            <input type="checkbox" name="" id="${currentListName}-${idIncremnt}">
            <label class="break-words" for="${currentListName}-${idIncremnt}">${list.description}</label>
        </section>
        <section class="iconHolder">
            <button class="iconBtn delete">
                <svg class=" deleteIcon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
            </button>
            <button class="iconBtn edit">
                <svg class=" editIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
            </button>
        </section>
    </li>`;
    document.getElementById('todoContainer').innerHTML = todoHtml;
    })
}

render()

document.getElementById('makelistbtn').addEventListener('click', function showCurrentList(e){
    e.target
})