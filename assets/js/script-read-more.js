const addListComment = $(".more-comment");
const readAddComment = $$(".read-more-comment");
const imgUpDownComment = $$(".icon-down-comment > img");
// Click button read - more - comment.

readAddComment.forEach((comment, index) => {
  comment.onclick = function () {
    console.log("clikc");
    if (comment.closest(".comment-bottom__comment-content.hide")) {
      comment
        .closest(".comment-bottom__comment-content.hide")
        .classList.add("show");
      comment
        .closest(".comment-bottom__comment-content.hide")
        .classList.remove("hide");
      comment.classList.add("hide");
      imgUpDownComment[index].src = "/assets/img/icon-up-comment.png";
    } else {
      comment
        .closest(".comment-bottom__comment-content.show")
        .classList.add("hide");
      comment
        .closest(".comment-bottom__comment-content.show")
        .classList.remove("show");
      comment.classList.remove("hide");
      imgUpDownComment[index].src = "/assets/img/icon-down-comment.png";
    }
  };
});

addListComment.onclick = function () {};
