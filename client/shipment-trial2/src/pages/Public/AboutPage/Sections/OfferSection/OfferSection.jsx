// import {Icon}
// import Icon from "@mui/icons-material";
const OfferSection = () => {
  return (
    <div
      className="container"
      style={{
        boxShadow: "0px 0px 5px 2px rgba(155,155, 120, 0.3)",
        backgroundColor: "#f3f3f3",
        paddingTop: "2rem",
      }}
    >
      <div className="row">
        <div className="col-md-12 ">
          <div className="custom-heading02">
            <h2>What we Offer</h2>
            <p>TAILORED LOGISTIC SERVICES</p>
          </div>
        </div>
      </div>
      <div className="row card-layout">
        <div className="col-md-6 ">
          <div className="services-element service-icon-left-boxed ">
            <div className="icon-container "></div>

            <div className="service-details">
              {/* <Icon icon={faFaceRelieved} /> */}
              <h4>Contract logistics</h4>
              <p>
                Need custom logistic service? We got it covered. From overland,
                air, rail and sea transportation. Fast, safe and accurate
                shipment provided all over the globe.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="services-element service-icon-left-boxed ">
            <div className="icon-container "></div>

            <div className="service-details">
              <h4>Overland, Ocean and Air Freight</h4>
              <p>
                Trucking company offers the best logistics services using all
                mens of supply chain. Use our overland, ocean and air freight
                solutions for shipment of your goods.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 ">
          <div className="services-element service-icon-left-boxed ">
            <div className="icon-container "></div>

            <div className="service-details">
              <h4>Warehousing and Storage</h4>
              <p>
                Trucking offers intelligent warehouse solution. Lower your
                storage and good maintenance by using our modern and intelligent
                warehouses. You can see all locations on location page.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="services-element service-icon-left-boxed ">
            <div className="icon-container "></div>

            <div className="service-details">
              <h4>Consulting Services</h4>
              <p>
                Don't know what mean of transportation would be right for you,
                or you need someone for full supply chain management? Please
                contact us. Our team of professionals will be happy to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
