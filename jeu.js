let monnaie = 0;
let cbPerClick = 1;

function showMonnaie(){
	$("#monnaie").html(monnaie);
}


showMonnaie();


$("#clickHere").click(function(){
	monnaie = monnaie + cbPerClick;
	showMonnaie();
})