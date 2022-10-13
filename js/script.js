window.onload = function () {
  let modalWrap = $(".modal-wrap");
  let modalCloseBtn = $(".modal-close-btn");
  let headerDrawer = $(".header-drawer");
  modalCloseBtn.click(function () {
    modalWrap.removeClass("modal-active");
  });
  headerDrawer.click(function () {
    modalWrap.addClass("modal-active");
  });

  let swVisual = new Swiper(".sw-visual", {
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
    },
    touchRatio: 0,
  });

  let swBestmenu = new Swiper(".sw-bestmenu", {
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    pagination: {
      el: ".bsm-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let swiper = new Swiper(".sw-introduce", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 100,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let header = $(".header");
  let gnb = $(".inner-gnb");
  // 펼쳐졌을 때의 높이 값
  let gnbMaxHeight = gnb.outerHeight();
  console.log(gnbMaxHeight);
  // 닫혔을 때의 높이 값
  let gnbMinHeight = header.outerHeight();
  console.log(gnbMinHeight);

  gnb.mouseenter(function () {
    header.css("height", gnbMaxHeight);
  });

  gnb.mouseleave(function () {
    header.css("height", gnbMinHeight);
  });
};
