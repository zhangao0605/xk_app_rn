import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from "../tabs/Login";
import messageScreen from "../tabs/message";

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
        },
        Message: {
            screen: messageScreen,
        },
    },
    {
        initialRouteName: 'Login',
    });

const AppContainer = createAppContainer(AppNavigator);

class Route extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <AppContainer/>;
    }
}

export default Route;
// export default createAppContainer(AppNavigator);
