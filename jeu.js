let monnaie = 0;
let cbPerClick = 1;
let coutUpgrade = 5;
let valueOfADollar = cbPerClick;
let coutUpgradeAuto = 50;


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
	if (monnaie >= coutUpgrade) 
	{
		$("#upgrades").html('<a href="#" id="upgrade1" class="btn btn-hg btn-danger">+' + cbPerClick +'€ / clic</a>').show();
	}
else
{
	$("#upgrades").html(coutUpgrade + "€ pour débloquer").show();	
}










	if (monnaie >= coutUpgradeAuto) 
	{
		$("#upgradesAuto").html('<a href="#" id="upgrade2" class="btn btn-hg btn-danger">+' + cbPerClick +'€ / clic</a>').show();
	}
else
{
	$("#upgradesAuto").html(coutUpgradeAuto + "€ pour débloquer").show();	
}






$("#upgrade1").click(function(){
	cbPerClick = cbPerClick * 2;
	monnaie = monnaie - coutUpgrade;
	showMonnaie();
	coutUpgrade = coutUpgrade * 5;

	showCps();
	$("#upgrades").hide();
});


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



}); // fin clickhere click





