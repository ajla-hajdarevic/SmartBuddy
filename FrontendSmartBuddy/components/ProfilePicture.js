import * as React from 'react';
import { Avatar } from 'react-native-elements';

export function ProfilePicture(props) {
  return  (<Avatar 
  size="large" 
  rounded title="MT" 
  onPress={() => console.log("Works!")} 
  activeOpacity={0.7} /> );
}
