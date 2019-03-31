import React, { Component } from 'react';
import {
  Image, ScrollView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import frontImage from '../assets/images/front-image.png';

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  handleLoginPress = () => {
    const { navigation } = this.props;
    const { navigate } = navigation;
    navigate('Main');
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image source={frontImage} style={styles.welcomeImage} />
          </View>

          <View style={styles.helpContainer}>
            <Text style={styles.tabBarInfoText}>Encontre pessoas veganas e vegetarianas</Text>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <TouchableOpacity onPress={this.handleLoginPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Ir para a tela logado</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF7'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 300,
    height: 350,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  WelcomeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  tabBarInfoContainer: {
    alignItems: 'center'
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
});

export default WelcomeScreen;
