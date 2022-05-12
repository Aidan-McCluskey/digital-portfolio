function validate() {
  let mail = document.getElementById(`email`).value
  let name = document.getElementById(`name`).value
      message = document.getElementById(`content`).value,
      regx = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
      checkValid = document.getElementById(`checkValid`),
      checkInvalid = document.getElementById(`checkInvalid`),
      checkTime = 2500;

  event.preventDefault();

  if (regx.test(mail) && name !== null && message !== null) {
    checkValid.className = `show`;
    setTimeout(() => {
      checkValid.className = checkValid.className.replace("show", "");
    }, checkTime);
  } else {
    checkInvalid.className = `show`;
    setTimeout(() => {
      checkInvalid.className = checkInvalid.className.replace("show", "");
    }, checkTime);
  }

  if (name == null || message == null) {
    alert(`not filled`);
  }
}

const slides = document.getElementsByClassName(`slide`);
let slideIndex = 1;

const slide = {
  show: (n) => {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  },

  advance: () => {
    slide.show(slideIndex += 1);
  },

  current: (n) => {
    slide.show(slideIndex = n);
  }
}

slide.show(slideIndex);