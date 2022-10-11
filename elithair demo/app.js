const carouselSlide = document.querySelector(".slides")
const carouselImages = document.querySelector(".slides img")


const myImages = [
  "https://cdn.elithairtransplant.com/german/wp-content/uploads/2021/08/Vorher-nachher-saphir-haartransplantation-4700-grafts-Frederic-Gigers-nach-8-monaten.jpg",
  "https://cdn.elithairtransplant.com/german/wp-content/uploads/2021/08/Nachher-saphir-haartransplantation-4700-Frederic-Gigers.jpg",
  "https://cdn.elithairtransplant.com/german/wp-content/uploads/2021/08/Nachher-saphir-haartransplantation-Tonsur-4700-Frederic-Gigers.jpg",
];

const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")

let counter = 0;

prevBtn.onclick = () => {
    if(counter > 0){
        counter--;
    carouselImages.src = myImages[counter]
    console.log(counter);
    }
    else if(counter == 0){
        counter = myImages.length - 1;
        carouselImages.src = myImages[myImages.length - 1]
        console.log(counter);
    }
}

nextBtn.onclick = () =>{
    if(counter<myImages.length -1){
        counter++;
        carouselImages.src = myImages[counter]
        console.log(counter);
    }
    else if(counter == myImages.length-1){
        counter = 0;
        carouselImages.src = myImages[0]
        console.log(counter)
    }
}


