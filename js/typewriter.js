const typeWriter = function (txtElement, words, wait = 2000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

//Type Method

typeWriter.prototype.type = function () {
  //console.log('Hello World');

  // Current Word Index
  // Get the words index(there are 3 separate entities here as written in data-words)
  const current = this.wordIndex % this.words.length;
  //console.log(current);
  // Get full text of current word
  const fullTxt = this.words[current];

  //console.log(fullTxt);

  //Check if word is deleting
  if (this.isDeleting) {
    //remove characters
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // add characters
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert text in element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Custom Type Speed for words
  let typeSpeed = 100;
  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end of word
    typeSpeed = this.wait;
    // Set isDeleting to true to delete txt
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    // Make isDeleting false
    this.isDeleting = false;
    // move to next word
    this.wordIndex++;
    // Pause to start next word
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};

//Initialize on DOM Load
document.addEventListener("DOMContentLoaded", init);

//Initialize App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Initialize Typewriter
  new typeWriter(txtElement, words, wait);
}
