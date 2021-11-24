$(function () {
    $('.barra').on('click', function () {
        var listaMenu = $('.mobile ul')
        var icone = $('.barra')

        if (listaMenu.is(":hidden") == true) {
            listaMenu.slideToggle()
            icone.removeClass('fa-bars')
            icone.addClass('fa-times')
        } else {
            icone.addClass('fa-bars')
            icone.removeClass('fa-times')
            listaMenu.slideToggle()
        }
    })
    
    $('.mobile ul a').on('click', function () {
        var href = $(this).attr('href')
        var offSetTop = $(href).offset().top;

        $('.mobile ul').slideToggle()
        $('html,body').animate({ 'scrollTop': offSetTop })
        $('.barra').removeClass('fa-times')
        $('.barra').addClass('fa-bars')

        return false
    })

}
)