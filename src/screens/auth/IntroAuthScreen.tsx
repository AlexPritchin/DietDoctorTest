import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

const backgroundImageLink =
  'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/01/Meal-Prep-Recipes-1-1.jpg';
const topLogoImageLink =
  'https://cdn-icons.flaticon.com/png/512/771/premium/771480.png?token=exp=1644493869~hmac=4726f946623a9560ddbdda2fde1cb64c';

interface Props {
  navigation: StackNavigationProp<any>;
}

const IntroAuthScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={{ uri: backgroundImageLink }}
        style={styles.backgroundImage}
      >
        <View style={styles.mainContainerView}>
          <View style={styles.topView}>
            <Image
              source={{ uri: topLogoImageLink }}
              style={styles.topLogoImage}
            />
            <Text style={styles.topLogoText}>Making low carb simple</Text>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.buttonsView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Log in');
                }}
              >
                <View style={styles.loginButtonView}>
                  <Text style={styles.loginButtonText}>Log in</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.freeVersionButtonView}>
                  <Text style={styles.freeVersionButtonText}>Free version</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomTermsTextView}>
              <Text style={styles.bottomTermsText}>
                By continuing, you agree with our Terms and conditions
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  mainContainerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topView: {
    alignItems: 'center',
    marginTop: 40,
    padding: 5,
  },
  topLogoImage: {
    marginBottom: 5,
    height: 60,
    width: 60
  },
  topLogoText: {
    fontSize: 12,
    color: 'white',
  },
  bottomView: {
    marginBottom: 60,
    padding: 5
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 37,
    marginHorizontal: 10
  },
  loginButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'blue',
    height: '100%',
    width: 170
  },
  loginButtonText: {
    color: 'blue',
  },
  freeVersionButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
    backgroundColor: 'crimson',
    height: '100%',
    width: 170
  },
  freeVersionButtonText: {
    color: 'white',
  },
  bottomTermsTextView: {
    alignItems: 'center',
    marginTop: 20
  },
  bottomTermsText: {
    fontSize: 12,
    color: 'white',
  },
});

export default IntroAuthScreen;
