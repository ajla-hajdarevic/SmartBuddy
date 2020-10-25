import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView} from 'react-native';

export default function Filters() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Filters</Text>

          <Text style={styles.categoriesText}>Categories</Text>

        <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15, }}>

        <View>
          <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
            <Text style={styles.filterButtonsText}>Language</Text> 
          </TouchableOpacity> 
        </View>
        <View>
          <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
            <Text style={styles.filterButtonsText}>Physics</Text> 
          </TouchableOpacity> 
        </View>
        <View>
          <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
            <Text style={styles.filterButtonsText}>Math</Text> 
          </TouchableOpacity> 
        </View>
       
       </View>

       <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15, }}>

        <View>
          <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
            <Text style={styles.filterButtonsText}>Algebra</Text> 
          </TouchableOpacity> 
        </View>
        <View>
          <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
            <Text style={styles.filterButtonsText}>Coding</Text> 
          </TouchableOpacity> 
        </View>
        <View>
          <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
            <Text style={styles.filterButtonsText}>Geo</Text> 
          </TouchableOpacity> 
        </View>
       
       </View>

       <Text style={styles.categoriesText}>Cities</Text>

       <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15, }}>

        <View>
          <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
            <Text style={styles.filterButtonsText}>Sarajevo</Text> 
          </TouchableOpacity> 
        </View>
        <View>
          <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
            <Text style={styles.filterButtonsText}>Tuzla</Text> 
          </TouchableOpacity> 
        </View>
        <View>
          <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
            <Text style={styles.filterButtonsText}>Bihac</Text> 
          </TouchableOpacity> 
        </View>

        </View>

        <Text style={styles.categoriesText}>Universities</Text>

        <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15, }}>

        <View>
          <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
            <Text style={styles.filterButtonsText}>UNSA</Text> 
          </TouchableOpacity> 
        </View>
        <View>
          <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
            <Text style={styles.filterButtonsText}>SSST</Text> 
          </TouchableOpacity> 
        </View>
        <View>
          <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
            <Text style={styles.filterButtonsText}>IUS</Text> 
          </TouchableOpacity> 
        </View>
       
       </View>
       
      </View>

      </ScrollView>

     
    </View>
    
  );
}

Filters.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    padding: 20,
    justifyContent: 'space-evenly',
  },
  welcomeContainer: {
    alignItems: 'stretch',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 23,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  categoriesText: {
    fontSize: 17,
    color: 'grey',
    fontWeight: '300',
    paddingTop: 10,
    paddingBottom: 5,
  },
  welcomeDescription: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'left',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  filterButtons: {
    padding: 3,
    backgroundColor: '#F3F3F3',
    borderColor: '#F3F3F3',
    borderRadius: 20,
    borderWidth: 1,
  },
  filterButtonsText: {
    padding:5,
    paddingLeft: 25,
    paddingRight: 25,
  },

  
});
