import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
} from '@ionic/react';
import { searchOutline, volumeHighOutline } from 'ionicons/icons';
import './Vocabulary.css';

const Vocabulary: React.FC = () => {
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [searched, setSearched] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');

  // Simple mock translation data
  const mockTranslations: { [key: string]: { [lang: string]: string } } = {
    hello: { hindi: 'Namaste', telugu: 'Namaskaram' },
    goodbye: { hindi: 'Alvida', telugu: 'Veedkolu' },
    thank: { hindi: 'Dhanyavaad', telugu: 'Dhanyavaadalu' },
    please: { hindi: 'Kripaya', telugu: 'Dayachesi' },
    water: { hindi: 'Paani', telugu: 'Neeru' },
    food: { hindi: 'Khana', telugu: 'Aahaaram' },
    house: { hindi: 'Ghar', telugu: 'Illu' },
    car: { hindi: 'Car', telugu: 'Car' },
    book: { hindi: 'Kitaab', telugu: 'Pustakam' },
    school: { hindi: 'School', telugu: 'Paathashaala' },
    love: { hindi: 'Pyar', telugu: 'Prema' },
    friend: { hindi: 'Dost', telugu: 'Snehitudu' },
    family: { hindi: 'Parivaar', telugu: 'Kutumbam' },
    time: { hindi: 'Samay', telugu: 'Samayam' },
    day: { hindi: 'Din', telugu: 'Roju' },
    night: { hindi: 'Raat', telugu: 'Ratri' },
    morning: { hindi: 'Subah', telugu: 'Udayam' },
    evening: { hindi: 'Sham', telugu: 'Sayantram' },
    money: { hindi: 'Paisa', telugu: 'Dabbu' },
    work: { hindi: 'Kaam', telugu: 'Pani' },
    happy: { hindi: 'Khush', telugu: 'Santoshanga' },
    sad: { hindi: 'Dukhi', telugu: 'Dukhanga' },
    beautiful: { hindi: 'Sundar', telugu: 'Alochaniyam' },
    big: { hindi: 'Bada', telugu: 'Pedda' },
    small: { hindi: 'Chhota', telugu: 'Chinna' },
    hot: { hindi: 'Garam', telugu: 'Vepudu' },
    cold: { hindi: 'Thanda', telugu: 'Tadiya' },
    yes: { hindi: 'Haan', telugu: 'Avunu' },
    no: { hindi: 'Nahin', telugu: 'Kadhu' },
    help: { hindi: 'Madad', telugu: 'Sahayam' },
    doctor: { hindi: 'Doctor', telugu: 'Vaidyam' },
    teacher: { hindi: 'Teacher', telugu: 'Guruvu' },
    student: { hindi: 'Vidyaarthi', telugu: 'Vidyarthi' },
    mother: { hindi: 'Maa', telugu: 'Amma' },
    father: { hindi: 'Papa', telugu: 'Nanna' },
    brother: { hindi: 'Bhai', telugu: 'Sodaru' },
    sister: { hindi: 'Behen', telugu: 'Sodari' },
    dog: { hindi: 'Kutta', telugu: 'Kukka' },
    cat: { hindi: 'Billi', telugu: 'Pilli' },
    sun: { hindi: 'Suraj', telugu: 'Suryudu' },
    moon: { hindi: 'Chand', telugu: 'Chandrudu' },
    rain: { hindi: 'Barish', telugu: 'Vrishti' },
    fire: { hindi: 'Aag', telugu: 'Agni' },
    earth: { hindi: 'Dharti', telugu: 'Bhoomi' },
    sky: { hindi: 'Aasman', telugu: 'Akasham' },
    mountain: { hindi: 'Pahaad', telugu: 'Parvatam' },
    river: { hindi: 'Nadi', telugu: 'Nadi' },
    tree: { hindi: 'Ped', telugu: 'Chettu' },
    flower: { hindi: 'Phool', telugu: 'Puvvu' },
    music: { hindi: 'Sangeet', telugu: 'Sangeetam' },
    dance: { hindi: 'Naach', telugu: 'Nrutyam' },
    game: { hindi: 'Khel', telugu: 'Aata' },
    phone: { hindi: 'Phone', telugu: 'Phone' },
    computer: { hindi: 'Computer', telugu: 'Computer' },
    internet: { hindi: 'Internet', telugu: 'Internet' },
    coffee: { hindi: 'Coffee', telugu: 'Coffee' },
    tea: { hindi: 'Chai', telugu: 'Tea' },
    bread: { hindi: 'Roti', telugu: 'Roti' },
    rice: { hindi: 'Chawal', telugu: 'Vannalu' },
    milk: { hindi: 'Doodh', telugu: 'Palu' },
    fruit: { hindi: 'Phal', telugu: 'Pandu' },
    vegetable: { hindi: 'Sabzi', telugu: 'Kooralu' },
    red: { hindi: 'Laal', telugu: 'Erra' },
    blue: { hindi: 'Neela', telugu: 'Neeli' },
    green: { hindi: 'Hara', telugu: 'Paccha' },
    yellow: { hindi: 'Peela', telugu: 'Pasupu' },
    white: { hindi: 'Safed', telugu: 'Tella' },
    black: { hindi: 'Kala', telugu: 'Nalla' },
  };

  const handleTranslate = () => {
    const lowerWord = word.toLowerCase();
    const translated = mockTranslations[lowerWord]?.[selectedLanguage] || 'Translation not found';
    setTranslation(translated);
    setSearched(true);
  };

  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const supportedWords = Object.keys(mockTranslations);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Vocabulary Translation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="vocabulary-container">
        {/* Stats Card */}
        <div className="stats-card">
          <h2 className="stats-title">Your Learning Progress</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{supportedWords.length}</span>
              <span className="stat-label">Words Available</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Languages</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Practice</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">🎯</span>
              <span className="stat-label">Accuracy</span>
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="language-selector">
          <h2>Choose Your Language</h2>
          <div className="language-buttons">
            <button
              className={`language-btn ${selectedLanguage === 'hindi' ? 'active' : ''}`}
              onClick={() => setSelectedLanguage('hindi')}
            >
              Hindi
            </button>
            <button
              className={`language-btn ${selectedLanguage === 'telugu' ? 'active' : ''}`}
              onClick={() => setSelectedLanguage('telugu')}
            >
              Telugu
            </button>
          </div>
        </div>

        {/* Translation Card */}
        <div className="translation-card">
          <div className="translation-header">
            <h3>Word Translator</h3>
          </div>
          <div className="translation-content">
            <div className="input-group">
              <IonItem>
                <IonLabel position="floating">Enter English word</IonLabel>
                <IonInput
                  value={word}
                  onIonChange={(e) => setWord(e.detail.value!)}
                  placeholder="e.g., hello, goodbye"
                />
              </IonItem>
              <button className="translate-btn" onClick={handleTranslate}>
                <IonIcon icon={searchOutline} />
                Translate
              </button>
            </div>

            {searched && (
              <div className="result-section">
                <div className="translation-result">
                  <div className="result-label">Translation</div>
                  <div className="result-text">{translation}</div>
                  <button className="listen-btn" onClick={() => speakWord(translation)}>
                    <IonIcon icon={volumeHighOutline} />
                    Listen
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Word List Card */}
        <div className="word-list-card">
          <div className="word-list-header">
            <h4>Available Words</h4>
          </div>
          <div className="word-list-content">
            <div className="word-grid">
              {supportedWords.map((wordItem) => (
                <button
                  key={wordItem}
                  className="word-chip"
                  onClick={() => {
                    setWord(wordItem);
                    handleTranslate();
                  }}
                >
                  {wordItem}
                </button>
              ))}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Vocabulary;
