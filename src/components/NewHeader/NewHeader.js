import React from "react";
import { Basket3, Pen, CupStraw, FileMedical } from "react-bootstrap-icons";
import { Link } from "gatsby";

const NewHeader = () => {
  return (
    <div className="container text-center py-5">
      <div class="row">
        <div className="col-lg-3">
          <Link class="text-warning text-decoration-none" to="/foodcorner">
            <div className="card tabs justify-content-center d-flex card-body shadow">
              <CupStraw className="mx-auto" size="30" fill="#141E27" />
              Food Corner
            </div>
          </Link>
        </div>

        <div className="col-lg-3">
          <Link class="text-warning text-decoration-none" to="/stationary">
            <div className="card tabs justify-content-center d-flex card-body shadow">
              <Pen className="mx-auto" size="30" fill="#141E27" />
              Stationary
            </div>
          </Link>{" "}
        </div>

        <div className="col-lg-3">
          <Link class="text-warning text-decoration-none" to="/grocery">
            <div className="card tabs justify-content-center d-flex card-body shadow">
              <Basket3 className="mx-auto" size="30" fill="#141E27" />
              Grocery
            </div>
          </Link>
        </div>
        <div className="col-lg-3">
          {" "}
          <Link class="text-warning text-decoration-none" to="/pharmacy">
            <div className="card tabs justify-content-center d-flex card-body shadow">
              <FileMedical className="mx-auto" size="30" fill="#141E27" />
              Pharmacy
            </div>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
