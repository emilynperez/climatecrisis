let slideIndex = 1; //tracks current slide 
showSlides(slideIndex); //invokes the showSlides function and passes slideIndex which makes showSlide display first slide since n=1

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Slide show navigation
function showSlides(n) {   //takes in n(slide number)
  let i;
  let slides = document.getElementsByClassName("mySlides"); //holds all elements of mySlides class
  let dots = document.getElementsByClassName("dot");  // has all elements of class dot 
  if (n > slides.length) {slideIndex = 1} //if n exceeds number of slides goes back to first slide
  if (n < 1) {slideIndex = slides.length} // if n is less than 1 goes to last slide
  for (i = 0; i < slides.length; i++) { //loops through all slides and hides them by setting display style to none
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { //removes active class from dots so no dots are highlighted
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; //displays current slide by setting display to block
  dots[slideIndex-1].className += " active"; //adds active class to current dotshowing which slide is displayed
} 