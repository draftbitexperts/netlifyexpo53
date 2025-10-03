import React from 'react';
import {
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
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useIsFocused from '../utils/useIsFocused';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const OrdersScreen = props => {
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
        {'Orders'}
      </Text>

      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: { minWidth: Breakpoints.Tablet, value: 'row' },
            flexWrap: { minWidth: Breakpoints.Tablet, value: 'nowrap' },
          },
          dimensions.width
        )}
      >
        {/* Current Order */}
        <View
          style={StyleSheet.applyWidth(
            {
              marginTop: 25,
              width: { minWidth: Breakpoints.Tablet, value: '50%' },
            },
            dimensions.width
          )}
        >
          {/* heading */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors.text.medium,
                fontFamily: 'Inter_500Medium',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 16 },
                  { minWidth: Breakpoints.Desktop, value: 21 },
                ],
                marginBottom: 8,
                marginLeft: 20,
                opacity: 0.6,
              }),
              dimensions.width
            )}
          >
            {'Current order'}
          </Text>
          {/* Food Items */}
          <ExampleDataApi.FetchUsersGET count={1}>
            {({ loading, error, data, refetchUsers }) => {
              const foodItemsData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <>
                  {/* FlashList 2 */}
                  <SimpleStyleFlashList
                    data={foodItemsData}
                    estimatedItemSize={50}
                    horizontal={false}
                    inverted={false}
                    keyExtractor={(flashList2Data, index) =>
                      flashList2Data?.id ??
                      flashList2Data?.uuid ??
                      index?.toString() ??
                      JSON.stringify(flashList2Data)
                    }
                    listKey={'View->Current Order->Food Items->FlashList 2'}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const flashList2Data = item;
                      return (
                        <Pressable
                          onPress={() => {
                            try {
                              navigation.navigateDeprecated(
                                'DeliveryDetailsScreen'
                              );
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 2,
                                borderColor: theme.colors.border.brand,
                                flexDirection: 'row',
                                marginLeft: 20,
                                marginRight: 20,
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
                              source={imageSource(Images['Burger'])}
                              style={StyleSheet.applyWidth(
                                {
                                  borderRadius: 8,
                                  height: [
                                    { minWidth: Breakpoints.Mobile, value: 64 },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 100,
                                    },
                                  ],
                                  width: [
                                    {
                                      minWidth: Breakpoints.Mobile,
                                      value: 100,
                                    },
                                    { minWidth: Breakpoints.Tablet, value: 80 },
                                    {
                                      minWidth: Breakpoints.Laptop,
                                      value: 100,
                                    },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 100,
                                    },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 125,
                                    },
                                  ],
                                },
                                dimensions.width
                              )}
                            />
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1, paddingLeft: 16 },
                                dimensions.width
                              )}
                            >
                              {/* Name */}
                              <Text
                                accessible={true}
                                selectable={false}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 16,
                                        },
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 21,
                                        },
                                        {
                                          minWidth: Breakpoints.BigScreen,
                                          value: 23,
                                        },
                                      ],
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'McDonalds-Combo menu'}
                              </Text>

                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: 8,
                                    paddingTop: 5,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Price */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  {...GlobalStyles.TextStyles(theme)['Text']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text']
                                        .style,
                                      {
                                        color: theme.colors.text.strong,
                                        fontFamily: 'Inter_600SemiBold',
                                        fontSize: [
                                          {
                                            minWidth: Breakpoints.Desktop,
                                            value: 19,
                                          },
                                          {
                                            minWidth: Breakpoints.BigScreen,
                                            value: 21,
                                          },
                                        ],
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'$34.60'}
                                </Text>
                                {/* Status */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      justifyContent: 'flex-end',
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
                                    {...GlobalStyles.ExpoImageStyles(theme)[
                                      'Image 30'
                                    ].props}
                                    source={imageSource(Images['Moped'])}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.ExpoImageStyles(theme)[
                                          'Image 30'
                                        ].style,
                                        {
                                          height: [
                                            {
                                              minWidth: Breakpoints.Mobile,
                                              value: 20,
                                            },
                                            {
                                              minWidth: Breakpoints.Desktop,
                                              value: 30,
                                            },
                                            {
                                              minWidth: Breakpoints.BigScreen,
                                              value: 32,
                                            },
                                          ],
                                          width: [
                                            {
                                              minWidth: Breakpoints.Mobile,
                                              value: 20,
                                            },
                                            {
                                              minWidth: Breakpoints.Desktop,
                                              value: 30,
                                            },
                                            {
                                              minWidth: Breakpoints.BigScreen,
                                              value: 32,
                                            },
                                          ],
                                        }
                                      ),
                                      dimensions.width
                                    )}
                                  />
                                  <Text
                                    accessible={true}
                                    selectable={false}
                                    {...GlobalStyles.TextStyles(theme)['Text']
                                      .props}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)['Text']
                                          .style,
                                        {
                                          color:
                                            palettes.FastFood['Custom Color_3'],
                                          fontFamily: 'Inter_500Medium',
                                          fontSize: [
                                            {
                                              minWidth: Breakpoints.Mobile,
                                              value: 13,
                                            },
                                            {
                                              minWidth: Breakpoints.Desktop,
                                              value: 18,
                                            },
                                            {
                                              minWidth: Breakpoints.BigScreen,
                                              value: 20,
                                            },
                                          ],
                                          marginLeft: 5,
                                        }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {'On the way'}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>
                        </Pressable>
                      );
                    }}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                </>
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
        {/* Past orders */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderColor: {
                minWidth: Breakpoints.Tablet,
                value: theme.colors.border.brand,
              },
              borderLeftWidth: { minWidth: Breakpoints.Tablet, value: 1 },
              flex: 1,
              marginTop: 25,
            },
            dimensions.width
          )}
        >
          {/* heading */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors.text.medium,
                fontFamily: 'Inter_500Medium',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 16 },
                  { minWidth: Breakpoints.Desktop, value: 21 },
                ],
                marginBottom: 8,
                marginLeft: 20,
                opacity: 0.6,
              }),
              dimensions.width
            )}
          >
            {'Past orders'}
          </Text>
          {/* Food Items */}
          <ExampleDataApi.FetchUsersGET count={6}>
            {({ loading, error, data, refetchUsers }) => {
              const foodItemsData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <>
                  {/* FlashList 3 */}
                  <SimpleStyleFlashList
                    data={foodItemsData}
                    estimatedItemSize={50}
                    horizontal={false}
                    inverted={false}
                    keyExtractor={(flashList3Data, index) =>
                      flashList3Data?.id ??
                      flashList3Data?.uuid ??
                      index?.toString() ??
                      JSON.stringify(flashList3Data)
                    }
                    listKey={'View->Past orders->Food Items->FlashList 3'}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const flashList3Data = item;
                      return (
                        <Pressable>
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 2,
                                borderColor: theme.colors.border.brand,
                                flexDirection: 'row',
                                marginLeft: 20,
                                marginRight: 20,
                                paddingBottom: [
                                  { minWidth: Breakpoints.Mobile, value: 15 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 25,
                                  },
                                ],
                                paddingTop: [
                                  { minWidth: Breakpoints.Mobile, value: 15 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 25,
                                  },
                                ],
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
                              source={imageSource(Images['Burger'])}
                              style={StyleSheet.applyWidth(
                                {
                                  borderRadius: 8,
                                  height: [
                                    { minWidth: Breakpoints.Mobile, value: 64 },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 100,
                                    },
                                  ],
                                  width: [
                                    {
                                      minWidth: Breakpoints.Mobile,
                                      value: 100,
                                    },
                                    {
                                      minWidth: Breakpoints.Tablet,
                                      value: 100,
                                    },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 100,
                                    },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 125,
                                    },
                                  ],
                                },
                                dimensions.width
                              )}
                            />
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1, paddingLeft: 16 },
                                dimensions.width
                              )}
                            >
                              {/* Name */}
                              <Text
                                accessible={true}
                                selectable={false}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 16,
                                        },
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 21,
                                        },
                                        {
                                          minWidth: Breakpoints.BigScreen,
                                          value: 23,
                                        },
                                      ],
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Sushi japonico'}
                              </Text>

                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: 8,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Price */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  {...GlobalStyles.TextStyles(theme)['Text']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text']
                                        .style,
                                      {
                                        color: theme.colors.text.strong,
                                        fontFamily: 'Inter_600SemiBold',
                                        fontSize: [
                                          {
                                            minWidth: Breakpoints.Desktop,
                                            value: 19,
                                          },
                                          {
                                            minWidth: Breakpoints.BigScreen,
                                            value: 21,
                                          },
                                        ],
                                        marginTop: 6,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'$22.00'}
                                </Text>
                                {/* Status */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  {...GlobalStyles.TextStyles(theme)['Text']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text']
                                        .style,
                                      {
                                        color: theme.colors.text.light,
                                        fontFamily: 'Inter_400Regular',
                                        fontSize: [
                                          {
                                            minWidth: Breakpoints.Mobile,
                                            value: 13,
                                          },
                                          {
                                            minWidth: Breakpoints.Desktop,
                                            value: 18,
                                          },
                                          {
                                            minWidth: Breakpoints.BigScreen,
                                            value: 20,
                                          },
                                        ],
                                        marginTop: 4,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'Delivered'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </Pressable>
                      );
                    }}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                </>
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(OrdersScreen);
