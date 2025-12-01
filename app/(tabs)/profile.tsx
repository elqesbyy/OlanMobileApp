import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header / Avatar */}
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/avatar.png')} // placeholder avatar
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Workouts</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>4500</Text>
          <Text style={styles.statLabel}>Calories</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>45</Text>
          <Text style={styles.statLabel}>Active Days</Text>
        </View>
      </View>

      {/* More options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>My Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  header: { alignItems: 'center', padding: 24, backgroundColor: '#A1CEDC' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 12 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  email: { fontSize: 16, color: '#555', marginBottom: 12 },
  editButton: { backgroundColor: '#4CAF50', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 },
  editText: { color: '#fff', fontWeight: 'bold' },

  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', padding: 16, marginTop: -24 },
  statBox: { alignItems: 'center', backgroundColor: '#fff', padding: 16, borderRadius: 12, width: 100, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, elevation: 3 },
  statNumber: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  statLabel: { fontSize: 14, color: '#777', marginTop: 4 },

  optionsContainer: { marginTop: 24, paddingHorizontal: 16 },
  optionButton: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12, shadowColor: '#000', shadowOpacity: 0.05, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, elevation: 2 },
  optionText: { fontSize: 16, color: '#333' },
});
