const badgeEl=document.querySelector('header .badges');
const toTopEl=document.querySelector('#to-top');

window.addEventListener('scroll',_.throttle(function(){ //화면(window)이 스크롤 되면
    // console.log(window.scrollY);
    if(window.scrollY>500){
        // badgeEl.style.display='none';
        // gsap.to(요소,지속시간,옵션);
        // gsap cdn을 구글에 검색
        gsap.to(badgeEl, 0.6, {opacity:0,display:'none'});

        //버튼보이기
        gsap.to(toTopEl,0.2,{
            x:0
        })
    }

    else{
        gsap.to(badgeEl, 0.6, {opacity:1, display:'block'});
        // badgeEl.style.display='block';
        
        //버튼숨기기
        gsap.to(toTopEl,0.2,{
            x:100
        })
    }
},300)); //0.3초에 한번씩 실행되게 만든다. throttle 안 쓰면 함수가 많이 실행되어버림. 'lodash cdn' 구글에 검색해서 복사해서 html에 link 걸고 사용하기

toTopEl.addEventListener('click',function(){
    gsap.to(window,0.7,{
        scrollTo:0
    });
});

const fadeEls=document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay: (index+1)*0.7,
        opacity:1
    });
});

// new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
    direction:'vertical', //기본값은 수평
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container',{
    slidesPerView:3, //한번에 3개 그럼 보이게
    spaceBetween:10, //각 그림마다 공간 10주기
    centeredSlides:true,
    loop:true,
    autoplay: {delay:5000},
    pagination:{
        el:'.promotion .swiper-pagination', 
        clickable:true //사용자 페이지 번호 요소 제어
    },
    navigation:{
        prevEl:'.promotion .swiper-prev', //왼쪽버튼과 오른쪽버튼
        nextEl:'.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container',{
    autoplay: true,
    loop: true,
    spaceBetween:30,
    slidesPerView: 5,
    navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
});

// 보이거나 안보이거 하게 하는 정도는 gsap말고 css로 제어 가능
const promotionEl=document.querySelector('.promotion');
const promotionToggleBtn=document.querySelector('.toggle-promotion');
let isHidePromotion=false;
promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion=!isHidePromotion
    if(isHidePromotion){
        promotionEl.classList.add('hide');
    }
    else{
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector,delay,size){
    gsap.to(selector,random(1.5,2.5),{
        y: size, //y로 움직임
        repeat:-1, //반복
        yoyo: true, //위 아래로 움직임
        ease: Power1.easeInOut, //gsap easing 구글게 검색하여 사용
        delay:random(0,delay)

    });
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',0.5,15);
floatingObject('.floating3',1.5,20);

const spyEls=document.querySelectorAll('section.scroll-spy') //특정한 세션이 화면에 보이기 시작하면 애니메이션 추가해 줄 수 있는 기능
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement:spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook: 0.8 //뷰포트 0.8 지점에서 보여지면 setClassToggle 매소드 실행
        })
        .setClassToggle(spyEl, 'show') //해당 요소에 show를 넣었다 뺏다 함.
        .addTo(new ScrollMagic.Controller()); //우리가 추가한 옵션들을 내부의 컨트롤러의 내용을 할당해서 실제로 동작할 수 있는 구조를 만듦.
}); 


