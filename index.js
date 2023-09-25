//use createElement and createTextNode and appendChild to add to list
//remember to minify code
// make sure to use a randomly generated id for each list
//lazy loading techniques need to be used

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