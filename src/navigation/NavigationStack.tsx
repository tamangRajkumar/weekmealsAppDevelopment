import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  OnboardingScreen,
  Login,
  RegisterScreen,
  EmailConfirmation,
  EmailConfirmed,
  Welcome,
  YourPlan,
  YourMealPlan,
  CompleteProfileStart,
  CompleteProfilePicture,
  AddPersonalDetails,
  YourMealPlanMoreInfo,
  PickYourFavoriteFood,
  AddSportCardioData,
  SportCardioAddSport,
  GainWeight,
  PickADay,
  FinishPlanning,
  NotificationPreferences,
  PlanFirstDayComplete,
  AddOwnDataFatPercentage,
  FoodPreference,
  YourLifeStyleSelect,
  MainGoal,
  AddOwnPlanBreakfast,
  AddOwnPlanLunch,
  AddOwnPlanDinner,
  PlanFirstDayDiner,
  PlanFirstDayLunch,
  PlanFirstDayBreakfastCategory,
  PlanFirstDayBreakfast,
  PlanFirstDayBreakfastSelectRecipe,
  RecipeDetail,
  Groceries

} from "../screens";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Groceries"
      >
        <Stack.Screen
          name="CompleteProfilePicture"
          component={CompleteProfilePicture}
        />

        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="EmailConfirmation" component={EmailConfirmation} />
        <Stack.Screen name="EmailConfirmed" component={EmailConfirmed} />

        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="YourMealPlan" component={YourMealPlan} />
        <Stack.Screen name="YourPlan" component={YourPlan} />

        <Stack.Screen
          name="CompleteProfileStart"
          component={CompleteProfileStart}
        />

        <Stack.Screen
          name="YourMealPlanMoreInfo"
          component={YourMealPlanMoreInfo}
        />

        <Stack.Screen
          name="PickYourFavoriteFood"
          component={PickYourFavoriteFood}
        />

        <Stack.Screen
          name="AddPersonalDetails"
          component={AddPersonalDetails}
        />
        <Stack.Screen
          name="AddSportCardioData"
          component={AddSportCardioData}
        />
        <Stack.Screen
          name="SportCardioAddSport"
          component={SportCardioAddSport}
        />
        <Stack.Screen name="GainWeight" component={GainWeight} />
        <Stack.Screen name="PickADay" component={PickADay} />
        <Stack.Screen name="FinishPlanning" component={FinishPlanning} />
        <Stack.Screen
          name="NotificationPreferences"
          component={NotificationPreferences}
        />

        <Stack.Screen
          name="PlanFirstDayComplete"
          component={PlanFirstDayComplete}
        />

        <Stack.Screen
          name="AddOwnDataFatPercentage"
          component={AddOwnDataFatPercentage}
        />
        <Stack.Screen name="FoodPreference" component={FoodPreference} />

        <Stack.Screen
          name="YourLifeStyleSelect"
          component={YourLifeStyleSelect}
        />
        <Stack.Screen name="MainGoal" component={MainGoal} />
        <Stack.Screen
          name="AddOwnPlanBreakfast"
          component={AddOwnPlanBreakfast}
        />
        <Stack.Screen name="AddOwnPlanLunch" component={AddOwnPlanLunch} />
        <Stack.Screen name="AddOwnPlanDinner" component={AddOwnPlanDinner} />
        <Stack.Screen name="PlanFirstDayDiner" component={PlanFirstDayDiner} />
        <Stack.Screen name="PlanFirstDayLunch" component={PlanFirstDayLunch} />
        <Stack.Screen
          name="PlanFirstDayBreakfastCategory"
          component={PlanFirstDayBreakfastCategory}
        />
        <Stack.Screen
          name="PlanFirstDayBreakfast"
          component={PlanFirstDayBreakfast}
        />
        <Stack.Screen
          name="PlanFirstDayBreakfastSelectRecipe"
          component={PlanFirstDayBreakfastSelectRecipe}
        />

        <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
        <Stack.Screen name="Groceries" component={Groceries} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
