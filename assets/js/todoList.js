$("ul").on("click", "li", function(){
	
	// if($(this).css("color")==="rgb(128, 128, 128)"){
	// 	$(this).css("color","black");
	// 	$(this).css("textDecoration","none");
	// }else
	// {
	// $(this).css("color","gray");
	// $(this).css("textDecoration","line-through");
	// }
// lis color change and textdecoration apply and connect with todolist.css class
	$(this).toggleClass("completed");
});

// remove span with lis---
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	// event.stopPropogation();
});

// enter the value in textbox and add in todo list---
$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		var value = $(this).val();
		$(this).val("");
	$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + value + "</li>");
	}
});

// if click +sign then fadout and fadeIn new todolist----
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});

