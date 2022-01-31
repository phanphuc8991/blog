/// banner

const backgroundColor = `linear-gradient(
  to right,
  rgba(0, 0, 0, 0.3) 0%,
  rgba(0, 0, 0, 0.3) 100%
)`;
const bannerDescList = [
  {
    descriptionLarge: "SNOW WHITE MOUNTAIN OF EAST CHINA.",
    descriptionSmall: "SNOW WHITE MOUNTAIN OF EAST CHINA.",
    descriptionHref: "#",
  },

  {
    descriptionLarge: "REMAININGS OF OLD BOAT IN THE BEACH OF BALI.",
    descriptionSmall: "REMAININGS OF OLD BOAT IN THE BEACH OF BALI.",
    descriptionHref: "#",
  },

  {
    descriptionLarge: "BEAUTIFUL SUNSETTING IN THE MOUNTAINS.",
    descriptionSmall: "BEAUTIFUL SUNSETTING IN THE MOUNTAINS.",
    descriptionHref: "#",
  },

  {
    descriptionLarge: "WOMAN WALKING IN THE GREEN FIELDS.",
    descriptionSmall: "WOMAN WALKING IN THE GREEN FIELDS.",
    descriptionHref: "#",
  },
];

function stringSplitBanner(string) {
  console.log(string);
  const arrayString = string.split("/");
  return arrayString[arrayString.length - 1];
}
let checkChooseBanner = true;
let currentIndex;

const listBanner = $$(".choose-banner__img");

listBanner.forEach((item, index) => {
  item.onclick = function () {
    const descItem = bannerDescList[index];
    if (checkChooseBanner) {
      $(".choose-banner__img.active").classList.remove("active");
      item.classList.add("active");

      checkChooseBanner = false;
      const BannerTime = setTimeout(() => {
        checkChooseBanner = true;
        clearTimeout(BannerTime);
      }, 600);

      listBanner.forEach((itemInto, indexInto) => {
        if (
          stringSplitBanner(itemInto.firstElementChild.src) ===
          stringSplitBanner(
            $(".banner__item-center").style.backgroundImage
          ).split('"')[0]
        ) {
          currentIndex = indexInto;
        }
      });

      // Trường hợp 1: Ảnh chọn vào là ảnh hiện tại.
      if (index === currentIndex) {
        checkChooseBanner = true;
        clearTimeout(BannerTime);
        return;
      }

      if (currentIndex > index) {
        // chạy qua bên phải.
        const bannerDescriptionRight = $(
          ".banner__item-right"
        ).firstElementChild;
        bannerDescriptionRight.classList.remove("active");
        const bannerDescriptionLeft = $(".banner__item-left").firstElementChild;

        bannerDescriptionLeft.classList.add("active");
        const convertBannerDescriptionLeft = Array.from(
          bannerDescriptionLeft.children
        );

        convertBannerDescriptionLeft[0].innerText = descItem.descriptionLarge;
        convertBannerDescriptionLeft[1].innerText = descItem.descriptionSmall;

        $(".banner__item-right").style.backgroundImage = "";

        $(
          ".banner__item-left"
        ).style.backgroundImage = `${backgroundColor},url(./assets/img/${stringSplitBanner(
          item.firstElementChild.src
        )})`;

        $(".banner__item-right").classList.add("banner__item--left");
        $(".banner__item-center").classList.add("banner__item--right");
        $(".banner__item-left").classList.add("banner__item--center");

        $(".banner__item-right.banner__item--left").classList.add(
          "banner__item-left"
        );
        $(
          ".banner__item-right.banner__item--left.banner__item-left"
        ).classList.remove("banner__item-right", "banner__item--left");

        $(".banner__item-center.banner__item--right").classList.add(
          "banner__item-right"
        );
        $(
          ".banner__item-center.banner__item--right.banner__item-right"
        ).classList.remove("banner__item-center", "banner__item--right");

        $(".banner__item-left.banner__item--center").classList.add(
          "banner__item-center"
        );
        $(
          ".banner__item-left.banner__item--center.banner__item-center"
        ).classList.remove("banner__item-left", "banner__item--center");
      } else {
        const bannerDescriptionLeft = $(".banner__item-left").firstElementChild;
        bannerDescriptionLeft.classList.remove("active");

        const bannerDescriptionRight = $(
          ".banner__item-right"
        ).firstElementChild;

        bannerDescriptionRight.classList.add("active");
        const convertBannerDescriptionRight = Array.from(
          bannerDescriptionRight.children
        );

        convertBannerDescriptionRight[0].innerText = descItem.descriptionLarge;
        convertBannerDescriptionRight[1].innerText = descItem.descriptionSmall;

        $(".banner__item-left").style.backgroundImage = "";

        $(
          ".banner__item-right"
        ).style.backgroundImage = `${backgroundColor},url(./assets/img/${stringSplitBanner(
          item.firstElementChild.src
        )})`;

        $(".banner__item-left").classList.add("banner__item--right");
        $(".banner__item-center").classList.add("banner__item--left");
        $(".banner__item-right").classList.add("banner__item--center");

        $(".banner__item-left.banner__item--right").classList.add(
          "banner__item-right"
        );

        $(
          ".banner__item-left.banner__item--right.banner__item-right"
        ).classList.remove("banner__item-left", "banner__item--right");

        $(".banner__item-center.banner__item--left").classList.add(
          "banner__item-left"
        );
        $(
          ".banner__item-center.banner__item--left.banner__item-left"
        ).classList.remove("banner__item-center", "banner__item--left");

        $(".banner__item-right.banner__item--center").classList.add(
          "banner__item-center"
        );
        $(
          ".banner__item-right.banner__item--center.banner__item-center"
        ).classList.remove("banner__item-right", "banner__item--center");
      }
    }
  };
});
