let monnaie = 0;
let cbPerClick = 1;
let coutUpgrade = 5;

function showMonnaie(){
	$("#monnaie").html(monnaie);
}

function showCps(){
	$("#cps").html(cbPerClick + "€ / clic");
}



showMonnaie();
showCps();

$("#clickHere").click(function(){
	monnaie = monnaie + cbPerClick;
	showMonnaie();
	showCps();


if (monnaie >= coutUpgrade) {
	$("#upgrades").html('<a id="upgrade1" class="btn btn-hg btn-primary">+1€ / clic</a>');
}
}); // fin clickhere click




$("#upgrade1").click(function(){
	cbPerClick = cbPerClick + 1;
	coutUpgrade = coutUpgrade * 5;
	showCps();
	$("#upgrades").html();
});
