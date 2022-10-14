




function isWebp(){
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function (){
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

	}
	testWebp(function (support){
		let className = support = true ? "webp" : "no-webp";
		document.documentElement.classList.add(className);
	})
}
	
isWebp();



const btnBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger__open");




let n = false;


btnBurger.addEventListener("click", item =>{
		n = !n;
		if(n){
			item.target.classList.add("btn-anim");
			setTimeout(deleteClass, 1000);
			function deleteClass() {
				item.target.classList.remove("btn-anim");
			}
		}else{
			item.target.classList.add("btn-anim-reverse");
			setTimeout(deleteClass, 1000);
			function deleteClass() {
				item.target.classList.remove("btn-anim-reverse");
			}
		}
		

});



btnBurger.addEventListener("click", ()=>{
		document.querySelector("body").classList.toggle("scrollNone");
		burger.classList.toggle("burger__open-active");
		btnBurger.classList.remove("header__burger_close");
});









////////////modal




const modalWr = document.querySelector(".modal__wr");
const modalContent = document.querySelector(".modal__body");
const modalBtnClose = document.querySelector(".modal__body-btn");
const arr = [modalWr, modalBtnClose];

arr.forEach(item=>{
	item.addEventListener("click", function(event){
		modalWr.classList.remove("modal__wr-active");
		modalContent.classList.remove("modal__body-open");
	})
})


modalContent.addEventListener("click", (e)=> {
	e.stopPropagation();
})






///

const swiper = new Swiper('.catalog__swiper-swiper', {
	loop: true,
	navigation: {
		nextEl: ".arrow-right",
		prevEl: ".arrow-left",
	},
	slidesPerView: 3,
	spaceBetween: 60,
breakpoints:{
	0:{
		spaceBetween: 20,
	},
	992: {
		spaceBetween: 40,
	},
	1200:{
		spaceBetween: 60,
	},
},
	

 });
 

 let formName = document.querySelector("#form__name");
 let formTell = document.querySelector("#form__tell");
 let formBtn = document.querySelector("#form__btn");


 let regName = /^[0-9a-zA-Zа-яА-Яa-zA-ZЄ-ЯҐа-їґ]{3,}$/;
 let regTell = /^\+?[0-9]{12,}$/;

 formBtn.addEventListener("click", ()=>{


	if(regName.test(formName.value)){
		document.querySelector(".valid-name").classList.add("active-validation");
		document.querySelector(".invalid-name").classList.remove("active-validation");
	}else{
		document.querySelector(".valid-name").classList.remove("active-validation");
		document.querySelector(".invalid-name").classList.add("active-validation");
	}

	if(regTell.test(formTell.value)){
		document.querySelector(".valid-tell").classList.add("active-validation");
		document.querySelector(".invalid-tell").classList.remove("active-validation");
	}else{
		document.querySelector(".valid-tell").classList.remove("active-validation");
		document.querySelector(".invalid-tell").classList.add("active-validation");
	}

	if(regName.test(formName.value) && regTell.test(formTell.value)){ 
		modalWr.classList.add("modal__wr-active");
		modalContent.classList.add("modal__body-open");
	}
 });

 
 let formName2 = document.querySelector("#form__name2");
 let formTell2 = document.querySelector("#form__tell2");
 let formBtn2 = document.querySelector("#form__btn2");


 formBtn2.addEventListener("click", ()=>{

	if(regName.test(formName2.value)){
		document.querySelector(".valid-name2").classList.add("active-validation");
		document.querySelector(".invalid-name2").classList.remove("active-validation");
	}else{
		document.querySelector(".valid-name2").classList.remove("active-validation");
		document.querySelector(".invalid-name2").classList.add("active-validation");
	}

	if(regTell.test(formTell2.value)){
		document.querySelector(".valid-tell2").classList.add("active-validation");
		document.querySelector(".invalid-tell2").classList.remove("active-validation");
	}else{
		document.querySelector(".valid-tell2").classList.remove("active-validation");
		document.querySelector(".invalid-tell2").classList.add("active-validation");
	}

	if(regName.test(formName2.value) && regTell.test(formTell2.value)){ 
		modalWr.classList.add("modal__wr-active");
		modalContent.classList.add("modal__body-open");
	}
 });