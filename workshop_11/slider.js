const sliderDiv = document.querySelector('#slider');
const imageTrack = document.querySelector('#image-track');
let shift = 0;

fetch('https://dummyjson.com/products/6')
    .then(response => response.json())
    .then(product => {
        const images = [];
        product.images.forEach(imageSrc => {
            const imgTag = document.createElement('img');
            imgTag.src = imageSrc;
            imgTag.width = `${sliderDiv.clientWidth}`;
            imgTag.height = `${sliderDiv.clientHeight}`;
            
            images.push(imgTag);
            imageTrack.appendChild(imgTag);
        });

        imageTrack.style.width =`${images.length * sliderDiv.clientWidth}px`;
        imageTrack.style.height = `${sliderDiv.clientHeight}px`;

        const t = setInterval(() => {
            shift -= sliderDiv.clientWidth;
            if (shift <= -(images.length * sliderDiv.clientWidth)) {
                shift = 0;
            }
            console.log(shift);
            imageTrack.style.transform = `translateX(${shift}px)`;
        }, 2000);
        // clearInterval(t);
        console.log(product);
    });