var models = [
    {
        name: 'Bmw 418d',
        image: 'img/a1.jpg',
        link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name: 'Pejo 206',
        image: 'img/a2.jpg',
        link: 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name: 'Bmw 418d',
        image: 'img/a3.jpg',
        link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
];

var index = 0;
var interval;
var slaytCount = models.length;


var settings = {
    duration: '2000',
    random: false,

}
init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){
    index--;
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function(){
    index++;
    showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        init(settings);
    })
});

function init(settings) {

    var prev;
    interval = setInterval(function () {

        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev)
            prev = index;

        } else {
            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);
    }, settings.duration)

}

function showSlide(i) {
    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}
