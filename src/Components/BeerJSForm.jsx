import React from "react";
import "../Components/beerJSForm.css";
import beerJSLogo from "../img/BeerJSLogo.jpg";
import { useForm } from "react-hook-form";

function BeerJSForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="page-container">
      <header className="header">
        <h1 className="header-title">Call for papers BeerJS Zhytomyr</h1>
        <p className="header-description">
          Якщо маєш бажання розповісти про щось, але є сумніви. Ми допоможемо.{" "}
          <br />
          Якщо хочеш рев'ю чи прогон, все буде. <br />
          Якщо хочеш почати, це реально. Архе бір - це експериментальна
          платформа.
        </p>
        <div className="user-info">
          <p>vt222_zso@student.ztu.edu.ua</p>
          <a href="/">Змінити обліковий запис</a>
        </div>
      </header>

      <main className="main-content">
        <h2>Call for papers BeerJS Zhytomyr</h2>

        <div className="logo-container">
          <img src={beerJSLogo} alt="BeerJS Logo" />
        </div>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Прізвище, ім'я:</label>
            <input
              id="name"
              type="text"
              placeholder="Ваша відповідь"
              {...register("firstName")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">
              Мій контакт, по якому зручно спілкуватись <span>*</span>
            </label>
            <input
              id="contact"
              type="text"
              placeholder="Ваша відповідь"
              {...register("contacts")}
            />
            <p className="error-message">
              Відповідь на це запитання обов'язкова
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="format">
              Мій формат (доповідь, дискусія, панель, клуб тощо) <span>*</span>
            </label>
            <input
              id="format"
              type="text"
              placeholder="Ваша відповідь"
              required
              {...register("format")}
            />
            <p className="error-message">
              Відповідь на це запитання обов'язкова
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="topic">
              Тема доповіді <span>*</span>
            </label>
            <input
              id="topic"
              type="text"
              placeholder="Ваша відповідь"
              required
              {...register("subject")}
            />
            <p className="error-message">
              Відповідь на це запитання обов'язкова
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="description">Короткий опис, ідея:</label>
            <textarea
              id="description"
              placeholder="Ваша відповідь"
              {...register("description")}
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Надіслати
            </button>
            <button type="reset" className="reset-button">
              Очистити форму
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default BeerJSForm;
