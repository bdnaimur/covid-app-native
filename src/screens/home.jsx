import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import GlobalStyles from '../../GlobalStyles';
import { bg } from '../theme/colors';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { presets } from '../components/text/presets';
import { AntDesign } from '@expo/vector-icons';
import { Foundation, Ionicons, FontAwesome, Fontisto } from '@expo/vector-icons';


import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
    return (
        <SafeAreaView style={GlobalStyles.androidSafeArea}>
            <View style={styles.wrapper}>
                <View style={{ marginHorizontal: 20 }}>
                    <View style={styles.inside}>
                        <Octicons name="three-bars" size={24} color="white" />
                        <Feather name="bell" size={24} color="white" />
                    </View>
                    <View style={styles.inside} >
                        <Text style={[styles.covidText, presets.h1]}>
                            Covid-19
                        </Text>
                        <View style={{ width: 116, height: 40, backgroundColor: 'white', borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 10 }}>
                            <View style={{}}>
                                <Image
                                    source={require('../../assets/images/bg_flag.png')}
                                    style={{ resizeMode: 'cover', height: 32, width: 32, borderRadius: 16 }}
                                />
                            </View>
                            <Text style={[presets.MEDIUM], { fontSize: 14 }}>BD</Text>
                            <AntDesign name="caretdown" size={14} color="gray" />
                        </View>
                    </View>
                    <View>
                        <Text style={[presets.h2, { color: 'white', marginTop: 25 }]}>
                            Are you feeling sick?
                        </Text>
                        <Text style={[presets.default, { color: 'white', marginTop: 15, lineHeight: 25 }]}>
                            If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                        <View >
                            <View style={[styles.icon, { backgroundColor: bg.phone_bg }]}>
                                <Foundation name="telephone" size={35} color="white" />
                                <Text style={[presets.SEMIBOLD, { fontSize: 18, color: 'white', marginLeft: 10 }]}>Call Now</Text>
                            </View>
                        </View>
                        <View >
                            <View style={[styles.icon, { backgroundColor: bg.sms_bg }]}>
                                <Ionicons name="chatbubble" size={30} color="white" />
                                <Text style={[presets.SEMIBOLD, { fontSize: 18, color: 'white', marginLeft: 10 }]}>Call Now</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.middleSection}>
                <Text style={presets.h2}>
                    Prevention
                </Text>
                <View style={styles.middleImages}>
                    <View >
                        <View style={styles.imageCircle}>
                            <Image style={{ marginEnd: 30 }} source={require('../../assets/images/manTwo.png')} />
                            <Image source={require('../../assets/images/manOne.png')} />
                            <View style={{flexDirection:'row', alignItems:'center', position: 'absolute', top: 67, left: 20}}>
                                <Fontisto name="arrow-left-l" size={15} color="#372B7B" />
                                <Text style={{color: '#372B7B'}}>6ft</Text>
                                <Fontisto name="arrow-right-l" size={15} color="#372B7B" />
                            </View>
                        </View>
                        <View>
                            <Text style={[presets.MEDIUM, styles.middleSectionText]}>
                                Avoid close{"\n"}
                                contact
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={[styles.imageCircle, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Image style={{ resizeMode: 'cover', marginEnd: 12 }} source={require('../../assets/images/handWash.png')} />
                        </View>
                        <View>
                            <Text style={[presets.MEDIUM, styles.middleSectionText]}>
                                Wash your{"\n"}
                                hands often
                            </Text>
                        </View>
                    </View>
                    <View >
                        <View style={[styles.imageCircle, { justifyContent: 'center' }]}>
                            <Image source={require('../../assets/images/mask.png')} />
                        </View>
                        <View>
                            <Text style={[presets.MEDIUM, styles.middleSectionText]}>
                                Wear a{"\n"}
                                face mask
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>

                <LinearGradient
                    // Background Linear Gradient
                    colors={['#56549E', '#AEA1E5']}
                    style={styles.background}
                    start={{ x: 1, y: 0 }}
                >
                    <View style={[styles.footerContainer, { flexDirection: 'row' }]}>

                        <View style={[styles.footerIcon, { width: 150 }]}>
                            <Image style={{ position: 'absolute', top: -10, left: 15 }} source={require('../../assets/images/Group.png')} />
                            <FontAwesome style={{ position: 'absolute', top: 15, left: 105, backgroundColor: 'white', padding: 1, borderBottomRightRadius: 7 , borderBottomLeftRadius: 7}} name="plus" size={19} color="red" />
                            <Feather style={{ position: 'absolute', top: 10, left: 99, }} name="shield" size={30} color="#ADD8E6" />

                        </View>
                        <View style={[styles.footerText, { width: 200, marginTop: 15 }]}>
                            <Text style={[presets.SEMIBOLD, { fontSize: 18, color: 'white', }]}>Do your own test!</Text>
                            <Text style={[presets.default, { lineHeight: 20, marginTop: 10, color: 'white' }]}>
                                Follow the instructions to do your own test.
                            </Text>
                        </View>
                    </View>

                </LinearGradient>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: bg.top_bg,
        width: '100%',
        height: 342,
        borderBottomEndRadius: 40,
        borderBottomLeftRadius: 40
    },
    inside: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '8.33%'
    },
    covidText: {
        color: 'white',
    },
    icon: {
        flexDirection: 'row',
        height: 60,
        width: 170,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    middleSection: {
        margin: 20
    },
    middleImages: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    imageCircle: {
        flexDirection: 'row',
        width: 90,
        height: 90,
        backgroundColor: bg.circle_bg,
        borderRadius: 45,
        justifyContent: 'space-between'
    },
    middleSectionText: {
        lineHeight: 22,
        fontSize: 15,
        marginTop: 10,
        textAlign: 'center'
    },
    footer: {
        margin: 20
    },
    footerContainer: {
        // flexDirection: 'row'

    },
    footerIcon: {

    },
    footerText: {

    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 108,
        borderRadius: 20
    },

})