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

const Terms: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Terms and Conditions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <h2>Terms and Conditions</h2>
              <p>Welcome to VocabMaster. By using our app, you agree to these terms.</p>
              <h3>1. Acceptance of Terms</h3>
              <p>By accessing and using VocabMaster, you accept and agree to be bound by the terms and provision of this agreement.</p>
              <h3>2. Use License</h3>
              <p>Permission is granted to temporarily download one copy of VocabMaster per device for personal, non-commercial transitory viewing only.</p>
              <h3>3. Disclaimer</h3>
              <p>The materials on VocabMaster are provided on an 'as is' basis. VocabMaster makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              <h3>4. Limitations</h3>
              <p>In no event shall VocabMaster or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use VocabMaster.</p>
              <h3>5. Accuracy of Materials</h3>
              <p>The materials appearing on VocabMaster could include technical, typographical, or photographic errors. VocabMaster does not warrant that any of the materials on its app are accurate, complete, or current.</p>
              <h3>6. Modifications</h3>
              <p>VocabMaster may revise these terms of service for its app at any time without notice. By using this app, you are agreeing to be bound by the then current version of these terms of service.</p>
              <h3>7. Governing Law</h3>
              <p>These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Terms;
