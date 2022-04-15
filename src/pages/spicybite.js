import React from "react";
import Layout from "../components/Layout/Layout";
import Image from "../components/Images/Images";

const Items = [
  {
    image: "cholespicy.jpg",
    name: "Chole Bhature",
    price: "₹80",
  },
  {
    image: "garlicbreadspicy.jpg",
    name: "Garlic Bread",
    price: "₹130",
  },

  {
    image: "manchufriedricespicy.jpg",
    name: "Machurian with Fried Rice",
    price: "₹150",
  },
  {
    image: "macronispicy.jpg",
    name: "Macroni",
    price: "₹95",
  },
  {
    image: "maggispicy.jpg",
    name: "Maggi",
    price: "₹65",
  },
  {
    image: "tawapulaospicy.jpg",
    name: "Tawa Pulao",
    price: "₹95",
  },
];

export default function spicybite() {
  return (
    <Layout>
      <div className="container text-center py-5">
        <h2 className="pb-2 border-bottom text-center">Spicy Bite Menu</h2>
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
