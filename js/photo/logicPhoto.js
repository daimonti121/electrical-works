
import PhotoSwipeLightbox from '../photo/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
    // may select multiple "galleries"
    gallery: '#my-gallery',
    showHideAnimationType: 'none',

    // Elements within gallery (slides)
    children: 'a',

    // setup PhotoSwipe Core dynamic import
    pswpModule: () => import('../photo/photoswipe.esm.js')
});
lightbox.init();