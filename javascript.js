var intervalID;
var totalSeconds = 0;
var bestSeconds = 0;
var gameOn = 0;
var numberHelps = 0;

var forEach;


window.addEventListener("keydown",checkKey,false);

function checkKey(e){
	if (e.keyCode == "72" && (numberHelps == 0) && (gameOn == 1)) {
		
        if(totalSeconds >= 5){
			var currentSeconds = totalSeconds;
			forEach = Array.prototype.forEach;
			$$ = document.querySelectorAll.bind(document);
			forEach.call($$('.line'),function(v){
			v.style.opacity = '1';
			setTimeout(fadeLines,1000);
			
			});
			
		numberHelps = 1;
		}
		
    }

}


function theClock(status){
	
     var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
        
        intervalID = setInterval(setTime, 1000);

        function setTime()
        {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds%60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
			if(totalSeconds == 5){
				fadeLines();
			}
        }

        function pad(val)
        {
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }
	if(status == 1){
		clearInterval(intervalID);
	}
}
function fadeLines(){
 forEach = Array.prototype.forEach;
  $$ = document.querySelectorAll.bind(document);
  forEach.call($$('.line'),function(v){
	v.style.opacity = '0';
  });

}
function theClick(){
  forEach = Array.prototype.forEach;
  $$ = document.querySelectorAll.bind(document);
  forEach.call($$('.line'),function(v){
	v.addEventListener('mouseover',clickWrapper,false);
  });
  theClock(0);
  gameOn = 1;
  

}

function theClick2(){
	 forEach = Array.prototype.forEach;
  $$ = document.querySelectorAll.bind(document);
  forEach.call($$('.line'),function(v){
	v.removeEventListener('mouseover',clickWrapper,false);
	v.style.opacity = '1';
  });
  if((bestSeconds == 0) || (totalSeconds < bestSeconds)){
		var bestMinutesLabel = document.getElementById("best-minutes");
        var bestSecondsLabel = document.getElementById("best-seconds");
		var a = 
		bestSecondsLabel.innerHTML = "0"+(totalSeconds%60);
        bestMinutesLabel.innerHTML = "0"+(parseInt(totalSeconds/60));
		bestSeconds = totalSeconds;
	}
  clearInterval(intervalID);
  gameOn = 0;
  var winaudio = new Audio('victory.mp3');
  winaudio.play();
  var div = document.getElementById('win');
  var div2 = document.getElementById('win-lose-holder');
  div.style.display = 'block';
  div2.style.display = 'block';
  setTimeout(winSplash,3000);
  //alert('You Won! Total Time' + totalSeconds);
  totalSeconds = 0;
  numberHelps = 0;
  //window.clearTimeout(timeoutWinSplashID);
  //theClock(1);

}
function clickWrapper(){
var forEach = Array.prototype.forEach;
  $$ = document.querySelectorAll.bind(document);
  forEach.call($$('.line'),function(v){
	v.removeEventListener('mouseover',clickWrapper,false);
	v.style.opacity = '1';
  });
  clearInterval(intervalID);
  var theZeros = "0" + 0
  document.getElementById("minutes").innerHTML = theZeros;
  document.getElementById("seconds").innerHTML = theZeros;
  totalSeconds = 0;
  var loseaudio = new Audio('losegame.mp3');
  loseaudio.play();
  var div = document.getElementById('lose');
  var div2 = document.getElementById('win-lose-holder');
  div.style.display = 'block';
  div2.style.display = 'block';
  numberHelps = 0;
  setTimeout(loseSplash,3000);
	//alert('game over!'); 
		
	
}

window.onload = function(){
	
  var theClass = document.getElementsByClassName('line');
  var theClassLength = theClass.length;
 
  for( var x = 0; x >= theClassLength; x++){
		theClass[x].addEventListener('mouseover', clickWrapper, false);
		alert(x);
  }
}
function navActive(){
	var theBody = document.getElementsByTagName('body')[0];
	var hasID = theBody.hasAttribute("id");
	if(hasID){
		document.getElementById("nav-active").removeAttribute("id"); 
	}else{
		theBody.setAttribute("id","nav-active");
	}
}
function showDirections(){
	var div = document.getElementById('directions-block');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}
function showHelp(){
	var div = document.getElementById('help-instructions');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}

function winSplash(){
	var div = document.getElementById('win');
	var div2 = document.getElementById('win-lose-holder');
	div2.style.display = 'none';
	div.style.display = 'none';
}
function loseSplash(){
	var div = document.getElementById('lose');
	 var div2 = document.getElementById('win-lose-holder');
	div2.style.display = 'none';
	div.style.display = 'none';
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
