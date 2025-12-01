import { ThemedView } from '@/components/themed-view';
import React, { useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
};

export default function AdviserScreen() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hello! I am your AI fitness adviser. Ask me anything!', sender: 'ai' },
  ]);
  const [input, setInput] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
    };

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: `AI Adviser says: You asked "${input}". Let's stay consistent with your fitness goals!`,
      sender: 'ai',
    };

    setMessages(prev => [...prev, userMessage, aiMessage]);
    setInput('');

    // Scroll to bottom
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.header}>AI Adviser 🤖</Text>

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 16 }}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.aiMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your question..."
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F9F9F9' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  messageContainer: {
    padding: 12,
    borderRadius: 12,
    marginVertical: 4,
    maxWidth: '80%',
  },
  userMessage: { backgroundColor: '#DCF8C6', alignSelf: 'flex-end' },
  aiMessage: { backgroundColor: '#E3E3E3', alignSelf: 'flex-start' },
  messageText: { fontSize: 16 },
  inputContainer: { flexDirection: 'row', marginTop: 8, alignItems: 'center' },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: '#4CAF50',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendText: { color: '#fff', fontWeight: 'bold' },
});
