import React from "react";
import Layout from "../components/Layout/Layout";
import Image from "../components/Images/Images";

const Items = [
  {
    image: "cakeshanus.jpg",
    name: "Cake",
    price: "₹450",
  },
  {
    image: "chaatshanus.jpg",
    name: "Chaat",
    price: "₹70",
  },

  {
    image: "coldcoffeeshanus.jpg",
    name: "Cold Coffee",
    price: "₹90",
  },
  {
    image: "pastryshanus.jpg",
    name: "Pastry",
    price: "₹90",
  },
  {
    image: "pizzashanus.jpg",
    name: "Pizza",
    price: "₹150",
  },
  {
    image: "whitesauceshanus.jpg",
    name: "White Sauce Pasta",
    price: "₹135",
  },
];

export default function shanus() {
  return (
    <Layout>
      <div className="container text-center py-5">
        <h2 className="pb-2 border-bottom text-center">Shanus Menu</h2>
        <div className="row justify content center">
          {Items.map((item, i) => {
            return (
              <div key={i} className="col-lg-3 col-md-6 col-sm-12 ">
                <div className="card card-body shadow mb-4">
                  <Image
                    className="d-block mx-lg-auto img-fluid"
                    style={{
                      margin: "0 auto",
                      height: "200px",
                      width: "200px",
                      borderRadius: "100%",
                    }}
                    filename={item.image}
                    alt="1"
                  />
                  <h3 className="m-4">{item.name}</h3>
                  <h2 className="m-4">{item.price}</h2>
                  <button type="button" class="btn btn-outline-dark">
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
