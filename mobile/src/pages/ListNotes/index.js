import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'
import api from 'axios';

import './styles';
import { styles } from './styles';

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
      <TouchableOpacity style={styles.buttonAdd}>
          <Icon name="plus" size={18} color="#fff"/>
      </TouchableOpacity>
    </View>
  );
}


