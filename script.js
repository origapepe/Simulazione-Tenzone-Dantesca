let pEstr = document.getElementById("pEstr");
let p = [];
let pinfo = document.getElementById("info");
let n = undefined;
let show = false;
let nInfo = 0;
let msg = [
"Premere invio per vedere le 3 terzine successive",
"Premere invio per estrarreuna nuova terzina"
];
let c = 1; // canto

for(let i = 0; i < 4; i++){
	p.push(document.getElementById("p"+i));
}

function estrazione(){
	n = Math.floor(Math.random()*arr[c].length);
	p0.innerHTML = arr[c][n];	
	pEstr.innerHTML = "Terzina Estratta (n. "+(n+1)+")";
	for(let i = 1; i < 4; i++){
		p[i].innerHTML="";
	}
}

function seguenti(){
	for(let i = 0; i < 4; i++){
		if(arr[c][i+n])p[i].innerHTML=arr[c][n+i];
	}
}

function run(){
	if(show){
		show=false;
		seguenti();
	}else{
		show=true;
		estrazione();
	}
	pinfo.innerHTML=msg[nInfo];
	nInfo=(nInfo+1)%msg.length;
}

document.onkeypress = function(e){
	if(e.code=="Enter"){
		run();
	}
}

document.addEventListener("touchstart", run);
document.addEventListener("ontouchstart", run);

console.log("Totale versi imparati: "+3*arr[c].length);

//https://origapepe.github.io/Simulazione-Tenzone-Dantesca/
