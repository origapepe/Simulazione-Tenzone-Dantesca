let arr = [
"Avvegna che la subitana fuga\n dispergesse color per la campagna,\n rivolti al monte ove ragion ne fruga,\n", //1 giorno
"i' mi ristrinsi a la fida compagna:\n e come sare'io sanza lui corso?\n chi m'avria tratto su per la montagna?\n",
"El mi parea di se' stesso rimorso\n o dignitosa coscienza e netta\n come t'e' picciol fallo amaro morso!\n", 
"Quando li piedi suoi lasciar la fretta,\n che l'onestade ad ogn'atto dismaga,\n la mente mia, che prima era ristretta\n", // 2 giorn1
"lo'ntento rallargo', si' come vaga,\n e diedi 'l viso mio incontr' al poggio,\n che 'nverso 'l ciel piu' alto si dislaga.\n",
"Lo sol, che fiammeggiava roggio,\n rotto m'era dinanzi a la figura,\n ch'avea in me de' suoi raggi l'appoggio.\n",
"Io mi volsi dallato con paura\n d'essere abbandonato, quand'io vidi\n solo dinanzi a me la terra oscura;\n",
"e 'l mio conforto \"Perche pur diffidi?\n a dir mi comincio' tutto rivlolto.\n \"non credi tu me teco e ch'io ti guidi?\"\n",
"Vespero e' gia' cola' dov'e' sepolto\n lo corpo dentro al quale io facea ombra\n Napoli l'ha, e da Brandizio e' tolto.\n",
"Ora, se innanzi a me null s'aombra,\n non ti maravigliar piu' che d'i cieli\n che l'uno a l'altro raggio non ingombra.\n",// 3 giorni
"A sofferir tormenti, caldi e geli\n simili corpi la Virtu' dispone\n che, come fa, non vuol ch'a noi si sveli.\n",
"Matto e' chi spera che nostra ragione\n posssa trascorrer la infinita via\n che tiene una sustanza in tre persone.\n",
"State contenti, umana gente, al quia;\n che, se potuto aveste veder tutto,\n mestier non era parturir Maria;\n",
"e disiar vedeste sanza frutto\n tai che sarebbe lor didio quetato,\n ch'etternalmente e' dato lor per lutto:\n",
"io dico d'Aristotile e di Plato\n e di molt'altri\"; e qui chino' la fronte,\n e piu' non disse, e rimase turbato.\n", // 4 giorni
"Noi divenimmo intento al pie' del monte\n quivi trovammo la roccia si erta,\n che 'ndarno vi sarien la gambe pronte.\n",
"Tra Lerice e Turbia la piu' diserta,\n la piu' rotta ruina e' una la scala,\n verso di quella, agevole e aperta.\n",
"\"Or chi sa da qual man la costa cala\",\n disse 'l maestro mio fermando 'l passo,\n \"si che possa salir chi va sanz'ala?\".\n",
"E mentre ch'e tenendo il viso basso\n essaminava del cammin la mente,\n e io mirava suso intorno al sasso,\n",
"da man sinistra m'appari' una gente\n d'anime, che movieno i pie' ver' noi,\n e non pareva, si venian lente.\n",
"\"Leva\", diss'io, \"maestro, li occhi tuoi\n ecco di qua chi ne dara' consiglio\n se tu da te medesmo aver nol puoi\".\n", // 5 giorni
"Guardo' allora, e con libero piglio\n rispuose: \"Andiamo in la', ch'ei vegnon piano,\n e tu ferma la spene, dolce figlio\".\n",
"Ancora era quel popol di lontano,\n i' dico dopo i nostri mille passi,\n quanto un buon gittator trarria con mano,\n",
"quando si strinser tutti ai duri massi,\n de l'alta ripa, e stetter fermi e stretti,\n com' a guardar chi va, dubbiando stassi.\,", // 6 giorno
"\"O ben finiti, o gia' spiriti eletti\",\n Virgilio incomincio',\"per quella pace\n ch' i credo che per voi tutti s'aspetti,\n",
"ditene dove la monatgna giace, \n si' che possibil sia l'andare in suso;\n che' perder tempo a chi piu' sa piu' spiace\".\n", // 7 giorni
"Come le pecorelle escon dal chiuso\n a una, a due, a tre, e l'altre stanno\n timidette atterrando l'occhio e 'l muso;\n",
"e cio' che fa la prima, a l'altre fanno,\n addossandosi a lei, s'ella s'arresta,\n semplici e quete, e lo 'mperchè non sanno;\n",
"si' vid'io muovere a venir la testa\n quella mandra fortunata alotta,\n pudica in faccia e nell'andare onesta.\n",
"Come color dinanzi vider rotta\n la luce in terra dal mio destro canto,\n si' che lombra era da me a la rotta,\n"
];

let pEstr = document.getElementById("pEstr");
let p = [];
let pinfo = document.getElementById("info");
let n = undefined;
let show = false;
let nInfo = 0;
let msg = [
"Premere invio per vedere le 3 terzine successive",
"Premere invio per estrarre una nuova terzina"
];

for(let i = 0; i < 4; i++){
	p.push(document.getElementById("p"+i));
}

function estrazione(){
	n = Math.floor(Math.random()*arr.length);
	p0.innerHTML = arr[n];	
	pEstr.innerHTML = "Terzina Estratta (n. "+(n+1)+")";
	for(let i = 1; i < 4; i++){
		p[i].innerHTML="";
	}
}

function seguenti(){
	for(let i = 0; i < 4; i++){
		if(arr[i+n])p[i].innerHTML=arr[n+i];
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

console.log("Totale versi imparati: "+3*arr.length);
