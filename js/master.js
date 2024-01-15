

let img = document.querySelector('#img');
let upload = document.querySelector('.upload input');
let saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
// let sebia = document.getElementById('sebia');

let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hueRotate = document.getElementById('hue-rotate');
let dowload = document.getElementById('download');
let reset = document.getElementById('reset');
let imgBox = document.querySelector('.img-box');

function resetValue() {
img.style.filter = 'none';
saturate.value = '100';
contrast.value = '100';
brightness.value = '100';
grayscale.value = '0';
blur.value = '0';
hueRotate.value = '0';
}



(window.onload = function () {
    imgBox.style.display = 'none';
    dowload.style.display = 'none';
    reset.style.display = 'none';

})
upload.onchange = function choseImg() {
    resetValue()
     imgBox.style.display = 'block';
    dowload.style.display = 'block';
    reset.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        img.src = file.result;
    }

}

let filters = document.querySelectorAll('.filters ul li input');
filters.forEach(filter => {
    filter.addEventListener('input', function () {
        img.style.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)

        `
    })
})


dowload.onclick = function () {
    dowload.href = img.src;
}

