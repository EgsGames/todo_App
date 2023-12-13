import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';
import { IconButton } from 'react-native-paper';
import Fallback from '../components/Fallback';

const TodoScreen = () => {
  // Init local states
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  // Load todos from AsyncStorage when component mounts
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const savedTodos = await AsyncStorage.getItem('todos');
        if (savedTodos !== null) {
          setTodoList(JSON.parse(savedTodos));
        }
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    };

    loadTodos();
  }, []);

  // Handle Add Todo
  const handleAddTodo = () => {
    if (todo === '') {
      return;
    }

    const newTodo = { id: Date.now().toString(), title: todo };
    setTodoList([...todoList, newTodo]);
    setTodo('');

    // Save updated todos to AsyncStorage
    saveTodos([...todoList, newTodo]);
  };

  // Handle Delete
  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);

    // Save updated todos to AsyncStorage
    saveTodos(updatedTodoList);
  };

  // Handle Edit todo
  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  // Handle Update
  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }

      return item;
    });

    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo('');

    // Save updated todos to AsyncStorage
    saveTodos(updatedTodos);
  };

  // Save todos to AsyncStorage
  const saveTodos = async (todos) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error('Error saving todos:', error);
    }
  };

  // Render todo
  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: '#1e90ff',
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 8,
          marginBottom: 12,
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '800', flex: 1 }}>
          {item.title}
        </Text>

        <IconButton icon="delete" iconColor="#fff" onPress={() => handleEditTodo(item)} />
        <IconButton icon="trash-can" iconColor="#fff" onPress={() => handleDeleteTodo(item.id)} />
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 16, marginTop: 40 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: '#000',
          borderRadius: 6,
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
        placeholder="Add a task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />

      {editedTodo ? (
        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            borderRadius: 6,
            paddingVertical: 12,
            marginVertical: 34,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
          }}
          onPress={() => handleUpdateTodo()}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            borderRadius: 6,
            paddingVertical: 12,
            marginVertical: 34,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
          }}
          onPress={() => handleAddTodo()}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Add</Text>
        </TouchableOpacity>
      )}

      {/* Render todo list */}
      <FlatList data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <Fallback />}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
