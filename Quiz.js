// Main App Component
function FlashcardApp() {
    const [flashcards, setFlashcards] = useState([]);
    const [currentTab, setCurrentTab] = useState('add');
    const [quizIndex, setQuizIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [stats, setStats] = useState({correct: 0, total: 0});
  
    // Similar functionality as web version
    // with mobile-optimized UI components
    return (
      <View style={styles.container}>
        <TabBar currentTab={currentTab} onTabChange={setCurrentTab} />
        
        {currentTab === 'add' && (
          <AddFlashcardScreen onAdd={addFlashcard} />
        )}
        
        {currentTab === 'view' && (
          <FlashcardList 
            flashcards={flashcards} 
            onDelete={deleteFlashcard} 
          />
        )}
        
        {currentTab === 'quiz' && (
          <QuizScreen 
            flashcards={flashcards}
            currentIndex={quizIndex}
            showAnswer={showAnswer}
            onReveal={() => setShowAnswer(true)}
            onCorrect={handleCorrect}
            onWrong={handleWrong}
            onNext={nextQuestion}
          />
        )}
        
        {currentTab === 'stats' && (
          <StatsScreen stats={stats} />
        )}
      </View>
    );
  }