function showImgBanner(imgs, index) {
    imgs.forEach(function(img) {
        img.classList.remove('img-banner-appear');
    });

    imgs[index].classList.add('img-banner-appear');
}

function changeImgBanner() {
    var imgs = document.querySelectorAll(".box-img-banner img");

    var currentIndex = 0;
    imgs[currentIndex].classList.add('img-banner-appear');
    setInterval(function(imgs, currentIndex) {     
        if (currentIndex > 10) {
            currentIndex = 0;
        }

        imgs[currentIndex].classList.remove('img-banner-appear');
        currentIndex += 1;
        
        showImgBanner(imgs, currentIndex);
    }, 3000);
}

changeImgBanner();

// function hideImgBanner() {
//     var imgs = document.querySelectorAll('.box-img-banner img');
//     imgs.forEach(function(img) {
//         img.classList.add('img-banner-appear');
//     })
// }

