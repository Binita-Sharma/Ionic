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
  IonTextarea,
  IonButton,
  IonText,
} from '@ionic/react';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Contact Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Get in Touch</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
                  {!submitted ? (
                    <>
                      <IonItem>
                        <IonLabel position="floating">Name</IonLabel>
                        <IonInput
                          value={name}
                          onIonChange={(e) => setName(e.detail.value!)}
                        />
                      </IonItem>
                      <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput
                          type="email"
                          value={email}
                          onIonChange={(e) => setEmail(e.detail.value!)}
                        />
                      </IonItem>
                      <IonItem>
                        <IonLabel position="floating">Message</IonLabel>
                        <IonTextarea
                          value={message}
                          onIonChange={(e) => setMessage(e.detail.value!)}
                          rows={4}
                        />
                      </IonItem>
                      <IonButton expand="full" onClick={handleSubmit} className="ion-margin-top">
                        Send Message
                      </IonButton>
                    </>
                  ) : (
                    <IonText color="success">
                      <p>Thank you for your message! We'll get back to you soon.</p>
                    </IonText>
                  )}
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Other Ways to Reach Us</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p><strong>Email:</strong> support@vocabmaster.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Language Street, Vocabulary City, VC 12345</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ContactUs;
