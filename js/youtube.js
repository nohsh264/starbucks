//1. The <iframe> (and video player) will replace this <div>
    //<div id="player"></div> //이렇게 사용


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script'); //script 생성
  
tag.src = "https://www.youtube.com/iframe_api"; //생성한 script src에 api 할당
var firstScriptTag = document.getElementsByTagName('script')[0]; //html에서 사용하는 여러 script 태그들 중 첫번째 태그를 찾아
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); //유튜브 api를 사용할 수 있는 script 태그 앞에다가 삽입을 함

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { //앞에서 연결한 api에 있는 함수 이름임
new YT.Player('player', { //id=player로 사용하면
  videoId: 'An6LvWQuj_8', //원하는 유튜브 영상 주소에 id값 써있음
  playerVars:{
    autoplay:true, //자동재생
    loop:true,
    playlist:'An6LvWQuj_8'
  },
  events:{
    onReady:function(event){ //준비상태가 되면 실행. event는 재생되는 상황을 인수로 받아서 이용
      event.target.mute() //음소거. target은 영상 자체
    }
  }
});
}