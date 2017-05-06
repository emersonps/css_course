$(function(){
	//equivalente ao load de nossa página
	$("#modal01").modal({backdrop:false, keyboard:false}); //remover a cor do fundo e impedir o uso de ESC
	
	$("#modal01").modal("show"); //mostrar o modal ao abrir a página
	
	
	setTimeout(function(){
		$("#modal01").modal("hide"); //fechar o modal automaticamente
	}, 3000);

	$(".ttp").tooltip({
		animation:false,
		delay: {show : 1000, hide: 5000},
		title: "Titulo Padrão",
		triger: 'click'
	});

	$(".ppv").popover({
		title: "Titulo do popover",
		trigger: "hover focus",
		delay: {show : 1000, hide: 5000},
	});

	$(".btnjs").button();

	$("#troca-estado").click(function(){
		var btn = $(this);
		btn.button("loading");
		
		setTimeout(function(){
			btn.button("reset");
		}, 3000);
	});
});