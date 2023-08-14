///////////////// メインビジュアルスライダー１枚目固定、2枚目以降ランダムの設定
// ランダムな画像のURLのリスト
let randomImages = [
	"../assets/img/top/munu-ph-kv-02.jpg",
	"../assets/img/top/munu-ph-kv-03.jpg",
	"../assets/img/top/munu-ph-kv-04.jpg",
	"../assets/img/top/munu-ph-kv-05.jpg",
	"../assets/img/top/munu-ph-kv-06.jpg",
	"../assets/img/top/munu-ph-kv-07.jpg",
	"../assets/img/top/munu-ph-kv-08.jpg",
	"../assets/img/top/munu-ph-kv-09.jpg"
  ];

  let currentImageIndex = 0;
  let slider = document.getElementById("slider");
  let dots = [];

  // 最初的图片
  const showFirstImage = () => {
		var firstImage = document.createElement("img"); //一樣
		firstImage.src = "../assets/img/top/munu-ph-kv-01.jpg";
		firstImage.style.opacity = 1;
		slider.appendChild(firstImage);
  }

  // 图片切换
  const switchImage = () => {
		let currentImage = slider.querySelector("img");
		currentImage.style.opacity = 0;

		let newImage = document.createElement("img");//一樣
		newImage.style.opacity = 0;

		if (currentImageIndex === 0) {
			newImage.src = "../assets/img/top/munu-ph-kv-01.jpg";
			switchActiveDot(currentImageIndex); // 最初の画像のときもdotを更新
		} else {
			let randomIndex = Math.floor(Math.random() * randomImages.length);
			newImage.src = randomImages[randomIndex];
		}


		slider.appendChild(newImage);

		setTimeout(() => {
			newImage.style.opacity = 1;
		}, 300); //1000

		setTimeout(() => {
			slider.removeChild(currentImage);
		}, 500); //500
  }

  // load之后第一个显示的固定图片
  showFirstImage();

  // 循环dot
  const sliderDot = document.querySelector(".slider-dot");
  for (let i = 0; i < randomImages.length + 1; i++) {
		const li = document.createElement("li");
		li.classList.add("dot");
		sliderDot.appendChild(li);
		dots.push(li);
  };


  dots.forEach( (dot, index) => {
		dot.addEventListener("click", () => {
			currentImageIndex = index;
			switchImage();
			switchActiveDot(currentImageIndex);
			clearInterval(autoSwitchTimer);
			startAutoSwitch();
		});
  });

	// current dot切换
  const switchActiveDot = (activeIndex) => {
		dots.forEach((dot, index) => {
			if (index === activeIndex) {
			dot.classList.add("active-dot");
			} else {
			dot.classList.remove("active-dot");
			}
		});
  };

  // 顯示第一個dot
  function firstDot(){
	dots.forEach((dot, index) => {
		if (index === currentImageIndex) {
		dot.classList.add("active-dot");
		} else {
		dot.classList.remove("active-dot");
		}
	});
  }
   firstDot();

  // 手动点击dot之后，图片切换，之后如果不点击让它自动切换图片，那么就必须从当前的current dot继续向下一个dot前进，所以这个有必要写
  let autoSwitchTimer;
  const startAutoSwitch = () => {
		autoSwitchTimer = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % (randomImages.length + 1);
			switchImage();
			switchActiveDot(currentImageIndex);
		}, 5000);
  }

  startAutoSwitch();


  ///////////////// TOPページ 事業内容・実績 / 会社情報 VIEW MOREボタンの設定
  document.addEventListener('DOMContentLoaded', function() {
	function toggleBannerList(viewMoreBtnClass, bannerListClass) {
	  var viewMoreBtn = document.querySelector(viewMoreBtnClass);
	  var bannerList = document.querySelector(bannerListClass);

	  viewMoreBtn.addEventListener('click', function() {
		bannerList.classList.add('show');
	  });

	  bannerList.addEventListener('mouseleave', function() {
		bannerList.classList.remove('show');
	  });
	}

	toggleBannerList('.view-more-btn', '.banner-list');
	toggleBannerList('.view-more-btn-2', '.banner-list-2');
  });
