import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = (type: string) => {
    if (type === "add") {
      setCounter(counter + 1);
    } else if (type = "subtract") {
      console.log({type})
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  }

  return (
    <View>
      <Text>Click Counter</Text>
      <Text>{counter}</Text>
      <Button 
        onPress={() => handleClick("add")} 
        title="Add One"
      />
      <Button onPress={() => handleClick("subtract")} title="Subtract One"/>
      <Button onPress={() => setCounter(0)} title="Reset"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "purple"
  }
});
