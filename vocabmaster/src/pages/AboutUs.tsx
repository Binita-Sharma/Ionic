import React from 'react';
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
} from '@ionic/react';

const AboutUs: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>About Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Welcome to VocabMaster</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>VocabMaster is your ultimate companion for vocabulary building and language learning. Our app is designed to help you expand your word knowledge through interactive translations and engaging quizzes.</p>
                  <h3>Our Mission</h3>
                  <p>To make language learning accessible, fun, and effective for everyone, regardless of their background or proficiency level.</p>
                  <h3>What We Offer</h3>
                  <ul>
                    <li>Instant word translations</li>
                    <li>Interactive vocabulary quizzes</li>
                    <li>Progress tracking</li>
                    <li>User-friendly interface</li>
                    <li>Responsive design for all devices</li>
                  </ul>
                  <h3>Our Team</h3>
                  <p>VocabMaster is developed by a passionate team of language enthusiasts and technology experts committed to revolutionizing the way people learn new words.</p>
                  <h3>Contact Us</h3>
                  <p>If you have any questions, suggestions, or feedback, please don't hesitate to reach out to us through our Contact page.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AboutUs;
