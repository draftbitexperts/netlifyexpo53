import React from 'react';
import {
  ExpoImage,
  IconButton,
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

const RestaurantDetailsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: theme.colors.background.base, flex: 1 },
          dimensions.width
        )}
      >
        {/* Header */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: [
                { minWidth: Breakpoints.Mobile, value: 50 },
                { minWidth: Breakpoints.Tablet, value: 65 },
                { minWidth: Breakpoints.Laptop, value: 75 },
                { minWidth: Breakpoints.Desktop, value: 85 },
                { minWidth: Breakpoints.BigScreen, value: 90 },
              ],
              padding: 16,
            },
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
          />
          {/* Restaurant name */}
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
                  { minWidth: Breakpoints.Desktop, value: 30 },
                  { minWidth: Breakpoints.BigScreen, value: 29 },
                ],
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'McDonalds'}
          </Text>
        </View>
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
                listKey={'Container->Food Items->FlashList'}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const flashListData = item;
                  return (
                    <Pressable
                      onPress={() => {
                        try {
                          navigation.navigateDeprecated('ItemDetailsScreen');
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
                            paddingBottom: [
                              { minWidth: Breakpoints.Mobile, value: 15 },
                              { minWidth: Breakpoints.Tablet, value: 20 },
                              { minWidth: Breakpoints.BigScreen, value: 25 },
                            ],
                            paddingTop: [
                              { minWidth: Breakpoints.Mobile, value: 15 },
                              { minWidth: Breakpoints.Tablet, value: 20 },
                              { minWidth: Breakpoints.BigScreen, value: 25 },
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
                          {...GlobalStyles.ExpoImageStyles(theme)['Image 9']
                            .props}
                          source={imageSource(`${flashListData?.URL}`)}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ExpoImageStyles(theme)['Image 9']
                                .style,
                              {
                                height: [
                                  { minWidth: Breakpoints.Mobile, value: 70 },
                                  { minWidth: Breakpoints.Tablet, value: 91 },
                                  { minWidth: Breakpoints.Laptop, value: 98 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 112,
                                  },
                                ],
                                width: [
                                  { minWidth: Breakpoints.Mobile, value: 88 },
                                  { minWidth: Breakpoints.Tablet, value: 114 },
                                  { minWidth: Breakpoints.Laptop, value: 123 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 141,
                                  },
                                ],
                              }
                            ),
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
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {flashListData?.name}
                          </Text>
                          {/* Details */}
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            ellipsizeMode={'tail'}
                            numberOfLines={2}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                {
                                  color: theme.colors.text.light,
                                  fontFamily: 'Inter_400Regular',
                                  fontSize: [
                                    { minWidth: Breakpoints.Mobile, value: 13 },
                                    { minWidth: Breakpoints.Tablet, value: 16 },
                                    { minWidth: Breakpoints.Laptop, value: 18 },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 20,
                                    },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 22,
                                    },
                                  ],
                                  marginTop: [
                                    { minWidth: Breakpoints.Mobile, value: 4 },
                                    { minWidth: Breakpoints.Tablet, value: 7 },
                                    { minWidth: Breakpoints.Laptop, value: 9 },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 11,
                                    },
                                  ],
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {flashListData?.description}
                          </Text>
                          {/* price */}
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
                                    { minWidth: Breakpoints.Tablet, value: 17 },
                                    { minWidth: Breakpoints.Laptop, value: 19 },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 21,
                                    },
                                  ],
                                  marginTop: [
                                    { minWidth: Breakpoints.Mobile, value: 6 },
                                    { minWidth: Breakpoints.Tablet, value: 8 },
                                    { minWidth: Breakpoints.Laptop, value: 10 },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 12,
                                    },
                                  ],
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
                    </Pressable>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            );
          }}
        </ExampleDataApi.FetchFoodItemsGET>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(RestaurantDetailsScreen);
