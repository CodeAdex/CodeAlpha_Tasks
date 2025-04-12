import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';

const quotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  // ... same quotes as above
];

const App = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const shareQuote = async () => {
    try {
      await Share.share({
        message: `"${currentQuote.quote}" - ${currentQuote.author}`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inspirational Quote Generator</Text>
      
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>"{currentQuote.quote}"</Text>
        <Text style={styles.author}>— {currentQuote.author}</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={generateQuote}>
        <Text style={styles.buttonText}>Generate Quote</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.shareButton} onPress={shareQuote}>
        <Text style={styles.shareButtonText}>Share Quote</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  quoteContainer: {
    marginVertical: 30,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
  },
  quote: {
    fontSize: 18,
    lineHeight: 26,
    color: '#333',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  shareButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  shareButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});