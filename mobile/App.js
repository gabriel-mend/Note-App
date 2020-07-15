import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const notes = [
  {title: "lorem ipsum", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, repudiandae"},
  {title: "lorem ipsum2", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, repudiandae"},
  {title: "lorem ipsum3", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, repudiandae"}, 
  {title: "lorem ipsum4", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, repudiandae"},
  {title: "lorem ipsum4", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, repudiandae"},
]

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>My Notes</Text>
      <ScrollView>
        <View style={styles.gridContainer}>
            {notes.map((item) => (
              <View style={styles.noteContainer}>
                <Text style={styles.noteTitle}>{item.title}</Text>
                <Text style={styles.noteContent}>{item.content}</Text>
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000120",
    marginBottom: 10,
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  noteContainer: {
    width: "45%",
    
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  noteContent: {

  }
});
