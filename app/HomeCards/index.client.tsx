'use client'
import React from "react";
import { useEffect } from 'react';

import "./HomeCards.css";

const cardData = [
    {
        title: "Godzilla Minus One",
        description: "Un monstruo gigante emerge de las profundidades del océano y se dispone a atacar Japón justo cuando la nación trata de recuperarse tras la destrucción ocasionada por la Segunda Guerra Mundial.",
        director: "Takashi Yamazaki",
        image: "https://m.media-amazon.com/images/I/914kxC4gHUL._UF894,1000_QL80_.jpg",
    },

    {
        title: "Godzilla 1954",
        description: "Las misteriosas destrucciones de barcos en el Pacífico provocan el pánico. Los nativos de una isla afirman que el culpable es una criatura legendaria, Godzilla.",
        director: "Ishiro Honda",
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/gojira-godzilla-1954-japanese-movie-poster-history-prints.jpg",
    },

    // Add more card objects as needed
];

const HomeCards = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // Toggle the 'isVisible' class based on the isIntersecting property
                if (entry.isIntersecting) {
                    entry.target.classList.add('isVisible');
                } else {
                    entry.target.classList.remove('isVisible');
                }
            });
        }, { threshold: 0.1 }); // Adjust threshold based on when you want the animation to start

        const cards = document.querySelectorAll('.cardContainer');
        cards.forEach(card => {
            observer.observe(card);
        });

        return () => { // Cleanup observer on component unmount
            cards.forEach(card => {
                observer.unobserve(card);
            });
        };
    }, []);

    return (
        <section className="HomeCardsGrid">
            <div className="HomeCardsContainer">
                {cardData.map((card, index) => (

                    <div className="cardContainer" key={index}>
                        <div className="cardImage" style={{ backgroundImage: `url(${card.image})` }}></div>

                        <div className="cardTextContainer">
                            <div className="cardTextTitle">{card.title}</div>
                            <div className="cardTextPara">{card.description}</div>
                            <div className="cardTextDirector">{card.director}</div>
                        </div>

                    </div>

                ))}
            </div>
        </section>
    );
};

export default HomeCards;

