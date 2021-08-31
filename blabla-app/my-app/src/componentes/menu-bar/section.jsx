import React, { useEffect } from 'react'
import jeanneauSun1 from '../../assets/jeanneauSun1.png'
import jeanneauSun2 from '../../assets/jeanneauSun2.png'
import menorca from '../../assets/formentera.png'
import formentera from '../../assets/menorca.png'
import islas from '../../assets/islascanarias.png'
import azimut from '../../assets/azimut.png'
import './section.css'
import{useTranslation} from 'react-i18next';
function Sectioncards() {
    const [t, i18n] = useTranslation("global");
    return (
        <section className="cards-container">
            <h2 className="encabezado">{t("logins.primertitulocard")}</h2>
            <div className="firstCards">
            <img className="firstcardsImage" src={islas} alt="" />
               <img className="firstcardsImage" src={formentera} alt="" />
               <img className="firstcardsImage" src={menorca} alt="" />
            </div>
            <h2>{t("logins.segundotitulocard")}</h2>
            <div className="secondCards">
                <div className="seconddivCards">
                    <img src={jeanneauSun1} alt="" />
                    <h3>
                        Jeanneau Sun Odissey 35<br></br>
                    </h3>
                    <h4>
                    <spam className="subtext">{t("logins.firstcardinfo1")}<br></br></spam>
                    {t("logins.firstcardinfo2")}<br></br>
                    </h4>
                </div>
                <div className="seconddivCards">
                    <img src={jeanneauSun2} alt="" />
                    <h3>
                        Jeanneau Sun Odissey 35<br></br>
                    </h3>
                    <h4>
                    <spam className="subtext">{t("logins.secondcardinfo1")}<br></br></spam>
                    {t("logins.secondcardinfo2")}<br></br>
                    </h4>
                </div>
                <div className="seconddivCards">
                    <img src={azimut} alt="" />
                    <h3>
                        Azimut 68<br></br>
                    </h3>
                    <h4>
                    <spam className="subtext">{t("logins.thirdcardinfo1")}<br></br></spam>
                    {t("logins.thirdcardinfo2")}<br></br>
                    </h4>
                </div>
            </div>
        </section>
    )
        ;
}
export default Sectioncards