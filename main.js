$(document).ready(function(){

$("h2").on("click", function(event){
	$(this).toggleClass("title");
		 
});

$(".legal a").click(function(event){
	alert("Driver Privacy Statement is currently unavilable");
	event.preventDefault();
	
});

$(window).scroll(function(){
	$(".bttmDiv").css("background-color", "grey");
});

$(".form-control").on("change", function(event){
	var item = $(this).val();
  	if (item !=""){
  		$(this).addClass("verification");
  	}
  	else{ $(this).removeClass("verification");}
  });
  });