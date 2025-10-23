import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonIcon,
} from '@ionic/react';
import { searchOutline, volumeHighOutline } from 'ionicons/icons';

const Vocabulary: React.FC = () => {
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [searched, setSearched] = useState(false);

  // Simple mock translation data
  const mockTranslations: { [key: string]: string } = {
    hello: 'hola',
    goodbye: 'adiós',
    thank: 'gracias',
    please: 'por favor',
    water: 'agua',
    food: 'comida',
    house: 'casa',
    car: 'coche',
    book: 'libro',
    school: 'escuela',
  };

  const handleTranslate = () => {
    const lowerWord = word.toLowerCase();
    const translated = mockTranslations[lowerWord] || 'Translation not found';
    setTranslation(translated);
    setSearched(true);
  };

  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

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
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Translate a Word</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonLabel position="floating">Enter English word</IonLabel>
                    <IonInput
                      value={word}
                      onIonChange={(e) => setWord(e.detail.value!)}
                      placeholder="e.g., hello, goodbye"
                    />
                  </IonItem>
                  <IonButton expand="full" onClick={handleTranslate} className="ion-margin-top">
                    <IonIcon icon={searchOutline} slot="start" />
                    Translate
                  </IonButton>
                  {searched && (
                    <div className="ion-margin-top">
                      <IonText>
                        <h3>Translation:</h3>
                        <p>{translation}</p>
                      </IonText>
                      <IonButton
                        fill="outline"
                        onClick={() => speakWord(translation)}
                        className="ion-margin-top"
                      >
                        <IonIcon icon={volumeHighOutline} slot="start" />
                        Listen to Translation
                      </IonButton>
                    </div>
                  )}
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Supported Words</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Try translating: hello, goodbye, thank, please, water, food, house, car, book, school</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Vocabulary;
