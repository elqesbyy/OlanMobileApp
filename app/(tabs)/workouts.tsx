import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';

const workouts = [
  { id: '1', name: 'Cardio Blast', duration: '20 min', calories: 200, image: require('@/assets/images/cardio.png') },
  { id: '2', name: 'Yoga Flow', duration: '15 min', calories: 100, image: require('@/assets/images/yoga.png') },
  { id: '3', name: 'Strength Training', duration: '30 min', calories: 300, image: require('@/assets/images/strength.png') },
  { id: '4', name: 'HIIT', duration: '25 min', calories: 250, image: require('@/assets/images/hiit.png') },
];

export default function WorkoutsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Workouts 💪</Text>

      <Text style={styles.subHeader}>Recommended for You</Text>
      <FlatList
        horizontal
        data={workouts}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.info}>{item.duration} · {item.calories} cal</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startText}>Start</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.subHeader}>All Workouts</Text>
      {workouts.map((item) => (
        <TouchableOpacity key={item.id} style={styles.listItem}>
          <Text style={styles.listName}>{item.name}</Text>
          <Text style={styles.listInfo}>{item.duration} · {item.calories} cal</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9', paddingVertical: 16 },
  header: { fontSize: 28, fontWeight: 'bold', paddingHorizontal: 16, marginBottom: 16, color: '#333' },
  subHeader: { fontSize: 20, fontWeight: 'bold', paddingHorizontal: 16, marginTop: 16, marginBottom: 8, color: '#555' },

  card: {
    width: 180,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 16,
  },
  image: { width: '100%', height: 100, borderRadius: 12, marginBottom: 8 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  info: { fontSize: 14, color: '#777', marginBottom: 8 },
  startButton: { backgroundColor: '#4CAF50', paddingVertical: 6, borderRadius: 12, alignItems: 'center' },
  startText: { color: '#fff', fontWeight: 'bold' },

  listItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  listName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  listInfo: { fontSize: 14, color: '#777', marginTop: 4 },
});
