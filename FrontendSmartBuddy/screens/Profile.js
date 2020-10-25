import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { ProfilePicture } from '../components/ProfilePicture';
import {Username} from '../components/Username';
import { Biography } from '../components/Biography';

export default function Profile({navigation}) {

  const [isLoading, setLoading] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/dev/users/1')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.users;
      })
      .then(users => {
        setUsers(users);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => setLoading(false));

  }, []);




  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {users.map((u) => (
        <View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginBottom: 4,
              }}
              source={u.imgSrc}
            />
            <Username style={styles.userName}>{u.name}</Username>
            <Text style={styles.userEmail}>{u.email}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfile")}
              style={styles.editButton}
            >
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {u.description.map((d) => (
              <TouchableOpacity
                onPress={() => Alert.alert("Hvala :D")}
                style={styles.filterButtons}
              >
                <Text style={styles.filterButtonsText}>{d}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Biography
            description={u.bio}
            location={u.location}
            university={u.faculty}
            cost={u.price}
          />
        </View>
      ))}
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingTop: 15,
    padding:20,
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
