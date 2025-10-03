import React from 'react';
import {
  Button,
  Link,
  Pressable,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const LoginScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
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
        {'Log in'}
      </Text>

      <SimpleStyleKeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        style={StyleSheet.applyWidth({ paddingBottom: 40 }, dimensions.width)}
      >
        {/* Form */}
        <View style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}>
          {/* Email */}
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
                      { minWidth: Breakpoints.Desktop, value: 20 },
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                    ],
                    opacity: 0.7,
                  }
                ),
                dimensions.width
              )}
            >
              {'Email'}
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
              placeholder={'example@mail.com'}
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
                    textAlign: 'left',
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Password */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginTop: [
                  { minWidth: Breakpoints.Mobile, value: 20 },
                  { minWidth: Breakpoints.Tablet, value: 40 },
                  { minWidth: Breakpoints.BigScreen, value: 60 },
                ],
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
              {'Password'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
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
              value={textInputValue2}
            />
          </View>
        </View>
        {/* Bottom View */}
        <View
          style={StyleSheet.applyWidth(
            {
              marginBottom: 20,
              marginTop: [
                { minWidth: Breakpoints.Mobile, value: 12 },
                { minWidth: Breakpoints.BigScreen, value: 40 },
              ],
            },
            dimensions.width
          )}
        >
          {/* Log in */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigateDeprecated('BottomTabNavigator', {
                  screen: 'HomeScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
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
                  margin: 20,
                }
              ),
              dimensions.width
            )}
            title={'Log in'}
          />
          {/* or */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_400Regular',
                fontSize: [
                  { minWidth: Breakpoints.Tablet, value: 18 },
                  { minWidth: Breakpoints.BigScreen, value: 25 },
                ],
                margin: [
                  { minWidth: Breakpoints.Tablet, value: 25 },
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                ],
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'or'}
          </Text>
          {/* Social options */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 6,
                paddingTop: 6,
              },
              dimensions.width
            )}
          >
            {/* Google */}
            <Pressable
              style={StyleSheet.applyWidth(
                {
                  marginLeft: 6,
                  marginRight: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 48,
                    justifyContent: 'center',
                    width: 48,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(Images['Google'])}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
            {/* FB */}
            <Pressable
              style={StyleSheet.applyWidth(
                {
                  marginLeft: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                  marginRight: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 48,
                    justifyContent: 'center',
                    width: 48,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(Images['FB'])}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
            {/* Apple */}
            <Pressable
              style={StyleSheet.applyWidth(
                {
                  marginLeft: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                  marginRight: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 48,
                    justifyContent: 'center',
                    width: 48,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(Images['Apple'])}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
          {/* Forgot Password */}
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
                  navigation.navigateDeprecated('ForgotPasswordScreen');
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
              title={'Forgot Password'}
            />
          </View>
        </View>
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
