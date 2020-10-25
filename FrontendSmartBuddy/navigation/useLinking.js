import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Profile: 'profile',
          Settings: 'settings',
          TutorList: 'tutors',
          PublicProfile: 'PublicProfile',
          SignUp: 'sign-up',
          Login: 'login',
          Filters: 'filters',
          EditProfile: 'EditProfile',
          StartScreen: 'start-screen'
        },
      },
    },
  });
}
