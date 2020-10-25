import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./navigation/BottomTabNavigator";
import useLinking from "./navigation/useLinking";

import PublicProfile from "./screens/PublicProfile";
import Filters from "./screens/Filters";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import EditProfile from "./screens/EditProfile";
import { Button } from "react-native-elements";
import StartScreen from "./screens/StartScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {/* <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.SignIn}>
              <Text style={styles.SignInText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.SignIn}>
              <Text style={styles.SignInText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView> */}
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="Home" component={BottomTabNavigator} />

            <Stack.Screen
              name="PublicProfile"
              component={PublicProfile}
              options={({ navigation }) => ({
                headerShown: true,
                headerTitle: " ",
                headerLeft: () => (
                  <Button
                    type="clear"
                    style={{
                      marginLeft: 10,
                      color: "black",
                    }} /* buttonstyle doesn't work  */
                    title="Back"
                    onPress={() => navigation.goBack()}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="Filters"
              component={Filters}
              options={({ navigation }) => ({
                headerShown: true,
                headerTitle: " ",
                headerLeft: () => (
                  <Button
                    type="clear"
                    buttonStyle={{ marginLeft: 10, color: "black" }}
                    title="Back"
                    onPress={() => navigation.goBack()}
                  />
                ),
                headerRight: () => (
                  <Button
                    type="clear"
                    buttonStyle={{ marginRight: 10, color: "black" }}
                    title="Save"
                    onPress={() => navigation.goBack()}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={({ navigation }) => ({
                headerShown: true,
                headerTitle: " ",
                headerLeft: () => (
                  <Button
                    type="clear"
                    buttonStyle={{ marginLeft: 10, color: "black" }}
                    title="Back"
                    onPress={() => navigation.goBack()}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={({ navigation }) => ({
                headerShown: true,
                headerTitle: " ",
                headerLeft: () => (
                  <Button
                    type="clear"
                    buttonStyle={{ marginLeft: 15, color: "black" }}
                    title="Back"
                    onPress={() => navigation.goBack()}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={({ navigation }) => ({
                headerShown: true,
                headerTitle: " ",
                headerLeft: () => (
                  <Button
                    type="clear"
                    buttonStyle={{ marginLeft: 15, color: "black" }}
                    title="Back"
                    onPress={() => navigation.goBack()}
                  />
                ),
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
  backButton: {
    color: "black",
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
