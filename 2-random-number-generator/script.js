// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");
const lblResult = document.querySelector(".lbl-result");
const buttons = document.querySelector(".buttons");

//region REGION: NOT RECOMMENDED SOLUTION!
/*
	Essa solução não é recomendada por criar um event listener para cada botão
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
//endregion

buttons.addEventListener("click", (e) => {
	if (e.target.classList.contains("generate")){
		lblResult.innerHTML = generateRandomNumber();
	}
	setColor();
});


/*
	EXPLANATION:
		.random() return always a number between 0 and 1 (exclusive)
		* 10, in order to make the result to be in 0 and 9
		.floor() in order to remove the floating point and down to the lower integer
		+ 1, in order to include 10 in possible results
*/
const generateRandomNumber = ()=> Math.floor(Math.random()*10+1);

// Calls the randomizer when the page loads
generateRandomNumber();


function setColor(){
	console.log(lblResult.innerHTML);
	if (lblResult.innerHTML > 0){
		lblResult.style.color = "yellow";
	} else if (lblResult.innerHTML < 0){
		lblResult.style.color = "orangered"
	} else if (lblResult.innerHTML = "0") {
		lblResult.style.color = "white"
	}
}

