// MOBILE MENU
const openMenu = document.querySelector(".nav__menu-btn");
const closeMenu = document.querySelector(".nav__close-btn");
const menu = document.querySelector(".nav__list");
openMenu.addEventListener("click", () => {
  menu.style.display = "flex";
});
closeMenu.addEventListener("click", () => {
  menu.style.display = "none";
});
// CAROUSEL
const prevBtn = document.querySelector(".navigator__arrow--left");
const nextBtn = document.querySelector(".navigator__arrow--right");
const images = Array.from(document.querySelectorAll(".section__gallery-img"));
const zIndex = { value: 1 };
const index = { value: 0 };
nextBtn.addEventListener("click", () => {
  if (index.value < images.length - 1) {
    index.value++;
    zIndex.value++;
    images[index.value].style.zIndex = zIndex.value;
    replaceText(index.value);
  }
});
prevBtn.addEventListener("click", () => {
  if (index.value > 0) {
    index.value--;
    zIndex.value++;
    images[index.value].style.zIndex = zIndex.value;
    replaceText(index.value);
  }
});
addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
      if (index.value < images.length - 1) {
        index.value++;
        zIndex.value++;
        images[index.value].style.zIndex = zIndex.value;
      }
  }
  replaceText(index.value);
});
addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      if (index.value > 0) {
        index.value--;
        zIndex.value++;
        images[index.value].style.zIndex = zIndex.value;
      }
  }
  replaceText(index.value);
});
const description = {
  descriptionOne: {
    descriptionTitle: `Discover innovative ways to decorate`,
    descriptionText: `We provide unmatched quality, comfort, and style for property
    owners across the country. Our experts combine form and function
    in bringing your vision to life. Create a room in your own style
    with our collection and make your property a reflection of you and
    what you love.`,
  },
  descriptionTwo: {
    descriptionTitle: `We are available all across the globe`,
    descriptionText: `With stores all over the world, it's easy for you to find
    furniture for your home or place of business. Locally, we’re in
    most major cities throughout the country. Find the branch nearest
    you using our store locator. Any questions? Don't hesitate to
    contact us today.`,
  },
  descriptionThree: {
    descriptionTitle: `Shop now Manufactured with the best materials`,
    descriptionText: `Our modern furniture store provide a high level of quality. Our
    company has invested in advanced technology to ensure that every
    product is made as perfect and as consistent as possible. With
    three decades of experience in this industry, we understand what
    customers want for their home and office.`,
  },
};
function replaceText(index) {
  let titleText = document.querySelector(".section__description-title");
  let descriptionText = document.querySelector(".section__description-text");
  switch (index) {
    case 0:
      titleText.innerText = description.descriptionOne.descriptionTitle;
      descriptionText.innerText = description.descriptionOne.descriptionText;
      break;
    case 1:
      titleText.innerText = description.descriptionTwo.descriptionTitle;
      descriptionText.innerText = description.descriptionTwo.descriptionText;
      break;
    case 2:
      titleText.innerText = description.descriptionThree.descriptionTitle;
      descriptionText.innerText = description.descriptionThree.descriptionText;
      break;
  }
}
