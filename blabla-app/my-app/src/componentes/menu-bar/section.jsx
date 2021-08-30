
import React, { useEffect } from 'react'
import jeanneauSun1 from '../../assets/jeanneauSun1.png'
import jeanneauSun2 from '../../assets/jeanneauSun2.png'
import menorca from '../../assets/formentera.png'
import formentera from '../../assets/menorca.png'
import islas from '../../assets/islascanarias.png'
import azimut from '../../assets/azimut.png'
import './section.css'



function Sectioncards() {

    return (

        <section className="cards-container">
            <h2 className="encabezado">Dónde te gustaria ir</h2>
            <div className="firstCards">

                
            <img className="firstcardsImage" src={islas} alt="" />
               <img className="firstcardsImage" src={formentera} alt="" />
               <img className="firstcardsImage" src={menorca} alt="" />
                

                

            </div>

            <h2>Destacados</h2>
            <div className="secondCards">
                <div className="seconddivCards">
                    <img src={jeanneauSun1} alt="" />
                    <p>
                        Jeanneau Sun Odissey 35<br></br>
                        Travesía: Denia-La Manga<br></br>
                        1ª Quincena de julio<br></br>
                    </p>
                </div>
                <div className="seconddivCards">
                    <img src={jeanneauSun2} alt="" />
                    <p>
                        Jeanneau Sun Odissey 35<br></br>
                        Travesía: Denia-Tabarca<br></br>
                        2ª Quincena de julio<br></br>
                    </p>
                </div>
                <div className="seconddivCards">
                    <img src={azimut} alt="" />
                    <p>
                        Azimut 68<br></br>
                        Travesía: La Manga-Vera<br></br>
                        2ª semana de julio<br></br>
                    </p>
                </div>
            </div>
        </section>

    )
        ;
}

export default Sectioncards