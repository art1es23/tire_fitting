"use sctrict";

const scrollBtn = {

    scrollUp: document.querySelector(".scroll-up"),

    init: function () {
        this.scroll();
        this.onClick();
    },

    scroll: function () {
        const sliderHeight = document.querySelector(".slider").clientHeight;

        const scrollTop = () => {
            if ((window.pageYOffset * 1.5) >= sliderHeight) {
                this.scrollUp.classList.add('scroll-up--hidden');
            } else {
                this.scrollUp.classList.remove('scroll-up--hidden');
            }
        };

        window.addEventListener('scroll', scrollTop);
    },

    onClick: function () {

        const scrollToUp = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
        this.scrollUp.addEventListener('click', scrollToUp);
    }

};

const header = {
    header: document.querySelector('.header'),
    headerHeight: document.querySelector('.header').clientHeight,
    menuToggle: document.querySelector('.menu'),
    menuWrapper: document.querySelector('.navigation'),
    menuNavigation: document.querySelector('.navigation--wrapper'),

    init: function () {
        this.scroll();
        this.menuToggleMobile();
    },

    scroll: function () {
        const headerFixed = () => {
            if (window.pageYOffset >= this.headerHeight) {
                this.header.classList.add('header--transparent');
            } else {
                this.header.classList.remove('header--transparent');
            }
        };

        window.addEventListener('scroll', headerFixed);
    },

    menuToggleMobile: function () {

        const toggle = (event) => {
            console.log(event);

            this.menuToggle.classList.toggle('menu--toggle');
            this.header.classList.toggle('header--mobile');
            this.menuWrapper.classList.toggle('navigation--active');
            this.menuNavigation.classList.toggle('navigation--wrapper--active');

        };

        this.menuToggle.addEventListener('click', toggle);
    }

};

const counter = {
    time: 5000,
    numberClient: 999,
    numberWorkHours: 1200,
    numberProjects: 300,
    stepClient: 9,
    stepWorkHours: 10,
    stepProjects: 3,

    init: function () {
        this.outNum(this.numberClient, this.stepClient, 1);
        this.outNum(this.numberWorkHours, this.stepWorkHours, 2);
        this.outNum(this.numberProjects, this.stepProjects, 3);
    },

    outNum: function (num, step, item) {
        let elem = document.querySelector('.number' + item);
        let n = 0;
        let t = Math.round(this.time / (num / step));

        let interval = setInterval(() => {
            n = n + step;
            if (n == num) {
                clearInterval(interval);
            }
            elem.innerHTML = n;

        }, t);
    },
};

counter.init();
scrollBtn.init();
header.init();