import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

class MatchScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.screenTitle}>Match</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30
  },
  screenTitle: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  }
});

export default MatchScreen;
