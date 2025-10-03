import React from 'react';
import {
  Icon,
  IconButton,
  Pressable,
  ScreenContainer,
  SimpleStyleScrollView,
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

const ProfileScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.branding.primary },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        {...GlobalStyles.ViewStyles(theme)['screen header view'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['screen header view'].style,
            {
              height: [
                { minWidth: Breakpoints.Tablet, value: 65 },
                { minWidth: Breakpoints.Laptop, value: 75 },
                { minWidth: Breakpoints.Desktop, value: 85 },
                { minWidth: Breakpoints.BigScreen, value: 90 },
              ],
              marginLeft: 48,
              paddingLeft: 10,
              paddingRight: 10,
            }
          ),
          dimensions.width
        )}
      >
        {/* Screen heading */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              flex: 1,
              fontFamily: 'Inter_500Medium',
              fontSize: [
                { minWidth: Breakpoints.Mobile, value: 19 },
                { minWidth: Breakpoints.Tablet, value: 22 },
                { minWidth: Breakpoints.Laptop, value: 25 },
                { minWidth: Breakpoints.Desktop, value: 28 },
                { minWidth: Breakpoints.BigScreen, value: 30 },
              ],
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Profile'}
        </Text>
        <IconButton
          onPress={() => {
            try {
              navigation.navigateDeprecated('EditProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          size={32}
          color={theme.colors.text.strong}
          icon={'Feather/edit'}
          style={StyleSheet.applyWidth(
            { marginBottom: 20, marginRight: 20, marginTop: 20 },
            dimensions.width
          )}
        />
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        {/* Main View */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.FastFood['Custom Color'],
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              marginTop: 80,
            },
            dimensions.width
          )}
        >
          {/* User details */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                marginTop: [
                  { minWidth: Breakpoints.Mobile, value: -50 },
                  { minWidth: Breakpoints.BigScreen, value: -50 },
                ],
              },
              dimensions.width
            )}
          >
            {/* ~ Picture */}
            <View>
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={imageSource(Images['Avatar'])}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    {
                      height: [
                        { minWidth: Breakpoints.Tablet, value: 120 },
                        { minWidth: Breakpoints.Laptop, value: 135 },
                        { minWidth: Breakpoints.Desktop, value: 150 },
                        { minWidth: Breakpoints.BigScreen, value: 200 },
                      ],
                      width: [
                        { minWidth: Breakpoints.Tablet, value: 120 },
                        { minWidth: Breakpoints.Laptop, value: 135 },
                        { minWidth: Breakpoints.Desktop, value: 150 },
                        { minWidth: Breakpoints.BigScreen, value: 200 },
                      ],
                    }
                  ),
                  dimensions.width
                )}
              />
            </View>
            {/* ~ name */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              ellipsizeMode={'tail'}
              numberOfLines={1}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    fontFamily: 'Inter_500Medium',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 18 },
                      { minWidth: Breakpoints.Tablet, value: 21 },
                    ],
                    marginTop: 10,
                  }
                ),
                dimensions.width
              )}
            >
              {'Tenzin Owain'}
            </Text>
          </View>
          {/* Menu Options */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, padding: 20 },
              dimensions.width
            )}
          >
            {/* Delivery address */}
            <Pressable
              onPress={() => {
                try {
                  navigation.navigateDeprecated('DeliveryAddressScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 50 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                      { minWidth: Breakpoints.Laptop, value: 75 },
                      { minWidth: Breakpoints.Desktop, value: 80 },
                      { minWidth: Breakpoints.BigScreen, value: 90 },
                    ],
                  },
                  dimensions.width
                )}
              >
                {/* Menu Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(Images['Location'])}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                          { minWidth: Breakpoints.Desktop, value: 35 },
                          { minWidth: Breakpoints.BigScreen, value: 40 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                          { minWidth: Breakpoints.Desktop, value: 35 },
                          { minWidth: Breakpoints.BigScreen, value: 40 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
                {/* Details */}
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingLeft: 16, paddingRight: 16 },
                    dimensions.width
                  )}
                >
                  {/* title */}
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 18 },
                            { minWidth: Breakpoints.Laptop, value: 20 },
                            { minWidth: Breakpoints.Desktop, value: 22 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Delivery address'}
                  </Text>
                  {/* ~ value */}
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_300Light',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 12 },
                            { minWidth: Breakpoints.Tablet, value: 14 },
                            { minWidth: Breakpoints.Laptop, value: 16 },
                            { minWidth: Breakpoints.Desktop, value: 18 },
                            { minWidth: Breakpoints.BigScreen, value: 20 },
                          ],
                          marginTop: 4,
                          opacity: 0.6,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'NYC, Broadway ave 79'}
                  </Text>
                </View>
                <Icon size={24} name={'Feather/chevron-right'} />
              </View>
            </Pressable>
            {/* Payment method */}
            <Pressable
              onPress={() => {
                try {
                  navigation.navigateDeprecated('PaymentmethodsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 50 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                      { minWidth: Breakpoints.Laptop, value: 75 },
                      { minWidth: Breakpoints.Desktop, value: 80 },
                      { minWidth: Breakpoints.BigScreen, value: 90 },
                    ],
                  },
                  dimensions.width
                )}
              >
                {/* Menu Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(Images['Wallet2'])}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                          { minWidth: Breakpoints.Desktop, value: 35 },
                          { minWidth: Breakpoints.BigScreen, value: 40 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                          { minWidth: Breakpoints.Desktop, value: 35 },
                          { minWidth: Breakpoints.BigScreen, value: 40 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
                {/* Details */}
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingLeft: 16, paddingRight: 16 },
                    dimensions.width
                  )}
                >
                  {/* title */}
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 18 },
                            { minWidth: Breakpoints.Laptop, value: 20 },
                            { minWidth: Breakpoints.Desktop, value: 22 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Payment method'}
                  </Text>
                  {/* ~ value */}
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_300Light',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 12 },
                            { minWidth: Breakpoints.Tablet, value: 14 },
                            { minWidth: Breakpoints.Laptop, value: 16 },
                            { minWidth: Breakpoints.Desktop, value: 18 },
                            { minWidth: Breakpoints.BigScreen, value: 20 },
                          ],
                          marginTop: 4,
                          opacity: 0.6,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Mastercard ****7890'}
                  </Text>
                </View>
                <Icon size={24} name={'Feather/chevron-right'} />
              </View>
            </Pressable>
            {/* Language */}
            <Pressable
              style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 50 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                      { minWidth: Breakpoints.Laptop, value: 75 },
                      { minWidth: Breakpoints.Desktop, value: 80 },
                      { minWidth: Breakpoints.BigScreen, value: 90 },
                    ],
                  },
                  dimensions.width
                )}
              >
                {/* Menu Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(Images['LanguageCircle'])}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                          { minWidth: Breakpoints.Desktop, value: 35 },
                          { minWidth: Breakpoints.BigScreen, value: 40 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                          { minWidth: Breakpoints.Desktop, value: 35 },
                          { minWidth: Breakpoints.BigScreen, value: 40 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
                {/* Details */}
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingLeft: 16, paddingRight: 16 },
                    dimensions.width
                  )}
                >
                  {/* title */}
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 18 },
                            { minWidth: Breakpoints.Laptop, value: 20 },
                            { minWidth: Breakpoints.Desktop, value: 22 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Language'}
                  </Text>
                  {/* ~ value */}
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
                            { minWidth: Breakpoints.Mobile, value: 12 },
                            { minWidth: Breakpoints.Tablet, value: 14 },
                            { minWidth: Breakpoints.Laptop, value: 16 },
                            { minWidth: Breakpoints.Desktop, value: 18 },
                            { minWidth: Breakpoints.BigScreen, value: 20 },
                          ],
                          marginTop: 4,
                          opacity: 0.6,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'English'}
                  </Text>
                </View>
                <Icon size={24} name={'Feather/chevron-right'} />
              </View>
            </Pressable>
            {/* Notifications */}
            <Pressable
              onPress={() => {
                try {
                  navigation.navigateDeprecated('NotificationsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 50 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                      { minWidth: Breakpoints.Laptop, value: 75 },
                      { minWidth: Breakpoints.Desktop, value: 80 },
                      { minWidth: Breakpoints.BigScreen, value: 90 },
                    ],
                  },
                  dimensions.width
                )}
              >
                {/* Menu Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(Images['Notification'])}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                          { minWidth: Breakpoints.Desktop, value: 35 },
                          { minWidth: Breakpoints.BigScreen, value: 40 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                          { minWidth: Breakpoints.Desktop, value: 35 },
                          { minWidth: Breakpoints.BigScreen, value: 40 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
                {/* Details */}
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingLeft: 16, paddingRight: 16 },
                    dimensions.width
                  )}
                >
                  {/* title */}
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 18 },
                            { minWidth: Breakpoints.Laptop, value: 20 },
                            { minWidth: Breakpoints.Desktop, value: 22 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Notifications'}
                  </Text>
                </View>
                <Icon size={24} name={'Feather/chevron-right'} />
              </View>
            </Pressable>
            {/* Promo */}
            <Pressable
              onPress={() => {
                try {
                  navigation.navigateDeprecated('PromocodeScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 50 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                      { minWidth: Breakpoints.Laptop, value: 75 },
                      { minWidth: Breakpoints.Desktop, value: 80 },
                      { minWidth: Breakpoints.BigScreen, value: 90 },
                    ],
                  },
                  dimensions.width
                )}
              >
                {/* Menu Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(Images['DiscountShape'])}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                          { minWidth: Breakpoints.Desktop, value: 35 },
                          { minWidth: Breakpoints.BigScreen, value: 40 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                          { minWidth: Breakpoints.Desktop, value: 35 },
                          { minWidth: Breakpoints.BigScreen, value: 40 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
                {/* Details */}
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingLeft: 16, paddingRight: 16 },
                    dimensions.width
                  )}
                >
                  {/* title */}
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 18 },
                            { minWidth: Breakpoints.Laptop, value: 20 },
                            { minWidth: Breakpoints.Desktop, value: 22 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Promo'}
                  </Text>
                  {/* ~ value */}
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          color: palettes.FastFood['Custom Color_2'],
                          fontFamily: 'Inter_300Light',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 12 },
                            { minWidth: Breakpoints.Tablet, value: 14 },
                            { minWidth: Breakpoints.Laptop, value: 16 },
                            { minWidth: Breakpoints.Desktop, value: 18 },
                            { minWidth: Breakpoints.BigScreen, value: 20 },
                          ],
                          marginTop: 4,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'You have 2 new promo codes'}
                  </Text>
                </View>
                <Icon size={24} name={'Feather/chevron-right'} />
              </View>
            </Pressable>
            {/* Terms and conditions */}
            <Pressable
              style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 50 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                      { minWidth: Breakpoints.Laptop, value: 75 },
                      { minWidth: Breakpoints.Desktop, value: 80 },
                      { minWidth: Breakpoints.BigScreen, value: 90 },
                    ],
                  },
                  dimensions.width
                )}
              >
                {/* Menu Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(Images['Document'])}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                          { minWidth: Breakpoints.Desktop, value: 35 },
                          { minWidth: Breakpoints.BigScreen, value: 40 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                          { minWidth: Breakpoints.Desktop, value: 35 },
                          { minWidth: Breakpoints.BigScreen, value: 40 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
                {/* Details */}
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingLeft: 16, paddingRight: 16 },
                    dimensions.width
                  )}
                >
                  {/* title */}
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 18 },
                            { minWidth: Breakpoints.Laptop, value: 20 },
                            { minWidth: Breakpoints.Desktop, value: 22 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Terms and conditions'}
                  </Text>
                </View>
                <Icon size={24} name={'Feather/chevron-right'} />
              </View>
            </Pressable>
            {/* About app */}
            <Pressable
              onPress={() => {
                try {
                  navigation.navigateDeprecated('AboutusScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 50 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                      { minWidth: Breakpoints.Laptop, value: 75 },
                      { minWidth: Breakpoints.Desktop, value: 80 },
                      { minWidth: Breakpoints.BigScreen, value: 90 },
                    ],
                  },
                  dimensions.width
                )}
              >
                {/* Menu Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(Images['InfoCircle'])}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                          { minWidth: Breakpoints.Desktop, value: 35 },
                          { minWidth: Breakpoints.BigScreen, value: 40 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                          { minWidth: Breakpoints.Desktop, value: 35 },
                          { minWidth: Breakpoints.BigScreen, value: 40 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
                {/* Details */}
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingLeft: 16, paddingRight: 16 },
                    dimensions.width
                  )}
                >
                  {/* title */}
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 18 },
                            { minWidth: Breakpoints.Laptop, value: 20 },
                            { minWidth: Breakpoints.Desktop, value: 22 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'About app'}
                  </Text>
                </View>
                <Icon size={24} name={'Feather/chevron-right'} />
              </View>
            </Pressable>
          </View>
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ProfileScreen);
