let monnaie = 0;
let cbPerClick = 1;
let coutUpgrade = 5;
let valueOfADollar = cbPerClick;

function showDollar() {
	let random = Math.floor(Math.random() * 100);
	if (random > 90) 
	{
		$("#clickHere").html('<img src="img/goldendollar.png">');
		valueOfADollar = cbPerClick * 2;

	}
	else
	{
		$("#clickHere").html('<img src="img/dollar.png">');	
		valueOfADollar = cbPerClick;	
	}
	console.log(random)
}
function showMonnaie(){
	$("#monnaie").html(monnaie);
}

function showCps(){
	$("#cps").html(cbPerClick + "€ / clic");
}


showDollar();
showMonnaie();
showCps();

$("#clickHere").click(function(){
	monnaie = monnaie + valueOfADollar;
	showMonnaie();
	showCps();
	showDollar();


if (monnaie >= coutUpgrade) {
	$("#upgrades").html('<a href="#" id="upgrade1" class="btn btn-hg btn-primary">+1€ / clic</a>');
}
}); // fin clickhere click




$("#upgrade1").click(function(){
	cbPerClick = cbPerClick + 1;
	coutUpgrade = coutUpgrade * 5;
	showCps();
	$("#upgrades").html();
});
