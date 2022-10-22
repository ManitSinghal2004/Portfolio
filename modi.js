var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
for(var i = 0 ; i<navMenuAnchorTags.length ; i++){
	navMenuAnchorTags[i].addEventListener('click' ,function(event){
		event.preventDefault() ;
		var targetSectionID = this.textContent.trim().toLowerCase();
		var targetSection = document.getElementById(targetSectionID);
		console.log(targetSection);
		
		var interval = setInterval(function(){
			var targetSectionCoordinates = targetSection.getBoundingClientRect() ;
			if(targetSectionCoordinates.top <= 0){
				clearInterval(interval);
				return ;
			}
			window.scrollBy(0,60) ;
		}, 10);
	});
}








// var progressBars = document.querySelectorAll('.skill-progress > div');
// var skillsContainer = document.getElementById('skill-container');

// function initialiseBars(){
// 	for(let bar of progressBars){
// 		bar.style.width = 0 + '%';
// 	}
// }
// initialiseBars();
// window.addEventListener('scroll',checkScroll);
// var animationDone = false ;
// function fillBars(){
// 	for(let bar of progressBars){
// 		let targetWidth = bar.getAttribute('data-bar-width');
// 		let currentWidth = 0 ;
// 		let interval = setInterval(function(){
// 			if(currentWidth>targetWidth){
// 				clearInterval(interval);
// 				return ;
// 			}
// 			currentWidth++;
// 			bar.style.width = currentWidth + '%' ;
// 		}, 50);
// 	}
// }

// function checkScroll(){
// 	var coordinates = skillsContainer.getBoundingClientRect();
// 	if(!animationDone && coordinates.top <= window.innerHeight){
// 		console.log('scroll done');
// 		animationDone = true ;
// 		fillBars();
// 		return;
// 	}
// 	else if(coordinates.top > window.innerHeight){
// 		animationDone = false ;
// 		initialiseBars() ;
// 		return;
// 	}
// }

var skillBar = document.querySelectorAll('.skill-progress>div');
var skillsSection = document.getElementById('skill-container');
function initialWidth() {
    for (let i of skillBar) {
        i.style.width = 0 + '%';
    }
}
initialWidth();
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function regainWidth() {

    for (let bar of skillBar) {
        var data = bar.getAttribute('data-skill');
        var currWidth = 0;
        var skillInterval = setInterval(function () {
            if (currWidth > data) {
                clearInterval(skillInterval);
                return;
            }
            currWidth++;
            bar.style.width = currWidth + '%';
        }, 40);
    }
}

var skillsCord;
function checkScroll() {
    skillsCord = skillsSection.getBoundingClientRect();
    if (skillsCord.top < window.innerHeight && !animationDone) {
        animationDone = true;
        console.log('skill section visible');
        regainWidth();
        return;
    }
}