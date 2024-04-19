const textElement = document.querySelector('.animated-text');
const textArray = ['Web Developer'];
let currentIndex = 0;

function typeWriter(text, index, callback) {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => typeWriter(text, index, callback), 50);
  } else {
    setTimeout(callback, 2200);
  }
}

function deleteText() {
  const currentText = textElement.innerHTML;
  if (currentText.length > 0) {
    textElement.innerHTML = currentText.slice(0, -1);
    setTimeout(deleteText, 50);
  } else {
    currentIndex = (currentIndex + 1) % textArray.length;
    setTimeout(startAnimation, 500);
  }
}

function startAnimation() {
  const text = textArray[currentIndex];
  textElement.innerHTML = '';
  typeWriter(text, 0, deleteText);
}

startAnimation();
