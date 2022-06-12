let slider = document.getElementById('slider');
let blur = document.getElementById('blur');
var imgCounter;
let image = new Image();

window.onload = function () { imgCounter = 1; }
for(x = 1;x < 10;x++){
	let block = document.createElement('li');
	let gallery = document.getElementById('photo-list');
	block.style.backgroundImage = 'url("../CSS/Images/' + x + '.png")';
	block.style.backgroundPosition = "center center"
	block.className = 'photo';
	block.id = 'photo-' + x ;
	block.setAttribute('onclick', 'showSlider(' + x + ');');
    gallery.appendChild(block);
}
function showSlider(counter){
	imgCounter = counter;
    image.src = '../CSS/Images/' + imgCounter + '.png';
    image.className = 'inSliderImg';
    slider.appendChild(image);
	slider.style.display = 'block';
	blur.style.display = 'block';
}
function closeSlider(){
	slider.removeChild(image);
	slider.style.display = 'none';
	blur.style.display = 'none';
}
function previousSlide() {
	if (imgCounter == 1) { imgCounter = 9}
		
	slider.removeChild(image);
	imgCounter--;
	image.src = '../CSS/Images/' + imgCounter + '.png';
    image.className = 'inSliderImg';
    slider.appendChild(image);
}
function nextSlide() {
	if (imgCounter <= 0) { imgCounter = 1}
	if (imgCounter >= 9) { imgCounter = 1}	
	slider.removeChild(image);
	imgCounter++;
	image.src = '../CSS/Images/' + imgCounter + '.png';
    image.className = 'inSliderImg';
    slider.appendChild(image);
}






// 