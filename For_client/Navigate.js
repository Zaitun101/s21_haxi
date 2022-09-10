import React from 'react';
import login from './project/login';
import Main from './project/Main';
import Regist from './project/regist';
import New from './project/new_adress';
import all_drivers from './project/all_drivers';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <stack.Navigator>
            <stack.Screen
                name='Login'
                component={login}
                options={{ headerStyle: { backgroundColor: 'papayawhip' }, title: 'Вход' }}
            />
            <stack.Screen
                name='Main'
                component={Main}
                options={{
                    title: 'Тут плюс и добавление',
                    headerShown: false,
                    headerLeft: () => null,
                }}
            />
            <stack.Screen
                name='regist'
                component={Regist}
                options={{ title: 'registration' }}
            />
            <stack.Screen
                name='new_address'
                component={New}
                options={{ title: 'Создать поездку' }}
            />
            <stack.Screen
                name='all_drivers'
                component={all_drivers}
                options={{ title: 'Свободные водители:' }}
            />
        </stack.Navigator>
    </NavigationContainer>
}