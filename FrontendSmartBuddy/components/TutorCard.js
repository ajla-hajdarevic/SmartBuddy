import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export function TutorCard(props) {
  return  (
      <View style={styles.tutorCardContainer}>
          <Image 
            style={styles.tutorCardImage}
              source={props.image}/>  
            <View style={styles.textContainer}>
                <Text style={styles.tutorCardName}>{props.name}</Text>
                <Text style={styles.tutorCardDescription}>{props.description}</Text>
                <Text style={styles.viewButton}>View</Text>
            </View>
      </View>

  );
}

const styles = StyleSheet.create({
  tutorCardContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    height: 110,
    marginBottom: 12,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 15,
    marginTop: 10,
  },
  tutorCardImage: {
    margin: 5,
    marginLeft: 10,
    borderRadius: 20,
    height: 100,
    width: 100,
  },
  tutorCardName: {
    fontWeight: "400",
    fontSize: 18,
    padding: 5,
  },
  tutorCardDescription: {
    fontWeight: "200",
    fontSize: 12,
    padding: 5,
  },
  viewButton: {
    fontWeight: "400",
    fontSize: 18,
    color: "#3D90CE",
    padding: 5,
  },
});
