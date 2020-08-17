import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import createDataContext from './createDataContext'

const authreducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_TOKEN':
            return action.payload
        case 'LOGOUT':
            return action.payload
        
    }
}

const logout = dispatch => async () => {
    try {
        await AsyncStorage.removeItem("isLogin")
        dispatch({ type: 'LOGOUT', payload: '' })
    } catch (e) {
        console.log(e)
    }
}

const login = dispatch => async () => {
    try {
        await AsyncStorage.setItem("isLogin", "true")
        dispatch({ type: 'LOGIN_TOKEN', payload: '735ykj3bjbjkdkj' })
    } catch (e) {
        console.log(e);
    }
}

export const { Provider, Context } = createDataContext(
    authreducer,
    {
        logout,
        login
    },
    []
)