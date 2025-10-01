import "./Content.css";

export const Content = ({ title, text, img }) => {
  return (
    <div className="content-side__list">
      <div className="content-side__list-item">
        <img className="content-side__list-item--img" src={img} alt="truck" />
        <h5 className="content-side__list-item--title">{title}</h5>
        <p className="content-side__list-item--text">{text}</p>
      </div>
    </div>
  );
};
