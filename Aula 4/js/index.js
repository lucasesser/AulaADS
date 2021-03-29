$(document).ready(
    function(){
        alert('a pagina carregou!');
    }
);
$("#bt_inicio").click(
    function(){
        alert('Você clicou no Incio!');
    }
);
$("#bt_sobre").click(
    function(){
        $("#corpo").load("Pages/sobre.html");
    }
);
$("#bt_cadastro").click(
    function(){
        $("#corpo").load("Pages/cadastro.html");
    }
);