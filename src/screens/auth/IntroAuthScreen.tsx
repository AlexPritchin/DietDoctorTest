import React from 'react';
import {View, ImageBackground, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const backgroundImageLink = 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/01/Meal-Prep-Recipes-1-1.jpg';
const topLogoImageLink = 'https://previews.123rf.com/images/llecosta/llecosta1804/llecosta180400002/98730372-green-logo-diet-with-leaves-on-d-vector-illustration-.jpg';

const IntroAuthScreen = () => {
    return (
        <View style={styles.mainView}>
            <ImageBackground source={{ uri: backgroundImageLink }} style={styles.backgroundImage} >
                <View style={styles.mainContainerView}>
                    <View style={styles.topView}>
                        <Image source={{ uri: topLogoImageLink }} style={styles.topLogoImage} />
                        <Text style={styles.topLogoText}>Making low carb simple</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={styles.buttonsView}>
                            <TouchableOpacity>
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
                        <Text style={styles.bottomTermsText}>By continuing, you agree with our Terms and conditions</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    backgroundImage: {
        flex: 1
    },
    mainContainerView: {
        flex: 1,
        justifyContent: 'space-between'
    },
    topView: {
        alignItems: 'center',
        marginTop: 10,
        padding: 5
    },
    topLogoImage: {
        marginBottom: 5
    },
    topLogoText: {
        fontSize: 12,
        color: 'white'
    },
    bottomView: {
        marginBottom: 50,
        padding: 5
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loginButtonView: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'blue',
    },
    loginButtonText: {
        color: 'blue'
    },
    freeVersionButtonView: {
        borderRadius: 10,
        backgroundColor: 'pink'
    },
    freeVersionButtonText: {
        color: 'white'
    },
    bottomTermsText: {
        fontSize: 12,
        color: 'white'
    },
});

export default IntroAuthScreen;