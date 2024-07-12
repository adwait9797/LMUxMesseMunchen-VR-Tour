import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';
import logo from './assets/logo.png';
import imageIcon from './assets/image_icon.svg';
import videoIcon from './assets/video_icon.svg';

const translations = {
  en: {
    experience: 'Experience',
    nowInVR: 'Now in VR',
    selectTourMethod: 'Select your tour method:',
    selfGuidedTour: 'Self Guided Tour',
    selfGuidedSubtitle: 'Explore at your own pace',
    guidedTour: 'Guided Tour',
    guidedSubtitle: 'Join a guided session',
    suggestedForEmployees: 'Suggested for Employees',
    suggestedForExhibitors: 'Suggested for Exhibitors',
    startTour: 'Start Tour',
    resources: 'Resources',
    contactUs: 'Contact Us',
    helpCenter: 'Help Center',
    facts: [
      "Did you know? In 2006, Trade Fair Center Messe München was transformed into the media center of the FIFA World Cup and hosted the church service during the Pope's visit.",
      "Did you know? With 200,000 square meters of exhibition space, the Trade Fair Center is the perfect location for trade fairs.",
      "Did you know? Messe München hosts XXL product presentations and events with plenums of up to 6,000 people."
    ]
  },
  de: {
    experience: 'Erleben',
    nowInVR: 'Jetzt in VR',
    selectTourMethod: 'Wählen Sie Ihre Tourmethode:',
    selfGuidedTour: 'Selbstgeführte Tour',
    selfGuidedSubtitle: 'Erkunden Sie in Ihrem eigenen Tempo',
    guidedTour: 'Geführte Tour',
    guidedSubtitle: 'Nehmen Sie an einer geführten Sitzung teil',
    suggestedForEmployees: 'Für Mitarbeiter empfohlen',
    suggestedForExhibitors: 'Für Aussteller empfohlen',
    startTour: 'Tour starten',
    resources: 'Ressourcen',
    contactUs: 'Kontaktieren Sie uns',
    helpCenter: 'Hilfezentrum',
    facts: [
      "Wussten Sie schon? 2006 wurde das Messegelände der Messe München in das Medienzentrum der FIFA-Weltmeisterschaft verwandelt und beherbergte den Gottesdienst während des Papstbesuchs.",
      "Wussten Sie schon? Mit 200.000 Quadratmetern Ausstellungsfläche ist das Messegelände der perfekte Ort für Messen.",
      "Wussten Sie schon? Die Messe München veranstaltet XXL-Produktpräsentationen und Events mit Plenen von bis zu 6.000 Personen."
    ]
  },
};

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [randomFact, setRandomFact] = useState('');
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * translations[language].facts.length);
    setRandomFact(translations[language].facts[randomIndex]);
  }, [language]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleStartTour = () => {
    if (selectedOption) {
      const destination = selectedOption === 'guided' ? '/guided-tour' : '/self-guided-tour-instructions';
      navigate(destination);
    }
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    const randomIndex = Math.floor(Math.random() * translations[lang].facts.length);
    setRandomFact(translations[lang].facts[randomIndex]);
  };

  const t = translations[language];

  return (
    <div className="home">
      <div className="header">
        <img src={logo} alt="Messe München" className="logo" />
        <div className="language-switcher">
          Language: 
          <button onClick={() => handleLanguageChange('en')}>EN</button> |
          <button onClick={() => handleLanguageChange('de')}>DE</button>
        </div>
      </div>
      <div className="main-text-container">
        <div className="main-text">
          {t.experience} <span className="highlight">Messe München</span>
          <small>{t.nowInVR}</small>
          <p className="random-fact">{randomFact}</p>
          <div className="resources">
            <small>
              {t.resources}: <Link to="/contact-us">{t.contactUs}</Link> | <Link to="/help-center">{t.helpCenter}</Link>
            </small>
          </div>
        </div>
      </div>
   
      <div className="card">
        <h2>{t.selectTourMethod}</h2>
        <div
          className={`option ${selectedOption === 'self' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('self')}
        >
          <img src={imageIcon} alt="Self-guided" />
          <div className="option-text">
            <div className="option-title">{t.selfGuidedTour}</div>
            <div className="option-subtitle">{t.selfGuidedSubtitle}</div>
            <div className="option-subtitle"><b>{t.suggestedForEmployees}</b></div>
          </div>
        </div>
        <div
          className={`option ${selectedOption === 'guided' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('guided')}
        >
          <img src={videoIcon} alt="Guided" />
          <div className="option-text">
            <div className="option-title">{t.guidedTour}</div>
            <div className="option-subtitle">{t.guidedSubtitle}</div>
            <div className="option-subtitle"><b>{t.suggestedForExhibitors}</b></div>
          </div>
        </div>
        <button className="start-button" onClick={handleStartTour}>
          {t.startTour}
        </button>
      </div>
    </div>
  );
};

export default Home;
