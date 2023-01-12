import "./CardSection.css";
function CardSection() {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
          alt="Card Image 1"
        />
        <h4>Card Title 1</h4>
        <p>Card text goes here</p>
      </div>
      <div className="card">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
          alt="Card Image 2"
        />
        <h4>Card Title 2</h4>
        <p>Card text goes here</p>
      </div>
      <div className="card">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
          alt="Card Image 3"
        />
        <h4>Card Title 3</h4>
        <p>Card text goes here</p>
      </div>
      <div className="card">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
          alt="Card Image 4"
        />
        <h4>Card Title 4</h4>
        <p>Card text goes here</p>
      </div>
    </div>
  );
}

export default CardSection;
