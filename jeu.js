let monnaie = 0;
let cbPerClick = 1;
let coutUpgrade = 5;
let valueOfADollar = cbPerClick;
let coutUpgradeAuto = 5;
let cbPerSecond = 0;

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

			$("#upgradesAuto").html('<button id="upgrade2" class="btn btn-hg btn-danger">+' + cbPerSecond +'€ / second</button>').show();
		
		
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



$("#upgrade2").click(function(){

cbPerSecond = cbPerSecond * 2;
if (cbPerSecond == 0) { cbPerSecond = 1; };
monnaie = monnaie - coutUpgradeAuto;
coutUpgradeAuto = coutUpgradeAuto * 5;
$("#upgradesAuto").hide();


});




}

function showCps(){
	$("#cps").html(cbPerClick + "€ / clic <br>" + cbPerSecond + "€ /s");
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


setInterval(function(){
   monnaie = monnaie + cbPerSecond;
   
   showMonnaie();
}, 1000);




