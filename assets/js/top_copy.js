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
	
		// スライダーの要素を取得
	let slider = document.getElementById("slider");
	// var dotElem = document.querySelectorAll(".dot");
	// dotElem.forEach(function(item){
	// 	this.addEventListener("click", function(){
	// 		item.setAttribute("class", "dot active-dot");
	// 	})

	// })

		// 最初の画像（01.jpg）を表示する関数
		function showFirstImage() {
			var firstImage = document.createElement("img");
			firstImage.src = "../assets/img/top/munu-ph-kv-01.jpg";
			firstImage.style.opacity = 1;
			slider.appendChild(firstImage);
		}

		// 画像を切り替える関数
		function switchImage() {
			// 現在の画像を非表示にする
			let currentImage = slider.querySelector("img");
			currentImage.style.opacity = 0;
		

			// ランダムな画像要素を作成
			let randomImageElement = document.createElement("img");
			randomImageElement.style.opacity = 0;
	
			// ランダムな画像を取得して表示
			if (randomImages.length > 0) {
				let randomIndex = Math.floor(Math.random() * randomImages.length);
				let randomImageUrl = randomImages[randomIndex];
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
		}, 5000);

		// ページが読み込まれた時に最初の画像を表示
	window.onload = function () {
		showFirstImage();
		switchImage();
	};

	const firstImage = '../assets/img/top/munu-ph-kv-01.jpg';
	const copiedRandomImages = [...randomImages];
	copiedRandomImages.unshift(firstImage);

	document.addEventListener("DOMContentLoaded", function () {
	//dotのルール
	const sliderDot = document.querySelector(".slider-dot");
	const imageNum = copiedRandomImages.length; //照片數量
	for (let i = 0; i < imageNum; i++) { //做出ul下的li結構
		const li = document.createElement("li");
		const dot = li.classList.add("dot");
		sliderDot.appendChild(li);
	
		// li.forEach(function(item, index){
		// 	li.addEventListener("click", function(){
		// 		li.classList.add("active-dot");
		// 	})
		// })
	}
	const dots = document.querySelectorAll(".dot");
    dots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
			switchImageByIndex(index);
			switchActiveDot(index);
        });
    });
	function switchImageByIndex(index) {
		let slider = document.getElementById("slider");
		let nowImage = slider.querySelector("img");//為了與原本的區別換成nowImage
		nowImage.style.opacity = 0;
		let newImage = document.createElement("img");//為了與原本的區別換成newImage
		newImage.style.opacity = 0;
		newImage.src = randomImages[index];
		console.log(nowImage.src);
		console.log(newImage.src);
		slider.appendChild(newImage);

		// フェードイン
		setTimeout(function () {
			newImage.style.opacity = 1;
		}, 2000);

		// 現在の画像を削除
		setTimeout(function () {
			//slider.removeChild(nowImage); //the node to be remove is not the child of this node 
			nowImage.style.opacity = 0;	
		}, 1000);	
	
	}

	function switchActiveDot(index){
		dots.forEach(function (dot, i) {
		if (i === index) {
			dot.classList.add("active-dot");
		} else {
			dot.classList.remove("active-dot");
		}
		});
	}
});




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
