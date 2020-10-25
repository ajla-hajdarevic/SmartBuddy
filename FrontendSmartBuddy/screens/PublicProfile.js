import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { ProfilePicture } from "../components/ProfilePicture";
import { Username } from "../components/Username";
import { Biography } from "../components/Biography";

export default function PublicProfile({ route, navigation }) {
  const {
    name = " ",
    email,
    price,
    bio,
    faculty,
    location,
    image,
    description,
  } = route.params;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginBottom: 4,
            }}
            source={image}
          />
          <Username style={styles.userName}>{name || " "}</Username>
          <Text style={styles.userEmail}>{email}</Text>
        </View>

     
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {description.map((d) => (
              <TouchableOpacity
                onPress={() => Alert.alert("Hvala :D")}
                style={styles.filterButtons}
              >
                <Text style={styles.filterButtonsText}>{d}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* <View>
            <TouchableOpacity
              onPress={() => Alert.alert("Hvala :D")}
              style={styles.filterButtons}
            >
              <Text style={styles.filterButtonsText}>Coding</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => Alert.alert("Hvala :D")}
              style={styles.filterButtons}
            >
              <Text style={styles.filterButtonsText}>English</Text>
            </TouchableOpacity>
          </View> */}

        <Biography
          description={bio}
          location={location}
          university={faculty}
          cost={price}
        />

        <TouchableOpacity
          onPress={() => Alert.alert("Hvala :D")}
          style={styles.tutorButton}
        >
          <Text style={styles.tutorButtonText}>Contact tutor</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

PublicProfile.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "white",
  },
  contentContainer: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  userName: {
    fontSize: 23,
    fontWeight: "bold",
    padding: 2,
  },
  userEmail: {
    fontSize: 17,
    fontWeight: "100",
    padding: 5,
  },
  tutorButton: {
    backgroundColor: "#3D90CE",
    alignItems: "stretch",
    borderRadius: 10,
    marginTop: 35,
  },
  tutorButtonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 15,
  },
  filterButtons: {
    padding: 3,
    backgroundColor: "#f3f3f3",
    borderColor: "#f3f3f3",
    borderRadius: 20,
    borderWidth: 1,
  },
  filterButtonsText: {
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed",
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 1,
  },
});
