import { Header } from "../components/Header/Header";
import { Card } from "../components/Card/Card";
import { cardArray } from "../constants";
import { Content } from "../components/Content/Content";
import { content } from "../content";

export const Home = () => {
  return (
    <>
      {/* <!-- Header --> */}
      <Header />
      <main>
        {/* <!-- Поиск--> */}
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input type="text" placeholder="Поиск по объявлениям" />
              <button className="btn btn-primary search-btn">
                <img
                  className="search-btn__icon"
                  src="/image/search.svg"
                  alt="search"
                />
                <span className="search-btn__text">Найти</span>
              </button>
            </div>
          </div>
        </section>
        {/* <!-- Контент --> */}
        <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-main">
                <h2 className="content-main_title">Рекомендации для вас</h2>
                <div className="content-main__list">
                  {cardArray.map((card) => (
                    <Card
                      key={card.id}
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
                      <Content
                        title={cont.title}
                        text={cont.text}
                        img={cont.img}
                      />
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
      </main>
    </>
  );
};
