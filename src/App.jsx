import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Provider as PaperProvider } from 'react-native-paper';

const CalculatorApp = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <TextInput
          label="Input"
          value={input}
          style={styles.input}
          disabled
        />
        <TextInput
          label="Result"
          value={result}
          style={styles.result}
          disabled
        />
        <View style={styles.row}>
          {['7', '8', '9', '/'].map((value) => (
            <Button key={value} mode="contained" onPress={() => handlePress(value)}>
              {value}
            </Button>
          ))}
        </View>
        <View style={styles.row}>
          {['4', '5', '6', '*'].map((value) => (
            <Button key={value} mode="contained" onPress={() => handlePress(value)}>
              {value}
            </Button>
          ))}
        </View>
        <View style={styles.row}>
          {['1', '2', '3', '-'].map((value) => (
            <Button key={value} mode="contained" onPress={() => handlePress(value)}>
              {value}
            </Button>
          ))}
        </View>
        <View style={styles.row}>
          {['0', '.', '=', '+'].map((value) => (
            <Button key={value} mode="contained" onPress={value === '=' ? handleCalculate : () => handlePress(value)}>
              {value}
            </Button>
          ))}
        </View>
        <Button mode="contained" onPress={handleClear} style={styles.clearButton}>
          Clear
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  result: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  clearButton: {
    marginTop: 20,
  },
});

export default CalculatorApp;
