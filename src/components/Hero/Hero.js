import React from "react";
import Image from "../Images/Images";

const Hero = () => {
  return (
    // <div
    //   id="carouselExampleCaptions"
    //   class="carousel slide"
    //   data-bs-ride="carousel"
    // >
    //   <div class="carousel-indicators">
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="0"
    //       class="active"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="1"
    //       aria-label="Slide 2"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="2"
    //       aria-label="Slide 3"
    //     ></button>
    //   </div>
    //   <div class="carousel-inner">
    //     <div class="carousel-item active">
    //       <div class="carousel-item active" data-bs-interval="1000">
    //         <Image
    //           className="d-block mx-lg-auto img-fluid"
    //           style={{
    //             margin: "0 auto",
    //             height: "600px",
    //             width: "90%",
    //             borderRadius: "10px",
    //           }}
    //           filename="carousel1.jpg"
    //           alt="1"
    //         />
    //         <div class="carousel-caption d-none d-md-block">
    //           <h5>First slide label</h5>
    //           <p>
    //             Some representative placeholder content for the first slide.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="carousel-item">
    //       <div class="carousel-item active" data-bs-interval="1000">
    //         <Image
    //           className="d-block mx-lg-auto img-fluid"
    //           style={{
    //             margin: "0 auto",
    //             height: "600px",
    //             width: "90%",
    //             borderRadius: "10px",
    //           }}
    //           filename="carousel2.jpg"
    //           alt="1"
    //         />
    //         <div class="carousel-caption d-none d-md-block">
    //           <h5>Second slide label</h5>
    //           <p>
    //             Some representative placeholder content for the second slide.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="carousel-item">
    //       <div class="carousel-item active" data-bs-interval="1000">
    //         <Image
    //           className="d-block mx-lg-auto img-fluid"
    //           style={{
    //             margin: "0 auto",
    //             height: "600px",
    //             width: "90%",
    //             borderRadius: "10px",
    //           }}
    //           filename="carousel3.jpg"
    //           alt="1"
    //         />
    //         <div class="carousel-caption d-none d-md-block">
    //           <h5>Third slide label</h5>
    //           <p>
    //             Some representative placeholder content for the third slide.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     class="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleCaptions"
    //     data-bs-slide="prev"
    //   >
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     class="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleCaptions"
    //     data-bs-slide="next"
    //   >
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>

    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner py-5">
        <div class="carousel-item active" data-bs-interval="3000">
          <Image
            className="d-block mx-lg-auto img-fluid"
            style={{
              margin: "0 auto",
              height: "600px",
              width: "90%",
              borderRadius: "10px",
            }}
            filename="carousel1.jpg"
            alt="1"
          />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <Image
            className="d-block mx-lg-auto img-fluid"
            style={{
              margin: "0 auto",
              height: "600px",
              width: "90%",
              borderRadius: "10px",
            }}
            filename="carousel2.jpg"
            alt="1"
          />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <Image
            className="d-block mx-lg-auto img-fluid"
            style={{
              margin: "0 auto",
              height: "600px",
              width: "90%",
              borderRadius: "10px",
            }}
            filename="carousel3.jpg"
            alt="1"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
