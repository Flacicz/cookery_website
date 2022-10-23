const breads = document.querySelectorAll('.category')[0]
const breakfasts = document.querySelectorAll('.category')[1]
const lunchesAndDinners = document.querySelectorAll('.category')[2]

const breadsMenu = document.querySelector('.breads')
const breakfastsMenu = document.querySelector('.breakfasts')
const lunchesAndDinnersMenu = document.querySelector('.lunches_and_dinners')

const accordion = document.querySelectorAll('.img')
const panel = document.querySelectorAll('.accordion')

breads.addEventListener('click', () => {
    breads.dataset.active = true
    breadsMenu.style.display = "block"

    breakfasts.dataset.active = false
    breakfastsMenu.style.display = "none"

    lunchesAndDinners.dataset.active = false
    lunchesAndDinnersMenu.style.display = "none"
})

breakfasts.addEventListener('click', () => {
    breads.dataset.active = false
    breadsMenu.style.display = "none"

    breakfasts.dataset.active = true
    breakfastsMenu.style.display = "block"

    lunchesAndDinners.dataset.active = false
    lunchesAndDinnersMenu.style.display = "none"
})

lunchesAndDinners.addEventListener('click', () => {
    breads.dataset.active = false
    breadsMenu.style.display = "none"

    breakfasts.dataset.active = false
    breakfastsMenu.style.display = "none"

    lunchesAndDinners.dataset.active = true
    lunchesAndDinnersMenu.style.display = "block"
})


for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => {

        if (panel[i].style.maxHeight) {
            panel[i].style.maxHeight = null
        } else {
            panel[i].style.maxHeight = panel[i].scrollHeight + "px";
        }
    })
}

// slider


let sliderPosition = 0; // начальная позиция дорожки
const sliderContainer = document.querySelector('.slider_container');
const sliderTrack = document.querySelector('.about_us_images');
const sliderItem = document.querySelector('.slider_image');
const sliderItemWidth = sliderItem.clientWidth;
const sliderContainerWidth = sliderContainer.clientWidth;
// ширина дорожки определяется как разница между шириной всех картинок и шириной контейнера
// разница нужна для того, чтобы прокрутка не проводилась дальше последнего фото
const sliderTrackWidth = sliderItem.length * sliderItemWidth - sliderContainerWidth;
const sliderButtonPrev = document.querySelector('.arrow-left');
const sliderButtonNext = document.querySelector('.arrow-right');

sliderButtonPrev.addEventListener('click', function () {
    sliderPosition += sliderItemWidth; // увеличиваем отступ при нажатии назад
    // поскольку отступ будет всегда отрицательный, нужно сравнивать с нулем, 
    // чтобы исключить пустые прокрутки
    if (sliderPosition > 0) {
        sliderPosition = 0;
    }
    sliderTrack.style.transform = `translateX(${sliderPosition}px`
    sliderButtons();
});
sliderButtonNext.addEventListener('click', function () {
    sliderPosition -= sliderItemWidth;
    // так как отступы отрицательные, нужно сравнить с отрицательной длинной дорожки, 
    // чтобы исключить пустые прокрутки
    if (sliderPosition < -sliderTrackWidth) {
        sliderPosition = -sliderTrackWidth;
    }
    sliderTrack.style.transform = `translateX(${sliderPosition}px`
    sliderButtons();
});
// скрываем кнопки prev/next, когда нельзя больше крутить
const sliderButtons = () => {
    if (sliderPosition === 0) {
        sliderButtonPrev.style.display = 'none';
    } else {
        sliderButtonPrev.style.display = 'block';
    }
    if (sliderPosition < -sliderItemWidth) {
        sliderButtonNext.style.display = 'none';
    } else {
        sliderButtonNext.style.display = 'block';
    }
};
sliderButtons();
