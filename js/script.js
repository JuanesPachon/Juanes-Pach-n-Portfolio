const textElement = document.querySelector('.animated-text');
const textElement2 = document.querySelector('.animated-text-2');
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

function typeWriter2(text, index, callback) {
  if (index < text.length) {
    textElement2.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => typeWriter2(text, index, callback), 50);
  } else {
    setTimeout(callback, 2200);
  }
}

function deleteText2() {
  const currentText2 = textElement2.innerHTML;
  if (currentText2.length > 0) {
    textElement2.innerHTML = currentText2.slice(0, -1);
    setTimeout(deleteText2, 50);
  } else {
    currentIndex = (currentIndex + 1) % textArray.length;
    setTimeout(startAnimation2, 500);
  }
}

function startAnimation2() {
  const text = textArray[currentIndex];
  textElement2.innerHTML = '';
  typeWriter2(text, 0, deleteText2);
}

startAnimation2();