import React from 'react';
import {
  Button,
  ExpoImage,
  Pressable,
  ScreenContainer,
  SimpleStyleFlashList,
  withTheme,
} from '@draftbit/ui';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useIsFocused from '../utils/useIsFocused';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const CartScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Screen heading */}
      <Text
        accessible={true}
        selectable={false}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            fontFamily: 'Inter_500Medium',
            fontSize: [
              { minWidth: Breakpoints.Mobile, value: 19 },
              { minWidth: Breakpoints.Tablet, value: 22 },
              { minWidth: Breakpoints.Laptop, value: 25 },
              { minWidth: Breakpoints.Desktop, value: 28 },
              { minWidth: Breakpoints.BigScreen, value: 30 },
            ],
            lineHeight: [
              { minWidth: Breakpoints.Mobile, value: 50 },
              { minWidth: Breakpoints.Tablet, value: 65 },
              { minWidth: Breakpoints.Laptop, value: 75 },
              { minWidth: Breakpoints.Desktop, value: 85 },
              { minWidth: Breakpoints.BigScreen, value: 90 },
            ],
            textAlign: 'center',
          }),
          dimensions.width
        )}
      >
        {'Cart'}
      </Text>
      {/* Items in Cart */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'space-between' },
          dimensions.width
        )}
      >
        {/* Food Items */}
        <ExampleDataApi.FetchFoodItemsGET>
          {({ loading, error, data, refetchFoodItems }) => {
            const foodItemsData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <SimpleStyleFlashList
                data={foodItemsData}
                estimatedItemSize={50}
                horizontal={false}
                inverted={false}
                keyExtractor={(flashListData, index) =>
                  flashListData?.id ??
                  flashListData?.uuid ??
                  index?.toString() ??
                  JSON.stringify(flashListData)
                }
                listKey={'Items in Cart->Food Items->FlashList'}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const flashListData = item;
                  return (
                    <Pressable>
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            borderBottomWidth: 2,
                            borderColor: theme.colors.border.brand,
                            flexDirection: 'row',
                            marginLeft: [
                              { minWidth: Breakpoints.Mobile, value: 20 },
                              { minWidth: Breakpoints.Tablet, value: 25 },
                              { minWidth: Breakpoints.BigScreen, value: 35 },
                            ],
                            marginRight: [
                              { minWidth: Breakpoints.Mobile, value: 20 },
                              { minWidth: Breakpoints.Tablet, value: 25 },
                              { minWidth: Breakpoints.BigScreen, value: 35 },
                            ],
                            paddingBottom: 15,
                            paddingTop: 15,
                          },
                          dimensions.width
                        )}
                      >
                        <ExpoImage
                          allowDownscaling={true}
                          cachePolicy={'disk'}
                          contentPosition={'center'}
                          resizeMode={'cover'}
                          transitionDuration={300}
                          transitionEffect={'cross-dissolve'}
                          transitionTiming={'ease-in-out'}
                          {...GlobalStyles.ExpoImageStyles(theme)['Image 29']
                            .props}
                          source={imageSource(`${flashListData?.URL}`)}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ExpoImageStyles(theme)['Image 29']
                                .style,
                              {
                                height: [
                                  { minWidth: Breakpoints.Mobile, value: 64 },
                                  { minWidth: Breakpoints.Tablet, value: 77 },
                                  { minWidth: Breakpoints.Laptop, value: 97 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 128,
                                  },
                                ],
                                width: [
                                  { minWidth: Breakpoints.Mobile, value: 80 },
                                  { minWidth: Breakpoints.Tablet, value: 96 },
                                  { minWidth: Breakpoints.Laptop, value: 120 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 160,
                                  },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                        />
                        <View
                          style={StyleSheet.applyWidth(
                            { flex: 1, gap: 8, paddingLeft: 16 },
                            dimensions.width
                          )}
                        >
                          {/* Name */}
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
                                  fontFamily: 'Inter_600SemiBold',
                                  fontSize: [
                                    { minWidth: Breakpoints.Mobile, value: 16 },
                                    { minWidth: Breakpoints.Tablet, value: 19 },
                                    { minWidth: Breakpoints.Laptop, value: 21 },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 23,
                                    },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 25,
                                    },
                                  ],
                                  marginLeft: [
                                    { minWidth: Breakpoints.Tablet, value: 10 },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 15,
                                    },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 25,
                                    },
                                  ],
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {flashListData?.name}
                          </Text>

                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: [
                                  {
                                    minWidth: Breakpoints.Mobile,
                                    value: 'center',
                                  },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 'flex-start',
                                  },
                                ],
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginLeft: [
                                  { minWidth: Breakpoints.Tablet, value: 10 },
                                  { minWidth: Breakpoints.Desktop, value: 15 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 25,
                                  },
                                ],
                              },
                              dimensions.width
                            )}
                          >
                            {/* quantity */}
                            <Text
                              accessible={true}
                              selectable={false}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: theme.colors.text.light,
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: [
                                      {
                                        minWidth: Breakpoints.Mobile,
                                        value: 13,
                                      },
                                      {
                                        minWidth: Breakpoints.Tablet,
                                        value: 16,
                                      },
                                      {
                                        minWidth: Breakpoints.Laptop,
                                        value: 18,
                                      },
                                      {
                                        minWidth: Breakpoints.Desktop,
                                        value: 20,
                                      },
                                      {
                                        minWidth: Breakpoints.BigScreen,
                                        value: 22,
                                      },
                                    ],
                                    marginTop: 4,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'2 x 6.80'}
                            </Text>
                            {/* Price */}
                            <Text
                              accessible={true}
                              selectable={false}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: palettes.FastFood['Custom Color_4'],
                                    fontFamily: 'Inter_600SemiBold',
                                    fontSize: [
                                      {
                                        minWidth: Breakpoints.Tablet,
                                        value: 18,
                                      },
                                      {
                                        minWidth: Breakpoints.Laptop,
                                        value: 20,
                                      },
                                      {
                                        minWidth: Breakpoints.Desktop,
                                        value: 20,
                                      },
                                      {
                                        minWidth: Breakpoints.BigScreen,
                                        value: 22,
                                      },
                                    ],
                                    marginTop: 6,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'$'}
                              {flashListData?.Price}
                              {'0'}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </Pressable>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={false}
                style={StyleSheet.applyWidth({ flex: 0 }, dimensions.width)}
              />
            );
          }}
        </ExampleDataApi.FetchFoodItemsGET>
        {/* Bottom View */}
        <View style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: [
                  { minWidth: Breakpoints.Mobile, value: 'center' },
                  { minWidth: Breakpoints.BigScreen, value: 'center' },
                ],
              },
              dimensions.width
            )}
          >
            {/* Label */}
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
                      { minWidth: Breakpoints.Mobile, value: 14 },
                      { minWidth: Breakpoints.Tablet, value: 18 },
                      { minWidth: Breakpoints.Laptop, value: 20 },
                      { minWidth: Breakpoints.Desktop, value: 22 },
                      { minWidth: Breakpoints.BigScreen, value: 25 },
                    ],
                    opacity: 0.5,
                    textAlign: 'center',
                  }
                ),
                dimensions.width
              )}
            >
              {'Total'}
            </Text>
            {/* Total price */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    fontFamily: 'Inter_700Bold',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 18 },
                      { minWidth: Breakpoints.Tablet, value: 23 },
                      { minWidth: Breakpoints.Laptop, value: 25 },
                      { minWidth: Breakpoints.Desktop, value: 27 },
                      { minWidth: Breakpoints.BigScreen, value: 29 },
                    ],
                    marginLeft: 10,
                    textAlign: 'center',
                  }
                ),
                dimensions.width
              )}
            >
              {'$32.60'}
            </Text>
          </View>
          {/* Go to checkout */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigateDeprecated('CheckoutScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['action btn tablet'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['action btn tablet'].style,
                {
                  marginTop: [
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.BigScreen, value: 25 },
                  ],
                }
              ),
              dimensions.width
            )}
            title={'Go to checkout'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(CartScreen);
