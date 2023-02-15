const CardElement = document.querySelector('[data-js="Cards"]');
const Card2Element = document.querySelector('[data-js="Cards__2"]');
const Card3Element = document.querySelector('[data-js="Cards__3"]');
const Card4Element = document.querySelector('[data-js="Cards__4"]');

const Card1Element__text = document.querySelector('[data-js="Cards__1__text"]');
const Card2Element__text = document.querySelector('[data-js="Cards__2__text"]');
const Card3Element__text = document.querySelector('[data-js="Cards__3__text"]');
const Card4Element__text = document.querySelector('[data-js="Cards__4__text"]');

//
const version1 = document.querySelector('[data-js="Navbar__button--1"]');

version1.addEventListener("click", () => {
    console.log("button1 clicked");
    CardElement.classList.add("version1");
    Card2Element.classList.add("version1");
    Card3Element.classList.add("version1");
    Card4Element.classList.add("version1");

    CardElement.classList.remove("version2");
    Card2Element.classList.remove("version2");
    Card3Element.classList.remove("version2");
    Card4Element.classList.remove("version2");

    CardElement.classList.remove("version3");
    Card2Element.classList.remove("version3");
    Card3Element.classList.remove("version3");
    Card4Element.classList.remove("version3");

    CardElement.classList.remove("version4");
    Card2Element.classList.remove("version4");
    Card3Element.classList.remove("version4");
    Card4Element.classList.remove("version4");

    Card1Element__text.classList.add("version1");
    Card1Element__text.classList.remove("version4");
    Card1Element__text.classList.remove("version3");
    Card1Element__text.classList.remove("version2");
});

// 


const version2 = document.querySelector('[data-js="Navbar__button--2"]');

version2.addEventListener("click", () => {
    console.log("button2 clicked");
    CardElement.classList.remove("version1");
    Card2Element.classList.remove("version1");
    Card3Element.classList.remove("version1");
    Card4Element.classList.remove("version1");

    CardElement.classList.add("version2");
    Card2Element.classList.add("version2");
    Card3Element.classList.add("version2");
    Card4Element.classList.add("version2");

    CardElement.classList.remove("version3");
    Card2Element.classList.remove("version3");
    Card3Element.classList.remove("version3");
    Card4Element.classList.remove("version3");

    CardElement.classList.remove("version4");
    Card2Element.classList.remove("version4");
    Card3Element.classList.remove("version4");
    Card4Element.classList.remove("version4");

    Card2Element__text.classList.add("version2");
    Card2Element__text.classList.remove("version4");
    Card2Element__text.classList.remove("version3");
    Card2Element__text.classList.remove("version1");


    Card2Element__text.classList.add("version2");
    Card2Element__text.classList.remove("version4");
    Card2Element__text.classList.remove("version3");
    Card2Element__text.classList.remove("version1");
});

//



const version3= document.querySelector('[data-js="Navbar__button--3"]');

version3.addEventListener("click", () => {
    console.log("button3 clicked");
    CardElement.classList.remove("version1");
    Card2Element.classList.remove("version1");
    Card3Element.classList.remove("version1");
    Card4Element.classList.remove("version1");

    CardElement.classList.remove("version2");
    Card2Element.classList.remove("version2");
    Card3Element.classList.remove("version2");
    Card4Element.classList.remove("version2");

    CardElement.classList.add("version3");
    Card2Element.classList.add("version3");
    Card3Element.classList.add("version3");
    Card4Element.classList.add("version3");

    CardElement.classList.remove("version4");
    Card2Element.classList.remove("version4");
    Card3Element.classList.remove("version4");
    Card4Element.classList.remove("version4");

    Card3Element__text.classList.add("version3");
    Card3Element__text.classList.remove("version4");
    Card3Element__text.classList.remove("version2");
    Card3Element__text.classList.remove("version1");
});
//


const version4 = document.querySelector('[data-js="Navbar__button--4"]');

version4.addEventListener("click", () => {
    console.log("button4 clicked");
    CardElement.classList.remove("version1");
    Card2Element.classList.remove("version1");
    Card3Element.classList.remove("version1");
    Card4Element.classList.remove("version1");

    CardElement.classList.remove("version2");
    Card2Element.classList.remove("version2");
    Card3Element.classList.remove("version2");
    Card4Element.classList.remove("version2");

    CardElement.classList.remove("version3");
    Card2Element.classList.remove("version3");
    Card3Element.classList.remove("version3");
    Card4Element.classList.remove("version3");

    CardElement.classList.add("version4");
    Card2Element.classList.add("version4");
    Card3Element.classList.add("version4");
    Card4Element.classList.add("version4");

    Card4Element__text.classList.add("version4");
    Card4Element__text.classList.remove("version3");
    Card4Element__text.classList.remove("version2");
    Card4Element__text.classList.remove("version1");
});