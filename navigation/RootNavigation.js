import {Notifications} from 'expo';
import {Root} from "native-base";
import React from 'react';
import {StackNavigator} from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import ProductScreen from '../screens/product/ProductScreen';
import LoginScreen from '../screens/login/LoginScreen'
import AddListingScreen from '../screens/post/AddListingScreen'
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator(
    {
        Main: {
            screen: MainTabNavigator,
        },
        Post: {
            screen: AddListingScreen,
        },
    },
    {
        navigationOptions: () => ({
            headerTitleStyle: {
                fontWeight: 'normal',
            },
            header : null
        }),
    }
);

export default class RootNavigator extends React.Component {
    componentDidMount() {
        //this._notificationSubscription = this._registerForPushNotifications();
    }

    componentWillUnmount() {
        //this._notificationSubscription && this._notificationSubscription.remove();
    }

    render() {
        return (
            <Root>
                <RootStackNavigator />
            </Root>
        );
    }

    _registerForPushNotifications() {
        // Send our push token over to our backend so we can receive notifications
        // You can comment the following line out if you want to stop receiving
        // a notification every time you open the app. Check out the source
        // for this function in api/registerForPushNotificationsAsync.js
        registerForPushNotificationsAsync();

        // Watch for incoming notifications
        this._notificationSubscription = Notifications.addListener(
            this._handleNotification
        );
    }

    _handleNotification = ({origin, data}) => {
        console.log(
            `Push notification ${origin} with data: ${JSON.stringify(data)}`
        );
    };
}
