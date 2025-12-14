import { HashLink } from "react-router-hash-link";
import "./Price.css";

export default function Price() {
  return (
    <section className="price">
      <div className="price-header">
        {/* <HashLink to="/" className="back-button">← Назад</HashLink> */}
        <h2>Наши цены</h2>
      </div>

      <table className="price-table">
        <thead>
          <tr>
            <th>Категория</th>
            <th>Описание</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Бухгалтерский учёт</td>
            <td>Ведение учёта и отчётности</td>
            <td>от 5000 ₽ / месяц</td>
          </tr>
          <tr>
            <td>Отчётность</td>
            <td>Составление и сдача отчётов</td>
            <td>от 3000 ₽ / квартал</td>
          </tr>
          <tr>
            <td>Кадровый учёт</td>
            <td>Документы и расчёт зарплаты</td>
            <td>от 2000 ₽ / сотрудник</td>
          </tr>
          <tr>
            <td>Регистрация юр. лица</td>
            <td>Оформление ООО / ИП</td>
            <td>от 7000 ₽</td>
          </tr>
        </tbody>
      </table>

      <p className="price-note">
        Если не нашли нужную услугу — свяжитесь с нами, обсудим детали.
      </p>

      <div className="price-actions">
        <HashLink to="/#contact" className="contact-button">
          Связаться с нами
        </HashLink>
      </div>
    </section>
  );
}
