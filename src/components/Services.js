import React from 'react'

export const Services = () => {
  return (
    
    <main id="main" data-aos="fade" data-aos-delay="1500">

      <section id="services" class="services">
        <div class="container">
          <div class="section-header">
            <h2>what I do</h2>
            <p>Services</p>
          </div>
          <div class="row gy-4">

            <div class="col-xl-3 col-md-6 d-flex">
              <div class="service-item position-relative">
                <i class="bi bi-activity"></i>
                <h4><a href="" class="stretched-link">web development</a></h4>
                {/* <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p> */}
              </div>
            </div>

            <div class="col-xl-3 col-md-6 d-flex">
              <div class="service-item position-relative">
                <i class="bi bi-bounding-box-circles"></i>
                <h4><a href="" class="stretched-link">Hosting services</a></h4>
                {/* <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p> */}
              </div>
            </div>

            <div class="col-xl-3 col-md-6 d-flex">
              <div class="service-item position-relative">
                <i class="bi bi-calendar4-week"></i>
                <h4><a href="" class="stretched-link">Data analysis</a></h4>
                {/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p> */}
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}
