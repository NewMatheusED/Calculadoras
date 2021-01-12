$(function(){

	const artigo = $('.artigo');
	const textarea = $('textarea');
	const select = $('select');
	const box = $('.box');
	const botao = $('input[type=submit]');
	const box2 = $('.box2');
	const form_result = $('.form-result');
	
	setTimeout(function(){
	artigo.css('background-color', 'black').css('transition', '.5s');
	$('.artigo p').css('color', 'white').css('transition', '.5s');
	},500);
	
	
	artigo.click(function(){
		$('.artigo2').slideToggle();
		artigo.css('background-color', 'orange').css('transition', '.5s');
	});
	
	
	artigo.dblclick(function(){
		artigo.css('background-color', 'purple').css('transition', '.5s');
	});
	
	
	artigo.hover(function(){
		artigo.css('background-color', 'red').css('transition', '.5s');
	},function(){ //quando o mouse sair, volta a cor ao normal
		artigo.css('background-color', 'black').css('transition', '.5s');
		$('.artigo p').css('color', 'white').css('transition', '.5s');
	});
	
	
	textarea.focus(function(){
		console.log("Dentro");
	}).blur(function(){
		console.log("Fora");
	});

	
	select.change(function(){ //executa a função ao mudar a opção do select
		alert("Alterado");
	})


	$('body').click(function(){
		box.css('opacity', '0.3').css('transition', '.5s');
	}).dblclick(function(){
		box.css('opacity', '1').css('transition', '.5s');
	});

	box.click(function(e){
		e.stopPropagation();
	});

	console.log(box.width());

	box.html('<h4>Alterando via JavaScript</j4>')

	botao.click(function(){
		var nome = $('input[type=text]').val();
		var email = $('input[type=email]').val();
		form_result.html("Olá "+nome+"! Enviamos um email para "+email  );
		return false;
	})

	box2.eq(0).append('<h3>Append via jQuery</h3>'); //append usado para a próximo elemento 
	//eq() seleciona o elemento com o mesmo nome 
	box2.eq(1).prepend('<h3>Prepend via jQuery</h3>')

	var before = "Antes";
	var after = "Depois";

	box2.after(after);
	box2.before(before);

	//box2.eq(1).remove()

	/*
	$('input[type=text]').keyup(function(){
		alert("Soltou");
	});
	$('input[type=text]').keydown(function(){
		alert("Apertou");
	});
	*/

	/*
	setInterval(function(){ //Em um intervalo de tempo, o código vai rodar
		alert("setInterval")
	},10000)
	*/

	/*
	var nome = $('input[type=text]').val();
	var email = $('input[type=email]').val();

	setInterval(function(){
	if(nome == "" && email == ""){
		alert("Falta colocar seu nome e seu email")
	}else if (nome >= 3 && email == ""){
		alert("Seu nome está certo, agora coloque seu email")
	}else if (nome == "" && email >= 5){
		alert("Seu email está correto, agora coloque seu nome")
	}else{
		alert("Está tudo correto")
	}
},10000);
*/

});