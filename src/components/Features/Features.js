import React from "react";
import { Basket2Fill, Display, DoorOpen, People } from "react-bootstrap-icons";

const Items = [
  {
    icon: <Basket2Fill />,
    title: "Takeaway",
    description: "Same quality as the restaurant without the hassle!",
  },
  {
    icon: <DoorOpen />,
    title: "Hostel Delivery",
    description: "Delivery now at your doorstep!",
  },

  {
    icon: <People />,
    title: "Minimum Human Interaction",
    description: "Maximizing COVID-19 precautions!",
  },
  {
    icon: <Display />,
    title: "All Options Displayed",
    description: "Just pick your favorite option & VOILA!!",
  },
];

const Features = () => {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom text-center">Features</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col d-flex align-items-start">
              <div
                className="bi text-muted flex-shrink-0 me-3"
                style={{ fontSize: "2rem" }}
              >
                {item.icon}
              </div>

              <div>
                <h4 className="fw-bold mb-0">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
