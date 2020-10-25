import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Hi, Lejla!</Text>
          <Text style={styles.welcomeDescription}>Connect with your future tutor.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Tutors')} style={styles.tutorButton}>
            <Text style={styles.tutorButtonText}>Find your tutor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesText}>Categories</Text>

          
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'column',

          justifyContent: 'space-between',
        }}>

          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>

            <View>
              <TouchableOpacity>
              <Image
                style={styles.categoriesCard}
                source={require('../assets/images/math.svg')}
              />
                            </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
              <Image
                style={styles.categoriesCard}
                source={require('../assets/images/Coding.svg')}
              />
              
              </TouchableOpacity>
            </View>

          </View>
          <View style={{ height: 20 }}></View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>

            <View>
              <TouchableOpacity>
              <Image
                style={styles.categoriesCard}
                source={require('../assets/images/Painting.svg')}
              />
              
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
              <Image
                style={styles.categoriesCard}
                source={require('../assets/images/English.svg')}
              />
              
              </TouchableOpacity>
            </View>

          </View>
          <View style={{ height: 20 }}></View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>

            <View>
<TouchableOpacity>
       <Image
                style={styles.categoriesCard}
                source={require('../assets/images/chemistry.svg')}
              />
              </TouchableOpacity>        
            </View>
            <View>
              <TouchableOpacity>
              <Image
                style={styles.categoriesCard}
                source={require('../assets/images/physics.svg')}
              />
              </TouchableOpacity>
            </View>

          </View>
        </View>

     
      </ScrollView>

      
    </View>

  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textCenter: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
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
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
  },
  categoriesText: {
    fontSize: 23,
    color: "black",
    textAlign: "left",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  welcomeDescription: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "left",
  },
  tutorButton: {
    backgroundColor: "#3D90CE",
    alignItems: "stretch",
    borderRadius: 10,
    marginTop: 5,
  },
  tutorButtonText: {
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
  categoriesCard: {
    borderRadius: 10,
    width: 155,
    height: 190,
    resizeMode: "contain",
    flex: 1,
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
});
