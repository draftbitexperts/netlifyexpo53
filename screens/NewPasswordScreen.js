import React from 'react';
import {
  Button,
  IconButton,
  Link,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const NewPasswordScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      <IconButton
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
        color={theme.colors.text.strong}
        icon={'AntDesign/left'}
        size={28}
        style={StyleSheet.applyWidth(
          { marginBottom: 20, marginLeft: 20, marginTop: 20 },
          dimensions.width
        )}
      />
      <SimpleStyleKeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        style={StyleSheet.applyWidth(
          { flex: { minWidth: Breakpoints.BigScreen, value: 1 } },
          dimensions.width
        )}
      >
        {/* Main View */}
        <View
          style={StyleSheet.applyWidth(
            {
              flex: { minWidth: Breakpoints.BigScreen, value: 1 },
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          {/* Top view */}
          <View>
            {/* Screen heading */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 21 },
                      { minWidth: Breakpoints.Tablet, value: 25 },
                      { minWidth: Breakpoints.Laptop, value: 28 },
                      { minWidth: Breakpoints.Desktop, value: 30 },
                    ],
                    textAlign: 'center',
                  }
                ),
                dimensions.width
              )}
            >
              {'New password'}
            </Text>
            {/* details */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    fontFamily: 'Inter_300Light',
                    fontSize: [
                      { minWidth: Breakpoints.Tablet, value: 18 },
                      { minWidth: Breakpoints.Laptop, value: 21 },
                      { minWidth: Breakpoints.Desktop, value: 23 },
                      { minWidth: Breakpoints.BigScreen, value: 25 },
                    ],
                    lineHeight: 21,
                    marginTop: 4,
                    padding: 20,
                    textAlign: 'center',
                  }
                ),
                dimensions.width
              )}
            >
              {'Set your a new password'}
            </Text>
          </View>
          {/* Form */}
          <View>
            {/* New password */}
            <View
              style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
            >
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      fontFamily: 'Inter_400Regular',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 18 },
                        { minWidth: Breakpoints.Desktop, value: 24 },
                      ],
                      opacity: 0.7,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'New password'}
              </Text>
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                changeTextDelay={500}
                onChangeText={newTextInputValue => {
                  const textInputValue = newTextInputValue;
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
                keyboardType={'email-address'}
                placeholder={'Enter password'}
                placeholderTextColor={theme.colors.text.light}
                secureTextEntry={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                    {
                      fontFamily: 'Inter_400Regular',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 18 },
                        { minWidth: Breakpoints.Desktop, value: 20 },
                        { minWidth: Breakpoints.BigScreen, value: 24 },
                      ],
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 48 },
                        { minWidth: Breakpoints.Tablet, value: 60 },
                        { minWidth: Breakpoints.BigScreen, value: 70 },
                      ],
                      marginTop: 10,
                      paddingLeft: 16,
                      paddingRight: 16,
                    }
                  ),
                  dimensions.width
                )}
                value={textInputValue}
              />
            </View>
            {/* Repeat new password */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flex: { minWidth: Breakpoints.BigScreen, value: 1 },
                  marginTop: 20,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      fontFamily: 'Inter_400Regular',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 18 },
                        { minWidth: Breakpoints.Desktop, value: 20 },
                        { minWidth: Breakpoints.BigScreen, value: 24 },
                      ],
                      opacity: 0.7,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Repeat new password'}
              </Text>
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                changeTextDelay={500}
                onChangeText={newTextInputValue => {
                  const textInputValue = newTextInputValue;
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
                keyboardType={'email-address'}
                placeholder={'Enter password'}
                placeholderTextColor={theme.colors.text.light}
                secureTextEntry={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                    {
                      fontFamily: 'Inter_400Regular',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 18 },
                        { minWidth: Breakpoints.Desktop, value: 20 },
                        { minWidth: Breakpoints.BigScreen, value: 24 },
                      ],
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 48 },
                        { minWidth: Breakpoints.Tablet, value: 60 },
                        { minWidth: Breakpoints.BigScreen, value: 70 },
                      ],
                      marginTop: 10,
                      paddingLeft: 16,
                      paddingRight: 16,
                    }
                  ),
                  dimensions.width
                )}
                value={textInputValue}
              />
            </View>
            {/* Set new password */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  navigation.navigateDeprecated('ChangePasswordSuccessScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              disabled={false}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  {
                    borderRadius: 12,
                    fontFamily: 'Inter_500Medium',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 16 },
                      { minWidth: Breakpoints.Tablet, value: 20 },
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                    ],
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.BigScreen, value: 80 },
                    ],
                    marginTop: 40,
                  }
                ),
                dimensions.width
              )}
              title={'Set new password'}
            />
          </View>
          {/* Return to login */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
              dimensions.width
            )}
          >
            <Link
              accessible={true}
              onPress={() => {
                try {
                  navigation.navigateDeprecated('LoginScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              selectable={false}
              {...GlobalStyles.LinkStyles(theme)['Link'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.LinkStyles(theme)['Link'].style,
                  {
                    color: palettes.FastFood['Custom Color_3'],
                    fontFamily: 'Inter_500Medium',
                  }
                ),
                dimensions.width
              )}
              title={'Return to login'}
            />
          </View>
        </View>
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(NewPasswordScreen);
