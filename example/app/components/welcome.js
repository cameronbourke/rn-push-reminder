import React, { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Welcome = () => (
  <View style={styles.container}>
    <Text>Hey welcome to Push Reminder!</Text>
  </View>
);

export default Welcome;
