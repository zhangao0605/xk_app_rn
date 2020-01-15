import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-navigation";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <SafeAreaView style={styles.contaner}>
                <StatusBar barStyle="dark-content" />
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Message')}} style={styles.test}>
                    <Text style={{fontSize:18}}>sss</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    contaner: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    test:{
        width: 150,
        height: 150,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#0f0',
    },
});
