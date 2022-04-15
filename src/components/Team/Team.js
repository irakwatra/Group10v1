import React from "react";
import Image from "../Images/Images";

const Items = [
  {
    image: "mukteshwari.jpeg",
    name: " Ira Kwatra",
  },
  {
    image: "spicybite.jpeg",
    name: "Kalpana Kharwas",
  },

  {
    image: "kaustabhi.jpeg",
    name: "Kaustabhi Tank",
  },
  {
    image: "annapurna.jpeg",
    name: "Parinita",
  },
  {
    image: "annapurna.jpeg",
    name: "Srishti Swaraj",
  },
];

const Team = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="pb-2 border-bottom text-center">Team Members</h2>
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
          );
        })}
      </div>
    </div>
  );
};

export default Team;
