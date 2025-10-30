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
        <div className="hero-section">
          <h1 className="hero-title">Welcome to VocabMaster</h1>
          <p className="hero-subtitle">Enhance your vocabulary with our interactive translation and quiz features!</p>
        </div>
        <IonGrid className="grid-container">
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <IonCard className="welcome-card">
                <IonCardHeader>
                  <IonCardTitle>Get Started Today</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Unlock the power of words and improve your language skills effortlessly.</p>
                </IonCardContent>
              </IonCard>
              {isLoggedIn ? (
                <>
                  <IonCard className="feature-card">
                    <IonCardHeader>
                      <IonCardTitle>Explore Features</IonCardTitle>
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
                  <IonCard className="more-card">
                    <IonCardHeader>
                      <IonCardTitle>Learn More</IonCardTitle>
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
                <IonCard className="get-started-card">
                  <IonCardHeader>
                    <IonCardTitle>Join Us Now</IonCardTitle>
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
              <IonCard className="legal-card">
                <IonCardHeader>
                  <IonCardTitle>Legal Information</IonCardTitle>
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
