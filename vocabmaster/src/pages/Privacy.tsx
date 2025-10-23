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
} from '@ionic/react';

const Privacy: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Privacy Policy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <h2>Privacy Policy</h2>
              <p>Your privacy is important to us. It is VocabMaster's policy to respect your privacy regarding any information we may collect from you across our app.</p>
              <h3>1. Information We Collect</h3>
              <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
              <h3>2. How We Use Information</h3>
              <p>We use the information we collect in various ways, including to:</p>
              <ul>
                <li>Provide, operate, and maintain our app</li>
                <li>Improve, personalize, and expand our app</li>
                <li>Understand and analyze how you use our app</li>
                <li>Develop new products, services, features, and functionality</li>
              </ul>
              <h3>3. Information Sharing</h3>
              <p>We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as described in this policy.</p>
              <h3>4. Data Security</h3>
              <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>
              <h3>5. Cookies</h3>
              <p>We use cookies to enhance your experience on our app. You can choose to disable cookies through your browser settings.</p>
              <h3>6. Third-party Services</h3>
              <p>Our app may contain links to third-party websites or services that are not owned or controlled by VocabMaster. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.</p>
              <h3>7. Changes to This Privacy Policy</h3>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
              <h3>8. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us.</p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Privacy;
