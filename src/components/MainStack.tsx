import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { OnboardingScreen } from "./OnboardingScreen";
import { HomeScreen } from "./HomeScreen";
import { MainStackParamList } from "../NavigationParamList";

const Stack = stackNavigatorFactory();

export function MainStack() {
  return (
    <BaseNavigationContainer>
      <Stack.Navigator<MainStackParamList>
        initialRouteName="onboarding"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen
          name="onboarding"
          component={OnboardingScreen}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </BaseNavigationContainer>
  );
}