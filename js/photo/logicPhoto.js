// $('.image-box').magnificPopup({
//     delegate: 'a',
//     type: 'image',
//     closeOnContentClick: true,
//     closeBtnInside: true,
//     galerry: {
//         enabled: true
//     }
// });


// import PhotoSwipeLightbox from '../photo/photoswipe-lightbox.esm.js';
// import PhotoSwipeLightbox from '../photo/photoswipe.esm.js';

// const lightbox = new PhotoSwipeLightbox({
//     gallery: '#my-gallery',
//     children: 'a',
//     pswpModule: () => import('https://unpkg.com/photoswipe'),
// });

// lightbox.init();


import PhotoSwipeLightbox from '../photo/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
    // may select multiple "galleries"
    gallery: '#my-gallery',
    pinchToClose: false,
    showHideAnimationType: 'none',

    // Elements within gallery (slides)
    children: 'a',

    // setup PhotoSwipe Core dynamic import
    pswpModule: () => import('../photo/photoswipe.esm.js')
});
lightbox.init();