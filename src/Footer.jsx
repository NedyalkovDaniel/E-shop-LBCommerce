import React from "react";
import styles from "./Footer.module.css";

function Footer (){
    return(
        <footer>
        <section>
            <h3 class="title">LB Commerce</h3>
            <p class="description">Всичко за вашият автомобил!</p>
        </section>
        <section>
            <nav>
                <ul>
                    <h3 class="title"></h3>
                    <li><a href="">Начало</a></li>
                    <li><a href="">За Нас</a></li>
                    <li><a href="">Услуги </a></li>
                    <li><a href="">Контакти</a></li>
                </ul>
            </nav>
        </section>
        <section id="contacts">
            <ul>
                <h3 class="title">Контакти</h3>
                <li><i class="fas fa-phone-volume"></i> 0888965530 </li>
                <li><i class="fas fa-envelope"></i>lbcommerce@gmail.com</li>
                <li><i class="fas fa-clock"></i>Понеделник - Петък: 09:00 - 18:00</li>
                <li><i class="fas fa-map-marked"></i>София, "Цар Симеон", 216</li>
            </ul>
        </section>
    </footer>
    )
}

export default Footer