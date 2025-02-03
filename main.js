let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];
let years = document.getElementById('years');
let months = document.getElementById('months');
let days = document.getElementById('days');

function calculateAge(){
    if(!userInput.value){
        alert('Please select a valid date.');
        return;
    }
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() +1 ;
    let y1 = birthDate.getFullYear();
    
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3,m3,y3;
        
    y3 = y2 - y1;

    if(m2>=m1){
        m3 = m2-m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }
    if(d2 >= d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = numberOfDaysInMonth(y1,m1) + d2 -d1;
    }
    if(m3<0){
        m3 = 11;
        y3--;
    }
    refreshResult()
    if(y3 != ''){
        years.classList.remove('hide');
        years.querySelector('span').innerText = y3;
        
    }
    if(m3 != ''){
        months.classList.remove('hide');
        months.querySelector('span').innerText = m3;
        
    }
    if(d3 != ''){
        days.classList.remove('hide');
        days.querySelector('span').innerText = d3;
        
    }
}

function refreshResult(){
    years.classList.add('hide');
    months.classList.add('hide');
    days.classList.add('hide');
}

function numberOfDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}

