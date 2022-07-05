$(document).ready(function(){
    const patternPass = [
        '[a-z]+',
        '[A-Z]+',
        '[0-9]+',
    ];
    
    $('.input-group input').on('input', function(e){
        $('.pass-pattern').show(500)

        const pass = $(this).val();
        $('.list-pattern li').removeClass('list-green list-red');

        var passSecurity = 0;
       
        /* Verifica se possui minúscula */
        let regex = new RegExp('[a-z]+');
        if(regex.test(pass)){
            passSecurity++;
            $('.list-pattern li.minuscula').addClass('list-green');
        }else{
            $('.list-pattern li.minuscula').addClass('list-red');
        }
       
        /* Verifica se possui maiúscula */
        regex = new RegExp('[A-Z]+');
        if(regex.test(pass)){
            passSecurity++;
            $('.list-pattern li.maiuscula').addClass('list-green');
        }else{
            $('.list-pattern li.maiuscula').addClass('list-red');
        }


        /* Verifica se possui número */
        regex = new RegExp('[0-9]+');
        if(regex.test(pass)){
            passSecurity++;
            $('.list-pattern li.numero').addClass('list-green');
        }else{
            $('.list-pattern li.numero').addClass('list-red');
        }

        /* Verifica se possui caracter especial */
        regex = new RegExp(/(?=.*[@!#$%^&*()/\\])/);
        if(regex.test(pass)){
            passSecurity++;
            $('.list-pattern li.caracter-especial').addClass('list-green');
        }else{
            $('.list-pattern li.caracter-especial').addClass('list-red');
        }
 
        /* Verifica se possui mais de 8 caracteres */
        if (pass.length >= 8){
            passSecurity++;
            $('.list-pattern li.mais8').addClass('list-green');
        }else{
            $('.list-pattern li.mais8').addClass('list-red');
        }

        switch (passSecurity) {
            case 0:
                $('.strength-label').html('Vazia');
                alterarClasse('empty');
                break;
            case 1:
                $('.strength-label').html('Muito Fraca');
                alterarClasse('nivel1');
                break;
            case 2:
                $('.strength-label').html('Fraca');
                alterarClasse('nivel2');
                break;
            case 3:
                $('.strength-label').html('Média');
                alterarClasse('nivel3');
                break;
            case 4:
                $('.strength-label').html('Forte');
                alterarClasse('nivel4');
                break;
            case 5:
                $('.strength-label').html('Muito Forte');
                alterarClasse('nivel5');
                break;
        }

    });

    function alterarClasse(classe) {
        $('.strength-percent span').removeClass('empty nivel1 nivel2 nivel3 nivel4 nivel5');

        $('.strength-percent span').addClass(classe);
    }


    /* Permite a visualização da senha */
    $('.input-group .toggle').on('click', function(e){
        let type = $('.input-group input').attr('type');
        if (type == 'password'){
            $('.input-group input').attr('type', 'text').css({
                'color': '#000',
            });

            $('.toggle img').attr('src', 'img/icons/olho_aberto.png');

            $('.ripple').css({
                'border-radius': '4px',
                'width': '100%',
                'height': '100%',
                'right': '0',
                'z-index': '-1'
            })
        }else{
            $('.input-group input').attr('type', 'password').css({
                'color': '#fff',
            });
                                   
            $('.toggle img').attr('src', 'img/icons/olho_fechado.png');


            $('.ripple').css({
                'border-radius': '50%',
                'width': '35px',
                'height': '35px',
                'right': '8px',
                'z-index': '1'
            })
        }
    });

})