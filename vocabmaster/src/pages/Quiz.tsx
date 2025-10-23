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
}

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: Question[] = [
    {
      question: "What is the Spanish word for 'hello'?",
      options: ["Hola", "Adiós", "Gracias", "Por favor"],
      correct: 0,
    },
    {
      question: "What does 'agua' mean in English?",
      options: ["Fire", "Water", "Earth", "Air"],
      correct: 1,
    },
    {
      question: "How do you say 'thank you' in Spanish?",
      options: ["Perdón", "Disculpe", "Gracias", "De nada"],
      correct: 2,
    },
    {
      question: "What is the translation of 'casa'?",
      options: ["Car", "House", "Book", "School"],
      correct: 1,
    },
    {
      question: "What does 'por favor' mean?",
      options: ["Excuse me", "Please", "Thank you", "Goodbye"],
      correct: 1,
    },
  ];

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
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
  };

  const progress = (currentQuestion + 1) / questions.length;

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
              {!quizCompleted ? (
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Question {currentQuestion + 1} of {questions.length}</IonCardTitle>
                    <IonProgressBar value={progress} />
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      <h3>{questions[currentQuestion].question}</h3>
                    </IonText>
                    <IonList>
                      {questions[currentQuestion].options.map((option, index) => (
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
                      {currentQuestion < questions.length - 1 ? 'Next' : 'Finish Quiz'}
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
                      <h2>Your Score: {score} out of {questions.length}</h2>
                      <p>
                        {score === questions.length
                          ? 'Perfect! You got all questions right!'
                          : score >= questions.length * 0.7
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
