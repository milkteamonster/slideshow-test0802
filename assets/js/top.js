///////////////// メインビジュアルスライダー１枚目固定、2枚目以降ランダムの設定
	// ランダムな画像のURLのリスト
	var randomImages = [
		"../assets/img/top/munu-ph-kv-02.jpg",
		"../assets/img/top/munu-ph-kv-03.jpg",
		"../assets/img/top/munu-ph-kv-04.jpg", 
		"../assets/img/top/munu-ph-kv-05.jpg",
		"../assets/img/top/munu-ph-kv-06.jpg",
		"../assets/img/top/munu-ph-kv-07.jpg",
		"../assets/img/top/munu-ph-kv-08.jpg",
		"../assets/img/top/munu-ph-kv-09.jpg"
		];
	
		// スライダーの要素を取得
	var slider = document.getElementById("slider");
	var dotElem = document.querySelectorAll(".dot");
	dotElem.forEach(function(item){
		this.addEventListener("click", function(){
			item.setAttribute("class", "dot active-dot");
		})

	})

		// 最初の画像（01.jpg）を表示する関数
		function showFirstImage() {
			var firstImage = document.createElement("img");
			firstImage.src = "../assets/img/top/munu-ph-kv-01.jpg";
			firstImage.style.opacity = 1;
			slider.appendChild(firstImage);
		}
	
		function switchDot(){
			// var sliderDot = document.querySelector(".slider-dot");
			
			// var dot = document.querySelector(".dot");
			// console.log(dot);
			// dot.setAttribute("class", "dot active-dot");
			
			// dot.addEventListener("click", function(){
			// 	dot.setAttribute("class", "active-dot");
			// })
		}

		//dotのルール
		const sliderDot = document.querySelector(".slider-dot");
		const dot1 = document.querySelector(".dot1");
		const dot2 = document.querySelector(".dot2");
		const dot3 = document.querySelector(".dot3");
		const dot4 = document.querySelector(".dot4");
		const dot5 = document.querySelector(".dot5");
		const dot6 = document.querySelector(".dot6");
		const dot7 = document.querySelector(".dot7");
		const dot8 = document.querySelector(".dot8");
		const dot9 = document.querySelector(".dot9");
		let dotArr = [dot1, dot2, dot3, dot4, dot5, dot6, dot7, dot8, dot9]
		dotArr.forEach(function(item, index){
			item.addEventListener("click", function(){
				item.classList.add("active-dot");
				setTimeout(function () {
				 	item.classList.remove("active-dot");
				 }, 1000);
			})
		})


		// 画像を切り替える関数
		function switchImage() {
			// 現在の画像を非表示にする
			var currentImage = slider.querySelector("img");
			currentImage.style.opacity = 0;
		

			// ランダムな画像要素を作成
			var randomImageElement = document.createElement("img");
			randomImageElement.style.opacity = 0;
	
			// ランダムな画像を取得して表示
			if (randomImages.length > 0) {
				var randomIndex = Math.floor(Math.random() * randomImages.length);
				var randomImageUrl = randomImages[randomIndex];
				randomImageElement.src = randomImageUrl;
				randomImages.splice(randomIndex, 1);
			} else {
				randomImageElement.src = "../assets/img/top/munu-ph-kv-01.jpg";
				randomImages = [
				"../assets/img/top/munu-ph-kv-02.jpg",
				"../assets/img/top/munu-ph-kv-03.jpg",
				"../assets/img/top/munu-ph-kv-04.jpg", 
				"../assets/img/top/munu-ph-kv-05.jpg",
				"../assets/img/top/munu-ph-kv-06.jpg",
				"../assets/img/top/munu-ph-kv-07.jpg",
				"../assets/img/top/munu-ph-kv-08.jpg",
				"../assets/img/top/munu-ph-kv-09.jpg"
				];
			}
	
			// スライダーに追加
			slider.appendChild(randomImageElement);
	
			// フェードイン
			setTimeout(function () {
				randomImageElement.style.opacity = 1;
			}, 2000);
	
			// 現在の画像を削除
			setTimeout(function () {
				slider.removeChild(currentImage);
			}, 1000);
		}
	
		// 5秒ごとに画像を切り替えるタイマーを開始
		setInterval(function () {
			switchImage();
			switchDot();
		}, 5000);

		// ページが読み込まれた時に最初の画像を表示
	window.onload = function () {
		showFirstImage();
		switchImage();
	};


///////////////// TOPページ 事業内容・実績 / 会社情報 VIEW MOREボタンの設定
var viewMoreBtn = document.addEventListener('DOMContentLoaded', function() {
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
