function Slider() {
    this.imageUrls = [];
    this.prevButton = null; 
    this.nextButton = null; 
    this.imageElement = null;
    this.currentIndex = 0;
    this.start = function (elId) {
        var el = document.getElementById(elId); 
        this.prevButton = el.querySelector('.prev');
        this.nextButton = el.querySelector('.next');
        this.imageElement = el.querySelector('.image');
        this.imageUrls.push('https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy');
        this.imageUrls.push('https://cars.usnews.com/pics/size/390x290/static/images/Auto/izmo/i159614411/2021_chevrolet_corvette_stingray_angularfront.jpg');
        this.imageUrls.push('https://www.goodcarbadcar.net/wp-content/uploads/2019/07/2019-audi-r8-onlocation.jpg');
        this.imageUrls.push('https://www.quattrodaily.com/wp-content/uploads/2019/07/audi-r8-lms-gt2-1-of-31.jpg');
        this.prevButton.disabled = true;
        this.imageElement.src = this.imageUrls[this.currentIndex];
        var that = this;
        this.prevButton.addEventListener('click', function(e){that.showPrev(e)});
        this.nextButton.addEventListener('click', function(e){that.showNext(e)});
    };
    this.showPrev = function () {
        this.nextButton.disabled = false;
        this.currentIndex--;
        this.imageElement.src = this.imageUrls[this.currentIndex];
        if (this.currentIndex === 0) {
            this.prevButton.disabled = true;
        }
    };
    this.showNext = function () {
        this.prevButton.disabled = false;
        this.currentIndex++;
        this.imageElement.src = this.imageUrls[this.currentIndex];
        if (this.currentIndex === this.imageUrls.length - 1) {
            this.nextButton.disabled = true;
        }
    };
}

