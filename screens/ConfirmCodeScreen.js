import React from 'react';
import {
  Button,
  IconButton,
  PinInput,
  Pressable,
  ScreenContainer,
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

const ConfirmCodeScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [pinInputValue, setPinInputValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [codeInputValue, setCodeInputValue] = React.useState(undefined);

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: theme.colors.background.base, flex: 1 },
          dimensions.width
        )}
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
            { marginLeft: 20, marginTop: 20 },
            dimensions.width
          )}
        />
        {/* Main View */}
        <View>
          {/* Top view */}
          <View
            style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}
          >
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
                      { minWidth: Breakpoints.BigScreen, value: 32 },
                    ],
                    textAlign: 'center',
                  }
                ),
                dimensions.width
              )}
            >
              {'Reset code'}
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
                    lineHeight: [
                      { minWidth: Breakpoints.Mobile, value: 21 },
                      { minWidth: Breakpoints.Desktop, value: 30 },
                      { minWidth: Breakpoints.BigScreen, value: 32 },
                    ],
                    marginTop: 4,
                    padding: 20,
                    textAlign: 'center',
                  }
                ),
                dimensions.width
              )}
            >
              {'We sent 6-digit code to +1 234 567 89 00'}
            </Text>
          </View>
          {/* Form */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: [
                  { minWidth: Breakpoints.Tablet, value: 'stretch' },
                  { minWidth: Breakpoints.Laptop, value: 'stretch' },
                ],
                padding: 20,
              },
              dimensions.width
            )}
          >
            <PinInput
              autoComplete={'one-time-code'}
              blurOnFull={true}
              changeTextDelay={500}
              clearOnCellFocus={true}
              focusedBorderColor={theme.colors.branding.primary}
              keyboardType={'number-pad'}
              onChangeText={newPinInputValue => {
                const codeInputValue = newPinInputValue;
                try {
                  setPinInputValue(newPinInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              onInputFull={finalValue => {
                const codeInputValue = finalValue;
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              renderItem={({ cellValue, isFocused }) => {
                return null;
              }}
              secureTextEntry={false}
              {...GlobalStyles.PinInputStyles(theme)['Pin Input'].props}
              cellCount={6}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.PinInputStyles(theme)['Pin Input'].style,
                  theme.typography.headline5,
                  {}
                ),
                dimensions.width
              )}
              value={pinInputValue}
            />
            {/* Confirm */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  navigation.navigateDeprecated('NewPasswordScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.ButtonStyles(theme)['action btn big screen']
                .props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['action btn big screen']
                    .style,
                  {
                    fontSize: { minWidth: Breakpoints.Tablet, value: 20 },
                    height: { minWidth: Breakpoints.Tablet, value: 60 },
                    marginTop: 60,
                  }
                ),
                dimensions.width
              )}
              title={'Confirm'}
            />
          </View>
          {/* Bottom View */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 20 },
              dimensions.width
            )}
          >
            {/* Return to login */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 20,
                  paddingBottom: 5,
                  paddingTop: 5,
                },
                dimensions.width
              )}
            >
              <Pressable
                onPress={() => {
                  try {
                    navigation.goBack();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginLeft: 8 },
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
                        color: palettes.FastFood['Custom Color_3'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: [
                          { minWidth: Breakpoints.Tablet, value: 18 },
                          { minWidth: Breakpoints.BigScreen, value: 25 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Return to login'}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ConfirmCodeScreen);
