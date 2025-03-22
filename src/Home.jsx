import React from "react";

const Home = () => {
    return (
        <main>
            <section className="Need-parts">
                <article className="content">
                    <h2 className="title">Трябват ви авточасти?</h2>
                    <p className="description">
                        Магазин за авточасти Ел Би Комерс
                        предлага широк асортимент от части
                        и аксесоари за различни марки и модели автомобили
                    </p>
                    <button>София ул.Цар Симеон 216</button>
                </article>
            </section>
            <section className="Search-number">
                <div>
                    <h1 className="number">OEM Номер на частта</h1>
                    <hr style={{ color: "black" }} />
                </div>
                <div className="search">
                    <input type="text" id="search" />
                    <button>Търси</button>
                </div>
            </section>
            <h2 className="Products-title">Продукти</h2>
            <hr />
            <section className="Products">
                {[
                    { img: "/Oils.jpg", name: "Масла" },
                    { img: "/filters.jpg", name: "Филтри" },
                    { img: "/brake.png", name: "Спирачна система" },
                    { img: "/edro.jpg", name: "Едрогабаритни части" },
                    { img: "/accessories.png", name: "Авто аксесоари" },
                    { img: "/himiq.jpg", name: "Автохимия" },
                ].map((part, index) => (
                    <section className="Part" key={index}>
                        <img src={part.img} alt="" />
                        <p className="Part-name"><strong>{part.name}</strong></p>
                    </section>
                ))}
            </section>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5863.908930857704!2d23.30624354285277!3d42.7046849176497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85454aa91327%3A0xfab9115cd053ab33!2z0KHQvtGE0LjRjyDRhtC10L3RgtGK0YAsINGD0LsuIOKAntCm0LDRgCDQodC40LzQtdC-0L3igJwgMjE2LCAxMzAzINCh0L7RhNC40Y8!5e0!3m2!1sbg!2sbg!4v1710791509674!5m2!1sbg!2sbg"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </main>
    );
};

export default Home;