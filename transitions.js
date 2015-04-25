var trans = {
    tapTransition: function(){
        $("a[href*='#']").click(trans.getId);
    },
    getId: function(){
        if($(this).attr('ig-trans') != undefined){
            var t = {
                active: $('.page.active'),
                neu: $(this).attr('href'),
                transition: $(this).attr('ig-trans')
            };
            trans.switchTransition(t);
        }
        return false;
    },
    switchTransition: function(t){
        switch(t.transition){
            case 'slideUp':
                trans.slideUp(t.active,t.neu);
                break;
            case 'slideDown':
                trans.slideDown(t.active,t.neu);
                break;
            case 'slideLeft':
                trans.slideLeft(t.active,t.neu);
                break;
            case 'slideRight':
                trans.slideRight(t.active,t.neu);
                break;
        }
    },
    slideLeft: function(active,neu){
        $('.page').removeClass('showPageSlideLeft').removeClass('hidePageSlideLeft');
        active.addClass('hidePageSlideLeft').removeClass('active');
        $(neu).addClass('showPageSlideLeft active');
    },
    slideRight: function(active,neu){
        $('.page').removeClass('showPageSlideRight').removeClass('hidePageSlideRight');
        active.addClass('hidePageSlideRight').removeClass('active');
        $(neu).addClass('showPageSlideRight active');
    },
    slideUp: function(active,neu){
        $('.page').removeClass('showPageSlideUp').removeClass('hidePageSlideUp');
        active.addClass('hidePageSlideUp').removeClass('active');
        $(neu).addClass('showPageSlideUp active');
    },
    slideDown: function(active,neu){
        $('.page').removeClass('showPageSlideDown').removeClass('hidePageSlideDown');
        active.addClass('hidePageSlideDown').removeClass('active');
        $(neu).addClass('showPageSlideDown active');
    }
}