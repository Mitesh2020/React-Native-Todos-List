import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
          {/* Displaying all tasks */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Add a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
