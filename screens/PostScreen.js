import React from "react";
import { CreateStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return {
        <Stack.TabNavigator 
        initialRouteName = "Home"
        screenOptions = {{
            headerShown: false
        }}>

        <Stack.Screen name = "Home" component = {TabNavigator} />
        <Stack.Screen name = "PostScreen" component = {PostScreen} />
        </Stack.Navigator?

    }
}

export default StackNavigator;

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () = {
    return {
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component = {StackNavigator} />
            <Drawer.Screen name = "Profile" component = {Profile} />

    }
}

export default DrawerNavigator;

renderItem = ({ iteam: post }) => {
    return = PostCase post = (post) navigation=(this.props.navigation) />;}