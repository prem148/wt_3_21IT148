const arr = [];
const duparr = [];


function eninlist(){
    let namevalue = document.getElementById('name').value;
    arr.push(namevalue);
    duparr.push(namevalue);
    document.getElementById('disp').innerHTML += `<li>${arr[arr.length-1]}</li>`;
    document.getElementById('name').value = '';
    document.getElementById('name').focus();
}


function sort(value){
    if(value == 2){
        duparr.sort();
        let disp = document.getElementById('disp');
        disp.innerHTML = '';
        for (let i = 0 ; i < duparr.length ; i++) {
            disp.innerHTML += `<li>${duparr[i]}</li>`;        
        }
    }else{  
        let disp = document.getElementById('disp');
        disp.innerHTML = '';
        for (let i = 0 ; i < duparr.length ; i++) {
            disp.innerHTML += `<li>${arr[i]}</li>`;        
        }
    }
}