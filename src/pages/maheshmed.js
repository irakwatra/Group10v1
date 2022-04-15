import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"

const Items = [
  {
    image: "cakeshanus.jpg",
    name: "Cake",
  },
  {
    image: "chaatshanus.jpg",
    name: "Chaat",
  },

  {
    image: "coldcoffeeshanus.jpg",
    name: "Cold Coffee",
  },
  {
    image: "pastryshanus.jpg",
    name: "Pastry",
  },
  {
    image: "pizzashanus.jpg",
    name: "Pizza",
  },
  {
    image: "whitesauceshanus.jpg",
    name: "White Sauce Pasta",
  }
]


export default function maheshmed() {
  return (<Layout>
  <div className="container text-center py-5">
      <h2 className="pb-2 border-bottom text-center">Items Available</h2>
      <div className="row justify content center">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col-lg-3 col-md-6 col-sm-12 ">
              <div className="card card-body mb-4">
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
              </div>
            </div>
          )
        })}
      </div>
    </div>
  
  
  </Layout>
  
  )
}



