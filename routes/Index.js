import * as React from 'react'

import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

import Login from "../screens/Login"
import Principal from "../screens/Principal"


export function AppRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Login}>
            <Stack.Screen name="Login" component={Login}
                options={{
                        
                   
                    headerTitleAlign: 'center',
                    
                    headerTintColor: '#000000'
                }}/>
               
                <Stack.Screen name="Principal" component={Principal} 
                />
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}