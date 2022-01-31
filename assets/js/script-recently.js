// collection img
function onResizeScreen() {
  if (document.body.offsetWidth <= 900) {
    let collectionWidth = document.body.offsetWidth - 56;
    let collectionHeight = (document.body.offsetWidth / 100) * 64;
    document.documentElement.style.setProperty(
      "--collection-width",
      `${collectionWidth}px`
    );

    document.documentElement.style.setProperty(
      "--collection-height",
      `${collectionHeight}px`
    );
  } else {
    document.documentElement.style.setProperty("--collection-width", `836px`);

    document.documentElement.style.setProperty("--collection-height", `536px`);
  }
}
onResizeScreen();
window.onresize = function (e) {
  onResizeScreen();
};
const collectionImg = [
  {
    img: "img-collection-1.jpg",
    descriptionLong: " Man standing on the middle of the road in the morning",
    descriptionShort: "Landscapes",
  },
  {
    img: "img-collection-2.jpg",
    descriptionLong: " Man standing on the middle of the road in the morning",
    descriptionShort: "Landscapes",
  },
  {
    img: "img-collection-3.jpg",
    descriptionLong: " Man standing on the middle of the road in the morning",
    descriptionShort: "Landscapes",
  },
  {
    img: "img-collection-4.jpg",
    descriptionLong: " Man standing on the middle of the road in the morning",
    descriptionShort: "Landscapes",
  },
  {
    img: "img-collection-5.jpg",
    descriptionLong: " Man standing on the middle of the road in the morning",
    descriptionShort: "Landscapes",
  },
  {
    img: "img-collection-6.jpg",
    descriptionLong: " Man standing on the middle of the road in the morning",
    descriptionShort: "Landscapes",
  },
  {
    img: "img-collection-7.jpg",
    descriptionLong: " Man standing on the middle of the road in the morning",
    descriptionShort: "Landscapes",
  },
  {
    img: "img-collection-8.jpg",
    descriptionLong: " Man standing on the middle of the road in the morning",
    descriptionShort: "Landscapes",
  },
  {
    img: "img-collection-9.jpg",
    descriptionLong: " Man standing on the middle of the road in the morning",
    descriptionShort: "Landscapes",
  },
];
function stringSplit(string, separator) {
  let newArray = "";
  newArray = string.split(`${separator}`);
  return newArray[newArray.length - 1];
}
// -----------------------------
const listImgItem = document.querySelectorAll(".content-img__col");
// -----------------------------
const modal = document.querySelector(".modal-img");
const modalLoading = document.querySelector(".loading");
const modalImg = document.querySelector(".modal-img__img-bark");
const modalFade = document.querySelector(".modal-img__prev-next");
const modalOverlay = document.querySelector(".modal-img__overlay");
//--------------------------
const iconPrev = document.querySelector(".modal-img__prev");
const iconNext = document.querySelector(".modal-img__next");
const imageCollection = document.querySelector(".modal-img__img");
const imageCollectionFade = document.querySelector(".modal-img__img-fade");

//------------------------
listImgItem.forEach((item, index) => {
  item.onclick = function () {
    // display collection
    modal.classList.add("show");
    modalLoading.classList.add("show");
    setTimeout(() => {
      modalLoading.classList.remove("show");
      modalImg.classList.add("show");
      modalFade.classList.add("show");
    }, 500);
    modalOverlay.onclick = function () {
      modalImg.classList.remove("show");
      modalFade.classList.remove("show");
      setTimeout(() => {
        modal.classList.remove("show");
      }, 200);
    };
    const chooseImg = stringSplit(
      stringSplit(item.firstElementChild.src, "/"),
      "-"
    );

    collectionImg.forEach((itemCollection, index) => {
      const collectionImgSrc = stringSplit(itemCollection.img, "-").split(".");

      if (chooseImg.split(".")[0] === collectionImgSrc[0]) {
        imageCollection.firstElementChild.src = `/assets/img/${itemCollection.img}`;
      }
    });
  };
});

function onPrevNext(string) {
  let newIndex = 0;
  collectionImg.forEach((img, index) => {
    const chooseImg = stringSplit(
      stringSplit(imageCollection.firstElementChild.src, "/"),
      "-"
    );
    const collectionImgSrc = stringSplit(img.img, "-").split(".");

    switch (string) {
      case "next":
        if (chooseImg.split(".")[0] === collectionImgSrc[0]) {
          index += 1;

          if (index > collectionImg.length - 1) {
            newIndex = 0;
          } else {
            newIndex = index;
          }
        }
        break;
      case "prev":
        if (chooseImg.split(".")[0] === collectionImgSrc[0]) {
          index -= 1;

          if (index === -1) {
            newIndex = collectionImg.length - 1;
          } else {
            newIndex = index;
          }
        }
        break;
    }
  });

  imageCollectionFade.classList.add("show");
  setTimeout(() => {
    imageCollection.firstElementChild.src = `/assets/img/${collectionImg[newIndex].img}`;
    imageCollectionFade.classList.remove("show");
  }, 30);
}
iconPrev.onclick = function () {
  onPrevNext("prev");
};
iconNext.onclick = function () {
  onPrevNext("next");
};
