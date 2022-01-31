// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// // nav-toggler
// let checkIconToggle = true;
// const eleIconToggle = $(".nav__toggler");
// const eleNavLinkItem = $(".nav-link__item");
// const eleMobileNavLink = $(".nav-link");
// eleIconToggle.onclick = function () {
//   if (checkIconToggle) {
//     eleMobileNavLink.classList.add("active");
//     checkIconToggle = false;

//     $(".nav-link.active").style.height = eleNavLinkItem.offsetHeight * 5 + "px";
//   } else {
//     $(".nav-link.active").style.height = 0;
//     eleMobileNavLink.classList.remove("active");
//     checkIconToggle = true;
//   }
// };
// const backgroundColor = `linear-gradient(
//             to right,
//             rgba(0, 0, 0, 0.3) 0%,
//             rgba(0, 0, 0, 0.3) 100%
//           )`;
// const bannerDescList = [
//   {
//     descriptionLarge: "SNOW WHITE MOUNTAIN OF EAST CHINA.",
//     descriptionSmall: "SNOW WHITE MOUNTAIN OF EAST CHINA.",
//     descriptionHref: "#",
//   },

//   {
//     descriptionLarge: "REMAININGS OF OLD BOAT IN THE BEACH OF BALI.",
//     descriptionSmall: "REMAININGS OF OLD BOAT IN THE BEACH OF BALI.",
//     descriptionHref: "#",
//   },

//   {
//     descriptionLarge: "BEAUTIFUL SUNSETTING IN THE MOUNTAINS.",
//     descriptionSmall: "BEAUTIFUL SUNSETTING IN THE MOUNTAINS.",
//     descriptionHref: "#",
//   },

//   {
//     descriptionLarge: "WOMAN WALKING IN THE GREEN FIELDS.",
//     descriptionSmall: "WOMAN WALKING IN THE GREEN FIELDS.",
//     descriptionHref: "#",
//   },
// ];

// function stringSplitBanner(string) {
//   console.log(string);
//   const arrayString = string.split("/");
//   return arrayString[arrayString.length - 1];
// }
// let checkChooseBanner = true;
// let currentIndex;

// const listBanner = $$(".choose-banner__img");

// listBanner.forEach((item, index) => {
//   item.onclick = function () {
//     const descItem = bannerDescList[index];
//     if (checkChooseBanner) {
//       $(".choose-banner__img.active").classList.remove("active");
//       item.classList.add("active");

//       checkChooseBanner = false;
//       const BannerTime = setTimeout(() => {
//         checkChooseBanner = true;
//         clearTimeout(BannerTime);
//       }, 600);

//       listBanner.forEach((itemInto, indexInto) => {
//         if (
//           stringSplitBanner(itemInto.firstElementChild.src) ===
//           stringSplitBanner(
//             $(".banner__item-center").style.backgroundImage
//           ).split('"')[0]
//         ) {
//           currentIndex = indexInto;
//         }
//       });

//       // Trường hợp 1: Ảnh chọn vào là ảnh hiện tại.
//       if (index === currentIndex) {
//         checkChooseBanner = true;
//         clearTimeout(BannerTime);
//         return;
//       }

//       if (currentIndex > index) {
//         // chạy qua bên phải.
//         const bannerDescriptionRight = $(
//           ".banner__item-right"
//         ).firstElementChild;
//         bannerDescriptionRight.classList.remove("active");
//         const bannerDescriptionLeft = $(".banner__item-left").firstElementChild;

//         bannerDescriptionLeft.classList.add("active");
//         const convertBannerDescriptionLeft = Array.from(
//           bannerDescriptionLeft.children
//         );

//         convertBannerDescriptionLeft[0].innerText = descItem.descriptionLarge;
//         convertBannerDescriptionLeft[1].innerText = descItem.descriptionSmall;

//         $(".banner__item-right").style.backgroundImage = "";

//         $(
//           ".banner__item-left"
//         ).style.backgroundImage = `${backgroundColor},url(./assets/img/${stringSplitBanner(
//           item.firstElementChild.src
//         )})`;

//         $(".banner__item-right").classList.add("banner__item--left");
//         $(".banner__item-center").classList.add("banner__item--right");
//         $(".banner__item-left").classList.add("banner__item--center");

//         $(".banner__item-right.banner__item--left").classList.add(
//           "banner__item-left"
//         );
//         $(
//           ".banner__item-right.banner__item--left.banner__item-left"
//         ).classList.remove("banner__item-right", "banner__item--left");

//         $(".banner__item-center.banner__item--right").classList.add(
//           "banner__item-right"
//         );
//         $(
//           ".banner__item-center.banner__item--right.banner__item-right"
//         ).classList.remove("banner__item-center", "banner__item--right");

//         $(".banner__item-left.banner__item--center").classList.add(
//           "banner__item-center"
//         );
//         $(
//           ".banner__item-left.banner__item--center.banner__item-center"
//         ).classList.remove("banner__item-left", "banner__item--center");
//       } else {
//         const bannerDescriptionLeft = $(".banner__item-left").firstElementChild;
//         bannerDescriptionLeft.classList.remove("active");

//         const bannerDescriptionRight = $(
//           ".banner__item-right"
//         ).firstElementChild;

//         bannerDescriptionRight.classList.add("active");
//         const convertBannerDescriptionRight = Array.from(
//           bannerDescriptionRight.children
//         );

//         convertBannerDescriptionRight[0].innerText = descItem.descriptionLarge;
//         convertBannerDescriptionRight[1].innerText = descItem.descriptionSmall;

//         $(".banner__item-left").style.backgroundImage = "";

//         $(
//           ".banner__item-right"
//         ).style.backgroundImage = `${backgroundColor},url(./assets/img/${stringSplitBanner(
//           item.firstElementChild.src
//         )})`;

//         $(".banner__item-left").classList.add("banner__item--right");
//         $(".banner__item-center").classList.add("banner__item--left");
//         $(".banner__item-right").classList.add("banner__item--center");

//         $(".banner__item-left.banner__item--right").classList.add(
//           "banner__item-right"
//         );

//         $(
//           ".banner__item-left.banner__item--right.banner__item-right"
//         ).classList.remove("banner__item-left", "banner__item--right");

//         $(".banner__item-center.banner__item--left").classList.add(
//           "banner__item-left"
//         );
//         $(
//           ".banner__item-center.banner__item--left.banner__item-left"
//         ).classList.remove("banner__item-center", "banner__item--left");

//         $(".banner__item-right.banner__item--center").classList.add(
//           "banner__item-center"
//         );
//         $(
//           ".banner__item-right.banner__item--center.banner__item-center"
//         ).classList.remove("banner__item-right", "banner__item--center");
//       }
//     }
//   };
// });

// collection img
// function onResizeScreen() {
//   if (document.body.offsetWidth <= 900) {
//     let collectionWidth = document.body.offsetWidth - 56;
//     let collectionHeight = (document.body.offsetWidth / 100) * 64;
//     document.documentElement.style.setProperty(
//       "--collection-width",
//       `${collectionWidth}px`
//     );

//     document.documentElement.style.setProperty(
//       "--collection-height",
//       `${collectionHeight}px`
//     );
//   } else {
//     document.documentElement.style.setProperty("--collection-width", `836px`);

//     document.documentElement.style.setProperty("--collection-height", `536px`);
//   }
// }
// onResizeScreen();
// window.onresize = function (e) {
//   onResizeScreen();
// };
// const collectionImg = [
//   {
//     img: "img-collection-1.jpg",
//     descriptionLong: " Man standing on the middle of the road in the morning",
//     descriptionShort: "Landscapes",
//   },
//   {
//     img: "img-collection-2.jpg",
//     descriptionLong: " Man standing on the middle of the road in the morning",
//     descriptionShort: "Landscapes",
//   },
//   {
//     img: "img-collection-3.jpg",
//     descriptionLong: " Man standing on the middle of the road in the morning",
//     descriptionShort: "Landscapes",
//   },
//   {
//     img: "img-collection-4.jpg",
//     descriptionLong: " Man standing on the middle of the road in the morning",
//     descriptionShort: "Landscapes",
//   },
//   {
//     img: "img-collection-5.jpg",
//     descriptionLong: " Man standing on the middle of the road in the morning",
//     descriptionShort: "Landscapes",
//   },
//   {
//     img: "img-collection-6.jpg",
//     descriptionLong: " Man standing on the middle of the road in the morning",
//     descriptionShort: "Landscapes",
//   },
//   {
//     img: "img-collection-7.jpg",
//     descriptionLong: " Man standing on the middle of the road in the morning",
//     descriptionShort: "Landscapes",
//   },
//   {
//     img: "img-collection-8.jpg",
//     descriptionLong: " Man standing on the middle of the road in the morning",
//     descriptionShort: "Landscapes",
//   },
//   {
//     img: "img-collection-9.jpg",
//     descriptionLong: " Man standing on the middle of the road in the morning",
//     descriptionShort: "Landscapes",
//   },
// ];
// function stringSplit(string, separator) {
//   let newArray = "";
//   newArray = string.split(`${separator}`);
//   return newArray[newArray.length - 1];
// }
// // -----------------------------
// const listImgItem = document.querySelectorAll(".content-img__col");
// // -----------------------------
// const modal = document.querySelector(".modal-img");
// const modalLoading = document.querySelector(".loading");
// const modalImg = document.querySelector(".modal-img__img-bark");
// const modalFade = document.querySelector(".modal-img__prev-next");
// const modalOverlay = document.querySelector(".modal-img__overlay");
// //--------------------------
// const iconPrev = document.querySelector(".modal-img__prev");
// const iconNext = document.querySelector(".modal-img__next");
// const imageCollection = document.querySelector(".modal-img__img");
// const imageCollectionFade = document.querySelector(".modal-img__img-fade");

// //------------------------
// listImgItem.forEach((item, index) => {
//   item.onclick = function () {
//     // display collection
//     modal.classList.add("show");
//     modalLoading.classList.add("show");
//     setTimeout(() => {
//       modalLoading.classList.remove("show");
//       modalImg.classList.add("show");
//       modalFade.classList.add("show");
//     }, 500);
//     modalOverlay.onclick = function () {
//       modalImg.classList.remove("show");
//       modalFade.classList.remove("show");
//       setTimeout(() => {
//         modal.classList.remove("show");
//       }, 200);
//     };
//     const chooseImg = stringSplit(
//       stringSplit(item.firstElementChild.src, "/"),
//       "-"
//     );

//     collectionImg.forEach((itemCollection, index) => {
//       const collectionImgSrc = stringSplit(itemCollection.img, "-").split(".");

//       if (chooseImg.split(".")[0] === collectionImgSrc[0]) {
//         imageCollection.firstElementChild.src = `./assets/img/${itemCollection.img}`;
//       }
//     });
//   };
// });

// function onPrevNext(string) {
//   let newIndex = 0;
//   collectionImg.forEach((img, index) => {
//     const chooseImg = stringSplit(
//       stringSplit(imageCollection.firstElementChild.src, "/"),
//       "-"
//     );
//     const collectionImgSrc = stringSplit(img.img, "-").split(".");

//     switch (string) {
//       case "next":
//         if (chooseImg.split(".")[0] === collectionImgSrc[0]) {
//           index += 1;

//           if (index > collectionImg.length - 1) {
//             newIndex = 0;
//           } else {
//             newIndex = index;
//           }
//         }
//         break;
//       case "prev":
//         if (chooseImg.split(".")[0] === collectionImgSrc[0]) {
//           index -= 1;

//           if (index === -1) {
//             newIndex = collectionImg.length - 1;
//           } else {
//             newIndex = index;
//           }
//         }
//         break;
//     }
//   });

//   imageCollectionFade.classList.add("show");
//   setTimeout(() => {
//     imageCollection.firstElementChild.src = `./assets/img/${collectionImg[newIndex].img}`;
//     imageCollectionFade.classList.remove("show");
//   }, 30);
// }
// iconPrev.onclick = function () {
//   onPrevNext("prev");
// };
// iconNext.onclick = function () {
//   onPrevNext("next");
// };
// /// Top - page
// const btnTopPage = $(".top-page");
// btnTopPage.onclick = function () {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// };

// document.onscroll = function () {
//   console.log(window.scrollY);
//   if (window.scrollY === 0) {
//     btnTopPage.classList.add("hide");
//   } else {
//     btnTopPage.classList.remove("hide");
//   }
// };

// const listCommentContent = $$(".comment-bottom__comment-content");
// const newListCommentContent = [];
// const newListCommentContentHasReadMore = [];
// const widthCommentContent = listCommentContent[0].offsetWidth;
// const readMore = $(".script-read-more");
// let displayComment;
// let newIndex = 0;
// let length = 0;
// let i = 0;
// let newArray;
// listCommentContent.forEach((comment, index) => {
//   if (comment.scrollHeight > 150) {
//     let object = {
//       index: index,
//       comment: comment.innerText,
//     };
//     newListCommentContent.push(object);

//     length = 0;
//     newIndex = 0;
//     i = 0;
//     let text = comment.innerText.split(" ");

//     while (i <= 4) {
//       text.some((item, index) => {
//         readMore.innerText = item;

//         length += readMore.getClientRects()[0].width;
//         length += 4.2;
//         if (length >= widthCommentContent) {
//           newIndex = index;
//           return true;
//         }
//       });
//       newArray = text.filter((item, index) => index >= newIndex);
//       text = newArray;

//       length = 0;
//       newIndex = 0;
//       i++;
//     }

//     displayComment = comment.innerText.split(" ");

//     text.forEach(() => {
//       displayComment.pop();
//     });

//     comment.innerText = displayComment.join(" ");

//     let getComment;
//     let getLength = 0;

//     getComment = comment.innerText.split(" ");

//     for (let i = getComment.length - 1; i >= 0; i--) {
//       readMore.innerText = getComment[i];

//       getLength += readMore.getClientRects()[0].width;

//       getComment.pop();
//       if (getLength > 96) {
//         break;
//       }
//     }

//     comment.innerText = getComment.join(" ");
//     comment.innerHTML =
//       comment.innerHTML +
//       " " +
//       `<span class="comment-read-more">...read more.</span>`;
//     newListCommentContentHasReadMore.push(comment.innerHTML);
//     console.log(newListCommentContentHasReadMore);

//     const commentReadMore = $$(".comment-read-more");
//     commentReadMore.forEach((item, index) => {
//       item.onclick = function () {
//         listCommentContent[index].innerText =
//           newListCommentContent[index].comment;
//         listCommentContent[index].classList.add("show");
//       };
//     });
//   }
// });
