import React from 'react';
import './Gallery.css';
import Fancybox from './Fancybox';
import img1 from "./gallery/car3.png"
import img2 from "./newGa/1.jpg"
import img3 from "./gallery/img5.jpg"
import img4 from "./newGa/2.jpg"
import img5 from "./newGa/3.jpg"
import img6 from "./gallery/winners.jpg"

const Gallery2 = () => {
  return (
    <div id='gallery'>
      <br/>
      <br/>
      <br/>
<div className='my-5' style={{ position: 'relative' }}>
      <div class="glitch-wrapper">
        <h1 class="glitch" data-text="Gallery">Gallery</h1>
      </div>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >

        <div className='hidden-mobile'>
          <div className="gallery-parent-container ">

            <a data-fancybox="gallery" className="gallery-img-container val1" href={img1}>
              <img className="fimg lazy-load" src={img1} loading='lazy' />
            </a>

            <a data-fancybox="gallery" className="gallery-img-container val2" href={img2}>
              <img className="fimg lazy-load" src={img2} loading='lazy'/>
            </a>

            <a data-fancybox="gallery" className="gallery-img-container val3" href={img3}>
              <img className="fimg lazy-load" src={img3} loading='lazy'/>
            </a>

            <a data-fancybox="gallery" className="gallery-img-container val4" href={img4}>
              <img className="fimg lazy-load" src={img4} loading='lazy'/>
            </a>

            <a data-fancybox="gallery" className="gallery-img-container val5" href={img5}>
              <img className="fimg lazy-load" src={img5} loading='lazy'/>
            </a>
            <a data-fancybox="gallery" className="gallery-img-container val6" href={img6}>
              <img className="fimg lazy-load" src={img6} loading='lazy'/>
            </a>




          </div>
        </div>
      </Fancybox>
      <div className='d-lg-none d-md-none'>
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >

          <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <a data-fancybox="gallery" class="gallery-img-container val1" href={img1}>
                    <img class="fimg lazy-load align-middle" src={img1} className="d-block w-100" loading='lazy' alt="..." />
                  </a>
                </div>

                <div className="carousel-item">
                  <a data-fancybox="gallery" class="gallery-img-container val1 " href={img2}>
                    <img class="fimg lazy-load align-middle"  src={img2} className="d-block w-100" loading='lazy'alt="..." />
                  </a> 
                </div>

                <div className="carousel-item">
                  <a data-fancybox="gallery" class="gallery-img-container val1" href={img3}>
                    <img src={img3} className="d-block w-100" loading='lazy' alt="..." />
                  </a>
                </div>

                <div className="carousel-item">
                  <a data-fancybox="gallery" class="gallery-img-container val1" href={img4}>
                    <img src={img4} className="d-block w-100" loading='lazy' alt="..." />
                  </a>
                </div>

                <div className="carousel-item">
                  <a data-fancybox="gallery" class="gallery-img-container val1" href={img5}>
                    <img src={img5} className="d-block w-100" loading='lazy' alt="..." />
                  </a>
                </div>
              </div>

              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active thumbnail" aria-current="true" aria-label="Slide 1">
                  <img src={img1} className="d-block btnn w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} className="thumbnail" aria-label="Slide 2">
                  <img src={img2} className="d-block btnn w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} className="thumbnail" aria-label="Slide 3">
                  <img src={img3} className="d-block btnn w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} className="thumbnail" aria-label="Slide 4">
                  <img src={img4} className="d-block btnn w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} className="thumbnail" aria-label="Slide 4">
                  <img src={img5} className="d-block btnn w-100" alt="..." />
                </button>

              </div>
            </div>
            <br />

          </div>

        </Fancybox>
      </div>
    </div>
    </div>
  );
}

export default Gallery2;