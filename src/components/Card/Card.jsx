import { Link } from "react-router-dom"; // импорт Link
import "./Card.css";

export const Card = ({ id, title, price, address, date, img }) => {
  return (
    //  <a href="product.html" className="card"></a> - поменяли на Link to
    <Link to={`/product/${id}`} className="card">
      <div className="card--img">
        <img src={img} alt="card-img" />
      </div>
      <h5 className="card--title">{title}</h5>
      <strong className="card--price">{price}</strong>

      <div className="card--desc--box">
        <span className="card--desc">{address}</span>
        <span className="card--desc">{date}</span>
      </div>
    </Link>
  );
};

// /* <Link to={`/contacts/1`}>Your Name</Link>; */
