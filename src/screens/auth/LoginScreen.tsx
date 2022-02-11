import React, { useRef } from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const backgroundImageLink =
  'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/01/Meal-Prep-Recipes-1-1.jpg';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6).required('Required'),
});

const LoginScreen = () => {
  const isFormValid = useRef(false);

  const formTrySubmit = () => {
    if (!isFormValid.current) {
      Alert.alert(
        'Login failed',
        'Email should be valid. Password should be not less than 6 characters long.'
      );
      return;
    }
  };

  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={{ uri: backgroundImageLink }}
        style={styles.backgroundImage}
      >
        <View style={styles.mainContainerView}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={() => {}}
          >
            {({ handleChange, handleBlur, values, isValid }) => {
              if (isValid && values.email === '' && values.password === '') {
                isFormValid.current = false;
              } else {
                isFormValid.current = isValid;
              }

              return (
                <View style={styles.formView}>
                  <TextInput
                    style={styles.emailInput}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="Email"
                  />
                  <TextInput
                    style={styles.passwordInput}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="Password"
                    secureTextEntry
                  />
                  <TouchableOpacity onPress={formTrySubmit}>
                    <View style={styles.submitButtonView}>
                      <Text style={styles.submitButtonText}>Log in</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          </Formik>
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
    justifyContent: 'center',
  },
  formView: {
    marginHorizontal: 70,
  },
  emailInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 40,
    paddingLeft: 10,
  },
  passwordInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 40,
    paddingLeft: 10,
    marginTop: 7,
  },
  submitButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    borderRadius: 20,
    height: 40,
    marginTop: 7,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginScreen;
