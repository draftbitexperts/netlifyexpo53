import React from 'react';
import {
  Button,
  IconButton,
  Pressable,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
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

const DeliveryAddressScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState(2);

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
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
              marginRight: 48,
            }
          ),
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
            {
              marginBottom: 20,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
            },
            dimensions.width
          )}
        />
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
          {'Delivery Address'}
        </Text>
      </View>
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.FastFood['Custom Color'],
            flex: 1,
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        <RadioButtonGroup
          onValueChange={newRadioButtonGroupValue => {
            const radioButtonGroupValue = newRadioButtonGroupValue;
            try {
              setRadioButtonGroupValue(newRadioButtonGroupValue);
            } catch (err) {
              console.error(err);
            }
          }}
          value={radioButtonGroupValue}
        >
          {/* Addresses */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 10, padding: 20 },
              dimensions.width
            )}
          >
            {/* Current address */}
            <Pressable
              onPress={() => {
                try {
                  setRadioButtonGroupValue(1);
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
                      { minWidth: Breakpoints.Tablet, value: 60 },
                      { minWidth: Breakpoints.Laptop, value: 65 },
                      { minWidth: Breakpoints.Desktop, value: 70 },
                      { minWidth: Breakpoints.BigScreen, value: 85 },
                    ],
                  },
                  dimensions.width
                )}
              >
                {/* Menu Icon */}
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(Images['Gps'])}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
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
                            { minWidth: Breakpoints.Tablet, value: 19 },
                            { minWidth: Breakpoints.Laptop, value: 21 },
                            { minWidth: Breakpoints.Desktop, value: 23 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Current address'}
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
                    {'Doyers str. 206'}
                  </Text>
                </View>
                <RadioButton
                  size={24}
                  unselectedColor={theme.colors.branding.primary}
                  color={palettes.FastFood['Custom Color_3']}
                  selectedIcon={'Ionicons/checkmark-circle-sharp'}
                  unselectedIcon={'Ionicons/checkmark-circle-outline'}
                  value={1}
                />
              </View>
            </Pressable>
            {/* Home */}
            <Pressable
              onPress={() => {
                try {
                  setRadioButtonGroupValue(2);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 14 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 50 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                      { minWidth: Breakpoints.Laptop, value: 70 },
                      { minWidth: Breakpoints.Desktop, value: 75 },
                      { minWidth: Breakpoints.BigScreen, value: 85 },
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
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
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
                            { minWidth: Breakpoints.Tablet, value: 19 },
                            { minWidth: Breakpoints.Laptop, value: 21 },
                            { minWidth: Breakpoints.Desktop, value: 23 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Home'}
                  </Text>
                  {/* ~ value */}
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    ellipsizeMode={'tail'}
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
                <RadioButton
                  size={24}
                  unselectedColor={theme.colors.branding.primary}
                  color={palettes.FastFood['Custom Color_3']}
                  selectedIcon={'Ionicons/checkmark-circle-sharp'}
                  unselectedIcon={'Ionicons/checkmark-circle-outline'}
                  value={2}
                />
              </View>
            </Pressable>
            {/* Work */}
            <Pressable
              onPress={() => {
                try {
                  setRadioButtonGroupValue(3);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 14 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 50 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                      { minWidth: Breakpoints.Laptop, value: 70 },
                      { minWidth: Breakpoints.Desktop, value: 75 },
                      { minWidth: Breakpoints.BigScreen, value: 85 },
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
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
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
                            { minWidth: Breakpoints.Tablet, value: 19 },
                            { minWidth: Breakpoints.Laptop, value: 21 },
                            { minWidth: Breakpoints.Desktop, value: 23 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Work'}
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
                    {'St. Mark’s Place Business Plaza 18'}
                  </Text>
                </View>
                <RadioButton
                  size={24}
                  unselectedColor={theme.colors.branding.primary}
                  color={palettes.FastFood['Custom Color_3']}
                  selectedIcon={'Ionicons/checkmark-circle-sharp'}
                  unselectedIcon={'Ionicons/checkmark-circle-outline'}
                  value={3}
                />
              </View>
            </Pressable>
            {/* Park Avenue 15 */}
            <Pressable
              onPress={() => {
                try {
                  setRadioButtonGroupValue(4);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 14 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 50 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                      { minWidth: Breakpoints.Laptop, value: 70 },
                      { minWidth: Breakpoints.Desktop, value: 75 },
                      { minWidth: Breakpoints.BigScreen, value: 85 },
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
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
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
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 19 },
                            { minWidth: Breakpoints.Laptop, value: 21 },
                            { minWidth: Breakpoints.Desktop, value: 23 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Park Avenue 15'}
                  </Text>
                </View>
                <RadioButton
                  size={24}
                  unselectedColor={theme.colors.branding.primary}
                  color={palettes.FastFood['Custom Color_3']}
                  selectedIcon={'Ionicons/checkmark-circle-sharp'}
                  unselectedIcon={'Ionicons/checkmark-circle-outline'}
                  value={4}
                />
              </View>
            </Pressable>
            {/* Washington str. 58/105 */}
            <Pressable
              onPress={() => {
                try {
                  setRadioButtonGroupValue(5);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 14 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 50 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                      { minWidth: Breakpoints.Laptop, value: 70 },
                      { minWidth: Breakpoints.Desktop, value: 75 },
                      { minWidth: Breakpoints.BigScreen, value: 85 },
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
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 32 },
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
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 19 },
                            { minWidth: Breakpoints.Laptop, value: 21 },
                            { minWidth: Breakpoints.Desktop, value: 23 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Washington str. 58/105'}
                  </Text>
                </View>
                <RadioButton
                  size={24}
                  unselectedColor={theme.colors.branding.primary}
                  color={palettes.FastFood['Custom Color_3']}
                  selectedIcon={'Ionicons/checkmark-circle-sharp'}
                  unselectedIcon={'Ionicons/checkmark-circle-outline'}
                  value={5}
                />
              </View>
            </Pressable>
          </View>
        </RadioButtonGroup>
        {/* Add new address */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigateDeprecated('AddnewaddressScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['action btn tablet'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn tablet'].style,
              { margin: 20 }
            ),
            dimensions.width
          )}
          title={'Add new address'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(DeliveryAddressScreen);
