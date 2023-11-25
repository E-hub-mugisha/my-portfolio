// src/components/Testimonials

import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" class="testimonials">
    <div class="container">

      <div class="section-header">
      <UsersIcon className="w-10 inline-block mb-4" />
        <h2>Testimonials</h2>
        <p>What they are saying</p>
      </div>

      <div class="slides-3 swiper">
        <div class="swiper-wrapper">
          {testimonials.map((testimonial) => (
            <div class="swiper-slide">
              <div class="testimonial-item">
                <div class="stars">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p>
                  {testimonial.quote}
                </p>
                <div class="author">
                  <div class="profile mt-auto">
                    <img src={testimonial.image} class="testimonial-img" alt=""/>
                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.company}</h4>
                  </div>
                </div>
              </div>
              </div>
          ))}
        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>
  </section>
  );
}