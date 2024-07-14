import React from "react";
import "./HomeCards.css";

const cardData = [
    {
        title: "Godzilla Minus One",
        description: "Un monstruo gigante emerge de las profundidades del océano y se dispone a atacar Japón justo cuando la nación trata de recuperarse tras la destrucción ocasionada por la Segunda Guerra Mundial.",
        director: "Takashi Yamazaki",
        image: "https://m.media-amazon.com/images/I/914kxC4gHUL._UF894,1000_QL80_.jpg",
    },

    // Add more card objects as needed
];

const HomeCards = () => {
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
