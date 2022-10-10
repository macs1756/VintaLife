




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



let btnModal = document.querySelectorAll(".modalActive");
const modalWr = document.querySelector(".modal__wr");
const modalContent = document.querySelector(".modal__body");


btnModal.forEach(item=>{
	item.addEventListener("click", ()=>{
		modalWr.classList.add("modal__wr-active");
		modalContent.classList.add("modal__body-open");
	});
});


modalWr.addEventListener("click", function(event){
	modalWr.classList.remove("modal__wr-active");
	modalContent.classList.remove("modal__body-open");
})







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
 let regTell = /^\+?[0-9]{3,}$/;

 formBtn.addEventListener("click", ()=>{


	if(regName.test(formName.value)){
		console.log("++");
	}else{
		console.log("--");
	}

	if(regTell.test(formTell.value)){
		console.log("++");
	}else{
		console.log("--");
	}

	if(regName.test(formName.value) && regTell.test(formTell.value)){
		alert("data sent to the server")
	}




 })

 

 //console.log(regName.test(formName.value));