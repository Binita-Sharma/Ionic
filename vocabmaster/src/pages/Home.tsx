import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/react';
import { bookOutline, schoolOutline, personOutline, informationCircleOutline, callOutline, logInOutline, logOutOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    history.push('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>VocabMaster</IonTitle>
          {isLoggedIn && (
            <IonButton slot="end" onClick={handleLogout}>
              <IonIcon icon={logOutOutline} />
              Logout
            </IonButton>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">VocabMaster</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Welcome to VocabMaster</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Enhance your vocabulary with our interactive translation and quiz features!</p>
                </IonCardContent>
              </IonCard>
              {isLoggedIn ? (
                <>
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>Features</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonButton expand="full" routerLink="/vocabulary" className="ion-margin-bottom">
                        <IonIcon icon={bookOutline} slot="start" />
                        Word Translation
                      </IonButton>
                      <IonButton expand="full" routerLink="/quiz" className="ion-margin-bottom">
                        <IonIcon icon={schoolOutline} slot="start" />
                        Take Quiz
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>More</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonButton expand="full" routerLink="/about-us" fill="outline" className="ion-margin-bottom">
                        <IonIcon icon={informationCircleOutline} slot="start" />
                        About Us
                      </IonButton>
                      <IonButton expand="full" routerLink="/contact-us" fill="outline" className="ion-margin-bottom">
                        <IonIcon icon={callOutline} slot="start" />
                        Contact Us
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </>
              ) : (
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Get Started</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonButton expand="full" routerLink="/login" className="ion-margin-bottom">
                      <IonIcon icon={logInOutline} slot="start" />
                      Login
                    </IonButton>
                    <IonButton expand="full" routerLink="/signup" fill="outline">
                      <IonIcon icon={personOutline} slot="start" />
                      Sign Up
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              )}
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Legal</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand="full" routerLink="/terms" fill="clear" size="small">
                    Terms and Conditions
                  </IonButton>
                  <IonButton expand="full" routerLink="/privacy" fill="clear" size="small">
                    Privacy Policy
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
