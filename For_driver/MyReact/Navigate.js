import React from 'react';
import login from './project/login';
import Main from './project/Main';
import All_reqestes from './project/all_reqestes';
import Add_time from './project/add_time';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <stack.Navigator>
            <stack.Screen
                name='login'
                component={login}
                options={{ title: 'Вход' }}
            />
            <stack.Screen
                name='Main'
                component={Main}
                options={{
                    title: 'Тут все заявки',
                    headerShown: false,
                    headerLeft: () => null,
                }}
            />
            <stack.Screen
                name='all_reqestes'
                component={All_reqestes}
                options={{ title: 'Требуется помощь:' }}
            />
            <stack.Screen
                name='add_time'
                component={Add_time}
                options={{ title: 'Создать поездку' }}
            />
        </stack.Navigator>
    </NavigationContainer>
}