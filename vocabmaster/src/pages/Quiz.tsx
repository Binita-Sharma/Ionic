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
  IonButton,
  IonText,
  IonProgressBar,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';

interface Question {
  question: string;
  options: string[];
  correct: number;
  language: string;
}

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const questions: Question[] = [
    {
      question: "What is the Hindi word for 'hello'?",
      options: ["Namaste", "Alvida", "Dhanyavaad", "Kripaya"],
      correct: 0,
      language: "Hindi",
    },
    {
      question: "What does 'Paani' mean in English?",
      options: ["Fire", "Water", "Earth", "Air"],
      correct: 1,
      language: "Hindi",
    },
    {
      question: "What is the Hindi word for 'goodbye'?",
      options: ["Namaste", "Alvida", "Dhanyavaad", "Kripaya"],
      correct: 1,
      language: "Hindi",
    },
    {
      question: "How do you say 'please' in Hindi?",
      options: ["Namaste", "Alvida", "Dhanyavaad", "Kripaya"],
      correct: 3,
      language: "Hindi",
    },
    {
      question: "What is the translation of 'Ghar'?",
      options: ["Car", "House", "Book", "School"],
      correct: 1,
      language: "Hindi",
    },
    {
      question: "How do you say 'thank you' in Telugu?",
      options: ["Dayachesi", "Veedkolu", "Dhanyavaadalu", "Namaskaram"],
      correct: 2,
      language: "Telugu",
    },
    {
      question: "What does 'Dayachesi' mean?",
      options: ["Excuse me", "Please", "Thank you", "Goodbye"],
      correct: 1,
      language: "Telugu",
    },
    {
      question: "What does 'Aahaaram' mean in English?",
      options: ["Water", "Food", "House", "Car"],
      correct: 1,
      language: "Telugu",
    },
    {
      question: "What is the Telugu word for 'water'?",
      options: ["Neeru", "Aahaaram", "Illu", "Car"],
      correct: 0,
      language: "Telugu",
    },
    {
      question: "What does 'School' mean in English?",
      options: ["Car", "House", "Book", "School"],
      correct: 3,
      language: "English",
    },
  ];

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === filteredQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setSelectedLanguage(null);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  const filteredQuestions = selectedLanguage ? questions.filter(q => q.language === selectedLanguage) : [];

  const progress = selectedLanguage ? (currentQuestion + 1) / filteredQuestions.length : 0;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Vocabulary Quiz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6">
              {!selectedLanguage ? (
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Select a Language</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      <p>Choose the language you want to learn:</p>
                    </IonText>
                    <IonButton
                      expand="full"
                      onClick={() => handleLanguageSelect('Hindi')}
                      className="ion-margin-top"
                    >
                      Hindi
                    </IonButton>
                    <IonButton
                      expand="full"
                      onClick={() => handleLanguageSelect('Telugu')}
                      className="ion-margin-top"
                    >
                      Telugu
                    </IonButton>
                    <IonButton
                      expand="full"
                      onClick={() => handleLanguageSelect('English')}
                      className="ion-margin-top"
                    >
                      English
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              ) : !quizCompleted ? (
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Question {currentQuestion + 1} of {filteredQuestions.length}</IonCardTitle>
                    <IonProgressBar value={progress} />
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      <h3>{filteredQuestions[currentQuestion].question}</h3>
                    </IonText>
                    <IonList>
                      {filteredQuestions[currentQuestion].options.map((option, index) => (
                        <IonItem
                          key={index}
                          button
                          onClick={() => handleAnswerSelect(index)}
                          color={selectedAnswer === index ? 'primary' : undefined}
                        >
                          <IonLabel>{option}</IonLabel>
                        </IonItem>
                      ))}
                    </IonList>
                    <IonButton
                      expand="full"
                      onClick={handleNext}
                      disabled={selectedAnswer === null}
                      className="ion-margin-top"
                    >
                      {currentQuestion < filteredQuestions.length - 1 ? 'Next' : 'Finish Quiz'}
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              ) : (
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Quiz Completed!</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      <h2>Your Score: {score} out of {filteredQuestions.length}</h2>
                      <p>
                        {score === filteredQuestions.length
                          ? 'Perfect! You got all questions right!'
                          : score >= filteredQuestions.length * 0.7
                          ? 'Great job! Keep practicing!'
                          : 'Good effort! Try again to improve your score.'}
                      </p>
                    </IonText>
                    <IonButton expand="full" onClick={resetQuiz} className="ion-margin-top">
                      Take Quiz Again
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              )}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Quiz;
