import React from 'react';
import {
  Button,
  IconButton,
  Link,
  ScreenContainer,
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

const ForgotPasswordScreen = props => {
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
      {/* Main View */}
      <View>
        {/* Top view */}
        <View>
          {/* Screen heading */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_600SemiBold',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 21 },
                  { minWidth: Breakpoints.Tablet, value: 25 },
                  { minWidth: Breakpoints.Laptop, value: 28 },
                  { minWidth: Breakpoints.Desktop, value: 30 },
                  { minWidth: Breakpoints.BigScreen, value: 32 },
                ],
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Forgot password'}
          </Text>
          {/* details */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_300Light',
                fontSize: [
                  { minWidth: Breakpoints.Tablet, value: 18 },
                  { minWidth: Breakpoints.Laptop, value: 21 },
                  { minWidth: Breakpoints.Desktop, value: 23 },
                  { minWidth: Breakpoints.BigScreen, value: 25 },
                ],
                lineHeight: [
                  { minWidth: Breakpoints.Mobile, value: 21 },
                  { minWidth: Breakpoints.Tablet, value: 25 },
                ],
                marginTop: 12,
                padding: 20,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {
              'Enter your phone number. We will send to you a code to reset password'
            }
          </Text>
        </View>
        {/* Form */}
        <View style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}>
          {/* Phone */}
          <View>
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
              {'Phone'}
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
              placeholder={'+0 000 000 00 00'}
              placeholderTextColor={theme.colors.text.light}
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
            {/* Note */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors.text.medium,
                    fontFamily: 'Inter_300Light',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 11 },
                      { minWidth: Breakpoints.Tablet, value: 15 },
                      { minWidth: Breakpoints.Desktop, value: 17 },
                      { minWidth: Breakpoints.BigScreen, value: 20 },
                    ],
                    marginTop: [
                      { minWidth: Breakpoints.Mobile, value: 6 },
                      { minWidth: Breakpoints.Tablet, value: 8 },
                      { minWidth: Breakpoints.Laptop, value: 8 },
                      { minWidth: Breakpoints.Desktop, value: 10 },
                      { minWidth: Breakpoints.BigScreen, value: 12 },
                    ],
                    opacity: 0.7,
                  }
                ),
                dimensions.width
              )}
            >
              {'Firstly add country code, then phone'}
            </Text>
          </View>
          {/* Send code */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigateDeprecated('ConfirmCodeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['action btn tablet'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['action btn tablet'].style,
                { marginTop: 40 }
              ),
              dimensions.width
            )}
            title={'Send code'}
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
              StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'].style, {
                color: palettes.FastFood['Custom Color_3'],
                fontFamily: 'Inter_500Medium',
              }),
              dimensions.width
            )}
            title={'Return to login'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ForgotPasswordScreen);
