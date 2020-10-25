import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import { TutorCard } from '../components/TutorCard';
import { Icon } from 'react-native-elements';



export default function Login({ navigation }) {

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Sign in</Text>

                <Input
                    labelStyle={{ color: 'black' }}

                    containerStyle={{ paddingTop: 20, }}
                    label='Username'
                    rightIcon={
                        <Icon
                            name='code'
                            size={24}
                            color='#d3d3d3'
                        />
                    }
                    placeholder='enter username' />

                <Input
                    labelStyle={{ color: 'black' }}

                    containerStyle={{ paddingTop: 20, }}
                    label='Password'
                    rightIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='#d3d3d3'
                        />
                    }
                    placeholder='enter password' />
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.SignIn}>
                    <Text style={styles.SignInText}>Sign in</Text>
                </TouchableOpacity>
            </View>



        </ScrollView>



    );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 20,
    justifyContent: "space-evenly",
  },
  welcomeContainer: {
    alignItems: "stretch",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 23,
    marginTop: 120,

    marginBottom: 40,
    marginLeft: 10,
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
  },

  SignIn: {
    backgroundColor: "rgba(255,71,105, 1)",
    alignItems: "stretch",
    borderRadius: 10,
    marginTop: 30,
  },
  SignInText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 15,
  },
  categoriesContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  SignIn: {
    backgroundColor: "#3D90CE",
    alignItems: "stretch",
    borderRadius: 20,
    marginTop: 100,
  },
  SignInText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 15,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "left",
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
  filterButtons: {
    padding: 3,
    backgroundColor: "#F3F3F3",
    borderColor: "#F3F3F3",
    borderRadius: 20,
    borderWidth: 1,
  },
  filterButtonsText: {
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
  },
});
