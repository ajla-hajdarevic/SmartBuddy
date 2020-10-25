import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { ProfilePicture } from '../components/ProfilePicture';
import {Username} from '../components/Username';
import { Input } from 'react-native-elements';


export default function EditProfile() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={{flex:1, alignItems: 'center'}}> 
        <ProfilePicture></ProfilePicture>
        <Username style={styles.userName}>Username</Username> 
        <Text style={styles.userEmail}>username@email.com</Text>
      </View>

      <Input
                    labelStyle={{ color: 'black' }}

                    containerStyle={{ paddingTop: 20, }}
                    label='Change Password'
                    placeholder='New Password' />
      <Input
                    labelStyle={{ color: 'black' }}
                    containerStyle={{ paddingTop: 20, }}
                    label='Bio'
                    placeholder='Enter Bio' />
                <Input
                    labelStyle={{ color: 'black' }}
                    containerStyle={{ paddingTop: 20, }}
                    label='Fields'
                    placeholder='Math,Geo,Bio' />
                <Input
                    labelStyle={{ color: 'black' }}
                    containerStyle={{ paddingTop: 20, }}
                    label='Uni'
                    placeholder='SSST' />
                <Input
                    labelStyle={{ color: 'black' }}
                    containerStyle={{ paddingTop: 20, }}
                    label='Price per Hour'
                    placeholder='daj puno para' />
                


      {/* <OptionButton
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <OptionButton
        icon="md-compass"
        label="Read the React Navigation documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Ask a question on the forums"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      /> */}
    </ScrollView>
  );
}

EditProfile.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingTop: 15,
    padding: 10,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  userName: {
    fontSize: 23,
    fontWeight: 'bold',
    padding: 2,
  },
  userEmail: {
    fontSize: 17,
    fontWeight: '100',
    padding: 5,
  },
  editButton: {
    marginTop: 5,
    padding: 3,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderRadius: 13,
    borderWidth: 1,
  },
  editButtonText: {
    fontSize: 17,
    color: 'grey',
    fontWeight:'500',
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  filterButtons: {
    marginTop:20,
    padding: 3,
    backgroundColor: '#f3f3f3',
    borderColor: '#f3f3f3',
    borderRadius: 20,
    borderWidth: 1,
  },
  filterButtonsText: {
    padding:5,
    paddingLeft: 25,
    paddingRight: 25,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
