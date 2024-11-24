import * as React from "react";
import { StackNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

interface OnboardingScreenProps {
  navigation: StackNavigationProp<MainStackParamList, "onboarding">;
}

export function OnboardingScreen({ navigation }: OnboardingScreenProps) {
  return (
    <flexboxLayout className="onboarding-container h-full flex-col items-center justify-center">
      <image
        src="~/assets/onboarding.png"
        className="w-4/5 h-2/5"
        stretch="aspectFit"
      />
      
      <stackLayout className="pagination">
        <flexboxLayout className="flex-row justify-center space-x-2">
          <label className="w-2 h-2 rounded-full bg-gray-300" />
          <label className="w-2 h-2 rounded-full bg-blue-500" />
          <label className="w-2 h-2 rounded-full bg-gray-300" />
          <label className="w-2 h-2 rounded-full bg-gray-300" />
        </flexboxLayout>
      </stackLayout>

      <label className="title">
        NoteCloud
      </label>
      
      <label className="description" textWrap={true}>
        Write it, keep it, love it.
      </label>

      <button 
        className="get-started-button"
        text="Get Started"
        onTap={() => navigation.navigate('home')}
      />
    </flexboxLayout>
  );
}