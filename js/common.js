const searchEl=document.querySelector('.search'); //document는 html 파일이라 생각//
const searchInputEl=searchEl.querySelector('input') // 찾은 searchEl에서 input 찾는게 효율적

searchEl.addEventListener('click',function(){
    searchInputEl.focus();    
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색'); //attribute는 속성을 의미. html 속성을 정한다.
});

searchInputEl.addEventListener('blur',function(){ //blur는 focus와 반대
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder',''); //focus되면 class에 focus가 추가되고 없애면 없어짐. 클래스가 추가되면 추가 작업 가능
});

const thisYear=document.querySelector('.this-year');
thisYear.textContent=new Date().getFullYear() //2021을 thisYear의 text로 지정