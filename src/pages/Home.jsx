import { Card } from "../components/Card/Card";
import { Content } from "../components/Content/Content";
import { content } from "../content";
import { useOutletContext } from "react-router-dom";

export const Home = () => {
  const { products } = useOutletContext();

  return (
    <section className="content">
      <div className="container">
        <div className="content-box">
          <div className="content-main">
            <h2 className="content-main_title">Рекомендации для вас</h2>
            <div className="content-main__list">
              {products.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  price={card.price}
                  address={card.address}
                  date={card.date}
                  img={card.img}
                />
              ))}
            </div>
          </div>
          <div className="content-side">
            <h3 className="content-side_title">Сервисы и услуги</h3>
            <div className="content-side__box">
              <div className="content-side__list">
                {content.map((cont) => (
                  <Content title={cont.title} text={cont.text} img={cont.img} />
                ))}
              </div>

              <div className="content-side__footer">
                <p className="content-side__footer--item">
                  © ООО «Абито», 2011–2021
                </p>
                <a href="#!" className="content-side__footer--item">
                  Политика конфиденциальности
                </a>
                <a href="#!" className="content-side__footer--item">
                  Обработка данных
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
