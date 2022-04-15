import React from "react"
import Image from "../components/Images/Images"
import Layout from "../components/Layout/Layout"

const stationary = () => {
  return (
    <Layout>
    <div className="container text-center py-5">
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Banasthali Book Center
          </h2>
          <p class="lead">
            The most popular stationary of Banasthali campus.{" "}
          </p>
        </div>
        <div class="col-md-5">
          
          <Image
            className="d-block mx-lg-auto img-fluid shadow"
            style={{
              borderRadius: "5%",
                height: "300px",
                width: "500px",
              }}
            filename="bbc.jpeg"
            alt="1"
          />
        </div>
      </div>
      &nbsp;
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            D.K. Stationary
          </h2>
          <p class="lead">
            The most expensive food corner of Banasthali campus.{" "}
          </p>
        </div>
        <div class="col-md-5">
        <Image
            className="d-block mx-lg-auto img-fluid shadow"
            style={{
              borderRadius: "5%",
                height: "300px",
                width: "500px",
              }}
            filename="dkstationary.jpeg"
            alt="1"
          />
        </div>
      </div>
      &nbsp;
      
    </div>
    </Layout>
  )
}

export default stationary
