/**
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {TabNavigator, TabBarBottom} from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/home/HomeScreen';
import BrowseScreen from '../screens/listing/BrowseScreen';
import AddListingScreen from '../screens/post/AddListingScreen';
import ProductScreen from '../screens/product/ProductScreen'
import AddProductScreen from '../screens/post/AddProductScreen';
import SearchProductScreen from '../screens/product/SearchProductScreen'

export default TabNavigator(
    {

        Home: {
            screen: HomeScreen
        },
        Browse: {
            screen: BrowseScreen
        },
        Add: {
            screen: AddListingScreen
        },
        Search : {
            screen: SearchProductScreen
        },
        Profile: {
            screen: AddListingScreen
        }
    },
    {
        navigationOptions: ({navigation}) => ({
            // Set the tab bar icon
            tabBarIcon: ({focused}) => {
                const {routeName} = navigation.state;
                let iconName, screenName;
                switch (routeName) {
                    case 'Home':
                        iconName = 'map-marker';
                        break;
                    case 'Browse':
                        iconName = 'navicon';
                        break;
                    case 'Add':
                        iconName = 'plus-circle';
                        break;
                    case 'Search':
                        iconName = 'search';
                        break;
                    case 'Profile':
                        iconName = 'user';
                        break;

                }
                return (
                    <FontAwesome
                        name={iconName}
                        size={32}
                        color="white"
                    />
                );
            },
            tabBarLabel : ({focused}) => {
                const {routeName} = navigation.state;
                let screenName;
                switch (routeName) {
                    case 'Home':
                        return 'Near Me';
                    case 'Browse':
                        return 'Browse';
                    case 'Add':
                        return 'Post';
                    case 'Profile':
                        return routeName;
                    case 'Search':
                        return 'Search';
                }
            },
            header: null,

        }),
        // Put tab bar on bottom of screen on both platforms
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        // Disable animation so that iOS/Android have same behaviors
        animationEnabled: false,
        // Don't show the labels
        tabBarOptions: {
            showLabel: true,
            style : {
                backgroundColor : "skyblue",
            },
            labelStyle : {
                color: "white"
            }
        },

    }
);
