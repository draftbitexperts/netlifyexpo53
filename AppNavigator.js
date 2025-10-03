import React from 'react';
import { Icon, Touchable, useTheme } from '@draftbit/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DefaultTheme,
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { systemWeights } from 'react-native-typography';
import LinkingConfiguration from './LinkingConfiguration';
import AboutusScreen from './screens/AboutusScreen';
import AddnewaddressScreen from './screens/AddnewaddressScreen';
import CartEmptyScreen from './screens/CartEmptyScreen';
import CartScreen from './screens/CartScreen';
import ChangePasswordErrorScreen from './screens/ChangePasswordErrorScreen';
import ChangePasswordSuccessScreen from './screens/ChangePasswordSuccessScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ConfirmCodeScreen from './screens/ConfirmCodeScreen';
import DeliveryAddressScreen from './screens/DeliveryAddressScreen';
import DeliveryDetailsScreen from './screens/DeliveryDetailsScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import GetDiscountScreen from './screens/GetDiscountScreen';
import HomeScreen from './screens/HomeScreen';
import ItemDetailsScreen from './screens/ItemDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import NotificationDetailsScreen from './screens/NotificationDetailsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import OrdersScreen from './screens/OrdersScreen';
import PaymentmethodsScreen from './screens/PaymentmethodsScreen';
import ProfileScreen from './screens/ProfileScreen';
import PromocodeScreen from './screens/PromocodeScreen';
import RestaurantDetailsScreen from './screens/RestaurantDetailsScreen';
import SearchScreen from './screens/SearchScreen';
import SearchaddressScreen from './screens/SearchaddressScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import palettes from './themes/palettes';
import Breakpoints from './utils/Breakpoints';
import useNavigation from './utils/useNavigation';
import useWindowDimensions from './utils/useWindowDimensions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function DefaultDrawerIcon({ tintColor }) {
  const navigation = useNavigation();
  return (
    <Touchable
      onPress={() => navigation.toggleDrawer()}
      style={[styles.headerContainer, styles.headerContainerLeft]}
    >
      <Icon
        name="EvilIcons/navicon"
        size={27}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </Touchable>
  );
}

function BottomTabNavigator() {
  const theme = useTheme();

  const tabBarOrDrawerIcons = {
    HomeScreen: 'AntDesign/home',
    OrdersScreen: 'Ionicons/document-text-outline',
    CartScreen: 'Ionicons/cart-outline',
    SearchScreen: 'Feather/search',
    ProfileScreen: 'FontAwesome/user-circle',
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.branding.primary,
        tabBarStyle: { borderTopColor: 'transparent' },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/home"
              size={25}
              color={focused ? theme.colors.branding.primary : color}
            />
          ),
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/document-text-outline"
              size={25}
              color={focused ? theme.colors.branding.primary : color}
            />
          ),
          title: 'Orders',
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/cart-outline"
              size={25}
              color={focused ? theme.colors.branding.primary : color}
            />
          ),
          title: 'Cart',
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/search"
              size={25}
              color={focused ? theme.colors.branding.primary : color}
            />
          ),
          title: 'Search',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="FontAwesome/user-circle"
              size={25}
              color={focused ? theme.colors.branding.primary : color}
            />
          ),
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.colors.background.base,
        },
      }}
      linking={LinkingConfiguration}
      navigationInChildEnabled={true}
    >
      <Stack.Navigator
        initialRouteName="OnboardingScreen"
        screenOptions={{
          cardStyle: { flex: 1 },
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
          headerMode: 'none',
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="AboutusScreen"
          component={AboutusScreen}
          options={{
            title: 'About us',
          }}
        />
        <Stack.Screen
          name="AddnewaddressScreen"
          component={AddnewaddressScreen}
          options={{
            title: 'Add new address',
          }}
        />
        <Stack.Screen
          name="CartEmptyScreen"
          component={CartEmptyScreen}
          options={{
            title: 'Cart Empty',
          }}
        />
        <Stack.Screen
          name="ChangePasswordErrorScreen"
          component={ChangePasswordErrorScreen}
          options={{
            title: 'Change Password  Error',
          }}
        />
        <Stack.Screen
          name="ChangePasswordSuccessScreen"
          component={ChangePasswordSuccessScreen}
          options={{
            title: 'Change Password  Success',
          }}
        />
        <Stack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
          options={{
            title: 'Checkout',
          }}
        />
        <Stack.Screen
          name="ConfirmCodeScreen"
          component={ConfirmCodeScreen}
          options={{
            title: 'Confirm Code',
          }}
        />
        <Stack.Screen
          name="DeliveryAddressScreen"
          component={DeliveryAddressScreen}
          options={{
            title: 'Delivery Address',
          }}
        />
        <Stack.Screen
          name="DeliveryDetailsScreen"
          component={DeliveryDetailsScreen}
          options={{
            title: 'Delivery Details',
          }}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{
            title: 'Edit Profile',
          }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{
            title: 'Forgot Password',
          }}
        />
        <Stack.Screen
          name="GetDiscountScreen"
          component={GetDiscountScreen}
          options={{
            title: 'Get Discount',
          }}
        />
        <Stack.Screen
          name="ItemDetailsScreen"
          component={ItemDetailsScreen}
          options={{
            title: 'Item Details',
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Log in',
          }}
        />
        <Stack.Screen
          name="NewPasswordScreen"
          component={NewPasswordScreen}
          options={{
            title: 'New Password ',
          }}
        />
        <Stack.Screen
          name="NotificationDetailsScreen"
          component={NotificationDetailsScreen}
          options={{
            title: 'Notification Details',
          }}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{
            title: 'Notifications',
          }}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{
            title: 'Onboarding',
          }}
        />
        <Stack.Screen
          name="PaymentmethodsScreen"
          component={PaymentmethodsScreen}
          options={{
            title: 'Payment methods',
          }}
        />
        <Stack.Screen
          name="PromocodeScreen"
          component={PromocodeScreen}
          options={{
            title: 'Promo code',
          }}
        />
        <Stack.Screen
          name="RestaurantDetailsScreen"
          component={RestaurantDetailsScreen}
          options={{
            title: 'Restaurant Details',
          }}
        />
        <Stack.Screen
          name="SearchaddressScreen"
          component={SearchaddressScreen}
          options={{
            title: 'Search address',
          }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            title: 'Sign up',
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            title: 'Welcome Screen',
          }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{
            title: 'Bottom Tab Navigator',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
