/* global __DEV__ */
import React, { Component } from 'react';
import {
  Image, ScrollView, StyleSheet, Text, View, TouchableOpacity
} from 'react-native';

class ProfileScreen extends Component {
  static navigationOptions = {
    header: null
  };

  handleLoginPress = () => {
    const { navigation } = this.props;
    const { navigate } = navigation;
    navigate('Welcome');
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.ProfileContainer}>
            <Text style={styles.screenTitle}>Seu Perfil</Text>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.ProfileImage}
            />
          </View>
          <View style={styles.tabBarInfoContainer}>
            <TouchableOpacity onPress={this.handleLoginPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30
  },
  ProfileContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  ProfileImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  screenTitle: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  },
  tabBarInfoContainer: {
    alignItems: 'center'
  }
});

export default ProfileScreen;
