let config = {
    type:'loop',
    arrows:false,
    pagination:false,
    perPage: 3,
    perMove:1,
    // autoplay: autoplay,
    autoplay: true,
    speed: '800',
    gap:30,
    easing:'ease',
    padding: { left: 10, right: 10 },
    breakpoints:{
        991:{
            perPage:2,
        },
        420:{
            perPage:1,
        }
    }
};
new Splide( '._saas_features_card_slider',config ).mount();