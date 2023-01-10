import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import Colors from "../util/colors";

const StartGameScreen = ({ pickedNumberHandler }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(inputText) {
    setEnteredNumber(inputText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    pickedNumberHandler(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess the Number</Title>
      <Card>
        <InstructionText>Enter number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          value={enteredNumber}
          onChangeText={numberInputHandler}
          keyboardType="number-pad"
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    color: Colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttonContainer: {
    flex: 1,
  },
});
