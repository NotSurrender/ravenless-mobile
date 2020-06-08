import * as Font from 'expo-font';

export const bootstrap = async () => {
  try {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
  } catch (error) {
    console.log(error);
  }
};
