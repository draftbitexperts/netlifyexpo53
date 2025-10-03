import React from 'react';
import {
  ExpoImage,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleFlashList,
  SimpleStyleFlatList,
  TextInput,
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

const SearchScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Search */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: palettes.FastFood['Custom Color_7'],
            borderColor: theme.colors.text.light,
            borderRadius: 100,
            borderWidth: 1,
            flexDirection: 'row',
            height: [
              { minWidth: Breakpoints.Tablet, value: 65 },
              { minWidth: Breakpoints.Laptop, value: 70 },
              { minWidth: Breakpoints.Desktop, value: 75 },
              { minWidth: Breakpoints.BigScreen, value: 80 },
            ],
            margin: [
              { minWidth: Breakpoints.Mobile, value: 20 },
              { minWidth: Breakpoints.Tablet, value: 30 },
            ],
            marginBottom: 10,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        <Icon
          size={24}
          color={theme.colors.text.light}
          name={'AntDesign/search1'}
        />
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
              paddingLeft: 10,
            },
            dimensions.width
          )}
        >
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
            placeholder={'Search your Snack'}
            placeholderTextColor={theme.colors.text.light}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                {
                  borderBottomWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  color: palettes.Brand.Strong,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 15,
                  paddingBottom: 12,
                  paddingTop: 12,
                  width: '100%',
                }
              ),
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>
      </View>
      {/* Suggestions View */}
      <View
        style={StyleSheet.applyWidth(
          {
            margin: { minWidth: Breakpoints.Tablet, value: 20 },
            marginTop: { minWidth: Breakpoints.Tablet, value: 0 },
          },
          dimensions.width
        )}
      >
        {/* Suggestions */}
        <ExampleDataApi.FetchFoodSuggestionsGET>
          {({ loading, error, data, refetchFoodSuggestions }) => {
            const suggestionsData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <SimpleStyleFlatList
                data={suggestionsData}
                decelerationRate={'normal'}
                horizontal={false}
                inverted={false}
                keyExtractor={(listData, index) =>
                  listData?.id ??
                  listData?.uuid ??
                  index?.toString() ??
                  JSON.stringify(listData)
                }
                keyboardShouldPersistTaps={'never'}
                listKey={'Suggestions View->Suggestions->List'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                pagingEnabled={false}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Item */}
                      <Pressable
                        style={StyleSheet.applyWidth(
                          {
                            marginBottom: [
                              { minWidth: Breakpoints.Mobile, value: 12 },
                              { minWidth: Breakpoints.Tablet, value: 15 },
                              { minWidth: Breakpoints.Laptop, value: 18 },
                              { minWidth: Breakpoints.Desktop, value: 22 },
                            ],
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderColor: theme.colors.text.light,
                              borderRadius: 100,
                              borderWidth: 1,
                              flexDirection: 'row',
                              justifyContent: 'center',
                              marginRight: [
                                { minWidth: Breakpoints.Mobile, value: 10 },
                                { minWidth: Breakpoints.Tablet, value: 14 },
                                { minWidth: Breakpoints.Laptop, value: 16 },
                                { minWidth: Breakpoints.Desktop, value: 18 },
                                { minWidth: Breakpoints.BigScreen, value: 20 },
                              ],
                              padding: [
                                { minWidth: Breakpoints.Mobile, value: 12 },
                                { minWidth: Breakpoints.Tablet, value: 16 },
                                { minWidth: Breakpoints.Laptop, value: 20 },
                                { minWidth: Breakpoints.Desktop, value: 22 },
                                { minWidth: Breakpoints.BigScreen, value: 24 },
                              ],
                              paddingBottom: 8,
                              paddingTop: 8,
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
                            {...GlobalStyles.ExpoImageStyles(theme)['Image 27']
                              .props}
                            source={imageSource(`${listData?.url}`)}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.ExpoImageStyles(theme)['Image 27']
                                  .style,
                                {
                                  height: [
                                    { minWidth: Breakpoints.Mobile, value: 24 },
                                    { minWidth: Breakpoints.Tablet, value: 32 },
                                    { minWidth: Breakpoints.Laptop, value: 35 },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 38,
                                    },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 40,
                                    },
                                  ],
                                  width: [
                                    { minWidth: Breakpoints.Mobile, value: 24 },
                                    { minWidth: Breakpoints.Tablet, value: 32 },
                                    { minWidth: Breakpoints.Laptop, value: 35 },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 38,
                                    },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 40,
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
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                {
                                  fontFamily: 'Inter_400Regular',
                                  fontSize: [
                                    { minWidth: Breakpoints.Mobile, value: 12 },
                                    { minWidth: Breakpoints.Tablet, value: 15 },
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
                                  paddingLeft: 5,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {listData?.name}
                          </Text>
                        </View>
                      </Pressable>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                snapToAlignment={'start'}
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    margin: 15,
                  },
                  dimensions.width
                )}
              />
            );
          }}
        </ExampleDataApi.FetchFoodSuggestionsGET>
      </View>
      {/* food items view */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        {/* Food Items */}
        <ExampleDataApi.FetchUsersGET count={10}>
          {({ loading, error, data, refetchUsers }) => {
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
                listKey={'food items view->Food Items->FlashList'}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const flashListData = item;
                  return (
                    <>
                      {/* Item */}
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
                            {...GlobalStyles.ExpoImageStyles(theme)['Image 28']
                              .props}
                            source={imageSource(Images['Burger'])}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.ExpoImageStyles(theme)['Image 28']
                                  .style,
                                { height: 70, width: 88 }
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
                                    fontSize: 16,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Hamburger'}
                            </Text>
                            {/* details */}
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
                                    fontSize: 13,
                                    marginTop: 4,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {
                                '1 big tasty, 1 large french fries, 1 large drink'
                              }
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
                                    marginTop: 6,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'$4.80'}
                            </Text>
                          </View>
                        </View>
                      </Pressable>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={false}
                style={StyleSheet.applyWidth({ flex: 0 }, dimensions.width)}
              />
            );
          }}
        </ExampleDataApi.FetchUsersGET>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SearchScreen);
