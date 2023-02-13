// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");
const count = document.querySelector(".lbl-result");
const buttons = document.querySelector(".buttons");

/*
	Não recomendado por criar um event listener para cada botão
	melhor criar um event delegator onde só o objeto parent contém o evento

add.addEventListener("click", ()=>{
	lblResult.innerHTML++;
});
add.addEventListener("click", ()=>{
	lblResult.innerHTML++;
});
sub.addEventListener("click", ()=>{
	lblResult.innerHTML--;
});
resetCount.addEventListener("click", ()=>{
	lblResult.innerHTML=0;
});
*/

buttons.addEventListener("click", (e) => {
	if (e.target.classList.contains("add")){
		count.innerHTML++;
	}
	if (e.target.classList.contains("subtract")) {
		count.innerHTML--;
	}
	if (e.target.classList.contains("reset")) {
		count.innerHTML=0;
	}
	setColor();
});

function setColor(){
	console.log(count.innerHTML);
	if (count.innerHTML > 0){
		count.style.color = "yellow";
	} else if (count.innerHTML < 0){
		count.style.color = "orangered"
	} else if (count.innerHTML = "0") {
		count.style.color = "white"
	}
}

