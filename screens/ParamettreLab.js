import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ImageStore
}
    from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';





export default class ParamettreLab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation
        }
    }

    render() {
        return (
            <ImageBackground
                source={require('../assets/img/paralab.jpg')}
                style={styles.container}>
                <View style={styles.overlayContainer}>
                    <View style={styles.top}>
                        <Text style={styles.header}> Paramettre Labo</Text>
                    </View>
                    
                </View>

            </ImageBackground>



        );

    }

}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(47,163,218, .4)'
    },
    top: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#fff',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255 ,255,255, .1)'

    },
    menuContainer: {
        height: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap'

    }
});