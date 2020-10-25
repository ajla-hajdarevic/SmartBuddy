import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export function Biography(props) {
  return  (
      <View style={styles.biographyContainer}>
          <Text style={styles.bioText}>Bio</Text>
            <View style={styles.textContainer}>
                <Text style={styles.bioDescription}>{props.description}</Text>
                <View style={styles.iconRow}>
                    <Icon name='location-pin' type='entypo' color='grey' />
                    <Text style={styles.bioEntry}>{props.location}</Text>
                </View>
                <View style={styles.iconRow}>
                    <Icon name='graduation-cap' type='entypo' color='grey' />
                    <Text style={styles.bioEntry}>{props.university}</Text>
                </View>
                <View style={styles.iconRow}>
                    <Icon name='credit' type='entypo' color='grey' />
                    <Text style={styles.bioEntry}>{props.cost}</Text>
                </View>
            </View>
      </View>

  );
}

const styles = StyleSheet.create({
    biographyContainer: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 3,
    },
    bioText: {
        fontSize: 23,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 10,
    },
    iconRow: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 3,
        margin: 2,
    },
    bioDescription: {
        fontWeight: '200',
        fontSize: 16,
        paddingBottom: 5,
    },
    bioEntry: {
        fontWeight: '200',
        fontSize: 16,
        padding: 3,
        paddingLeft: 5,
    },
});
