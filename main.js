$(document).ready(function() {
    $('.menu-hamburger').click(function(){
       $('nav').slideToggle();
    })
    $('#telefone').mask('(00) 00000-0000')

    $('#CEP').mask('00000-000')
    $('#CPF').mask('000.000.000-00')

    $('form').validate({
       rules: { 
          nome: {
             required: true
          },
          email: {
             required: true,
             email: true
          },
          telefone: {
             required: true,
          },
          logradouro: {
             required: true,
          },
          CEP: {
            required: true,
         },
         bairro: {
            required: true,
         },
         CPF: {
            required: true,
         },
         CidEst: {
            required: true,
         },
         complemento: {
            required: false,
         },
          numero: {
             required: true,           
          }
       },
       messages: {
          nome: 'Por favor, insira o seu nome',
          email: 'Por favor, informe o seu e-mail corretamente',
          telefone: 'Por favor, insira o seu telefone',
          endereco: 'Por favor, insira o seu endereço',
          CPF: 'Por favor, informe o seu CPF',
          logradouro: 'Por favor, informe o seu Logradouro',
          bairro: 'Por favor, informe o seu Bairro',
          numero: 'Por favor, informe o número',
          CidEst: 'Por favor, informe a Cidade e o Estado',
          CEP: 'Por favor, informe o CEP'
          
       },
       submitHandler: function(forn) {
          alert ('Obrigado pelo contato, em breve retornaremos pelo tefefone informado')
          form.submit;
       },
       invalidHandler: function(evento, validador){
          let camposIncorretos = validador.numberOfInvalids();
          if (camposIncorretos) {
             alert(`Existem ${camposIncorretos} campos incorretos`)
          }
       }
    }) 
    $('.irContato a').click(function() {
        const destino = $('#contato');
        
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
 })