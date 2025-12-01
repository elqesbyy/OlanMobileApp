import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const workouts = [
  { id: '1', name: 'Cardio Blast', duration: '20 min', calories: 200, image: require('@/assets/images/cardio.png') },
  { id: '2', name: 'Yoga Stretch', duration: '15 min', calories: 100, image: require('@/assets/images/yoga.png') },
  { id: '3', name: 'Strength Training', duration: '30 min', calories: 300, image: require('@/assets/images/strength.png') },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Welcome Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Good Morning, User! 💪</Text>
        <Text style={styles.subtitle}>Ready for your workout today?</Text>
      </View>

      {/* Today's Goal */}
      <View style={styles.goalCard}>
        <Text style={styles.goalTitle}>Today's Goal</Text>
        <Text style={styles.goalText}>🔥 Burn 300 calories</Text>
        <Text style={styles.goalText}>🏃‍♂️ 30 min Exercise</Text>
      </View>

      {/* Quick Workouts */}
      <Text style={styles.sectionTitle}>Quick Workouts</Text>
      <FlatList
        horizontal
        data={workouts}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.workoutCard}>
            <Image source={item.image} style={styles.workoutImage} />
            <Text style={styles.workoutName}>{item.name}</Text>
            <Text style={styles.workoutInfo}>{item.duration} · {item.calories} cal</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  header: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  goalCard: {
    backgroundColor: '#A1CEDC',
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  goalText: {
    fontSize: 16,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  workoutCard: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  workoutImage: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
  },
  workoutName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  workoutInfo: {
    fontSize: 14,
    color: '#777',
  },
});
