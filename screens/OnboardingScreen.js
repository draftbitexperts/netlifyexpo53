import React from 'react';
import {
  Button,
  ExpoImage,
  Icon,
  Link,
  Pressable,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  SimpleStyleFlashList,
  withTheme,
} from '@draftbit/ui';
import { ActivityIndicator, Modal, Text, View } from 'react-native';
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

const OnboardingScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [LangaugeModal, setLangaugeModal] = React.useState(false);
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState(1);
  const [selectedLanguage, setSelectedLanguage] = React.useState('English');
  const [selectedLanguageFlag, setSelectedLanguageFlag] = React.useState(
    'https://res.cloudinary.com/altos/image/upload/v1677696521/example-data/FoodOrderingApp/Languages/English.png'
  );

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
      {/* Container */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        {/* Header */}
        <View
          {...GlobalStyles.ViewStyles(theme)['screen header view'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['screen header view'].style,
              {
                height: [
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.Laptop, value: 65 },
                  { minWidth: Breakpoints.Desktop, value: 70 },
                  { minWidth: Breakpoints.BigScreen, value: 100 },
                ],
                justifyContent: 'flex-end',
              }
            ),
            dimensions.width
          )}
        >
          <Link
            accessible={true}
            onPress={() => {
              try {
                navigation.navigateDeprecated('WelcomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            selectable={false}
            {...GlobalStyles.LinkStyles(theme)['Link'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'].style, {
                color: palettes.Brand['Strong Inverse'],
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
              }),
              dimensions.width
            )}
            title={'Skip'}
          />
        </View>
        {/* Top View */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flex: 1, justifyContent: 'center' },
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
            {...GlobalStyles.ExpoImageStyles(theme)['Image 10'].props}
            source={imageSource(Images['Onboarding'])}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ExpoImageStyles(theme)['Image 10'].style,
                {
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 270 },
                    { minWidth: Breakpoints.Tablet, value: 472 },
                    { minWidth: Breakpoints.Desktop, value: 540 },
                    { minWidth: Breakpoints.BigScreen, value: 810 },
                  ],
                  width: [
                    { minWidth: Breakpoints.Mobile, value: 253 },
                    { minWidth: Breakpoints.Tablet, value: 442 },
                    { minWidth: Breakpoints.Desktop, value: 506 },
                    { minWidth: Breakpoints.BigScreen, value: 759 },
                  ],
                }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* Bottom View */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.background.base,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              justifyContent: 'space-between',
              marginLeft: { minWidth: Breakpoints.Laptop, value: '20%' },
              marginRight: { minWidth: Breakpoints.Laptop, value: '20%' },
              padding: [
                { minWidth: Breakpoints.Mobile, value: 20 },
                { minWidth: Breakpoints.Tablet, value: 40 },
                { minWidth: Breakpoints.BigScreen, value: 55 },
              ],
              paddingBottom: 25,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_600SemiBold',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 25 },
                  { minWidth: Breakpoints.Tablet, value: 29 },
                  { minWidth: Breakpoints.BigScreen, value: 33 },
                ],
                lineHeight: [
                  { minWidth: Breakpoints.Mobile, value: 40 },
                  { minWidth: Breakpoints.Tablet, value: 45 },
                  { minWidth: Breakpoints.BigScreen, value: 49 },
                ],
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Let’s explore \nthe delicious foods \n😛'}
          </Text>

          <Pressable
            onPress={() => {
              try {
                setLangaugeModal(true);
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
                    { minWidth: Breakpoints.Mobile, value: 40 },
                    { minWidth: Breakpoints.Tablet, value: 70 },
                    { minWidth: Breakpoints.BigScreen, value: 100 },
                  ],
                  justifyContent: 'center',
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
                {...GlobalStyles.ExpoImageStyles(theme)['Image 11'].props}
                source={imageSource(`${selectedLanguageFlag}`)}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ExpoImageStyles(theme)['Image 11'].style,
                    {
                      borderRadius: [
                        { minWidth: Breakpoints.Mobile, value: 10 },
                        { minWidth: Breakpoints.Tablet, value: 17 },
                        { minWidth: Breakpoints.BigScreen, value: 21 },
                      ],
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 20 },
                        { minWidth: Breakpoints.Tablet, value: 34 },
                        { minWidth: Breakpoints.BigScreen, value: 42 },
                      ],
                      width: [
                        { minWidth: Breakpoints.Mobile, value: 20 },
                        { minWidth: Breakpoints.Tablet, value: 34 },
                        { minWidth: Breakpoints.BigScreen, value: 42 },
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
                        { minWidth: Breakpoints.Mobile, value: 16 },
                        { minWidth: Breakpoints.Tablet, value: 20 },
                        { minWidth: Breakpoints.BigScreen, value: 25 },
                      ],
                      paddingLeft: [
                        { minWidth: Breakpoints.Mobile, value: 10 },
                        { minWidth: Breakpoints.Tablet, value: 15 },
                        { minWidth: Breakpoints.BigScreen, value: 20 },
                      ],
                      paddingRight: [
                        { minWidth: Breakpoints.Mobile, value: 8 },
                        { minWidth: Breakpoints.Tablet, value: 15 },
                        { minWidth: Breakpoints.BigScreen, value: 20 },
                      ],
                    }
                  ),
                  dimensions.width
                )}
              >
                {selectedLanguage}
              </Text>
              <Icon
                size={24}
                color={theme.colors.text.strong}
                name={'Entypo/chevron-small-down'}
              />
            </View>
          </Pressable>
          {/* Next */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigateDeprecated('WelcomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Action button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Action button'].style,
                {
                  borderRadius: { minWidth: Breakpoints.Laptop, value: 18 },
                  fontSize: [
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.BigScreen, value: 24 },
                  ],
                  height: [
                    { minWidth: Breakpoints.Tablet, value: 60 },
                    { minWidth: Breakpoints.BigScreen, value: 70 },
                  ],
                }
              ),
              dimensions.width
            )}
            title={'Next'}
          />
        </View>
      </View>
      {/* Language Modal */}
      <Modal
        animationType={'none'}
        supportedOrientations={['portrait', 'landscape']}
        transparent={true}
        visible={Boolean(LangaugeModal)}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.background.base,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              bottom: 0,
              left: 0,
              marginLeft: { minWidth: Breakpoints.Laptop, value: '20%' },
              marginRight: { minWidth: Breakpoints.Laptop, value: '20%' },
              padding: 20,
              paddingBottom: 35,
              position: 'absolute',
              right: 0,
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
                fontFamily: 'Inter_600SemiBold',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 25 },
                  { minWidth: Breakpoints.BigScreen, value: 30 },
                ],
                lineHeight: [
                  { minWidth: Breakpoints.Mobile, value: 40 },
                  { minWidth: Breakpoints.BigScreen, value: 45 },
                ],
                marginBottom: 30,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'App language'}
          </Text>

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
            <ExampleDataApi.FetchLanguagesGET>
              {({ loading, error, data, refetchLanguages }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <SimpleStyleFlashList
                    data={fetchData}
                    estimatedItemSize={50}
                    horizontal={false}
                    inverted={false}
                    keyExtractor={(flashListData, index) =>
                      flashListData?.id ??
                      flashListData?.uuid ??
                      index?.toString() ??
                      JSON.stringify(flashListData)
                    }
                    listKey={
                      'Language Modal->View->Radio Button Group->Fetch->FlashList'
                    }
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const flashListData = item;
                      return (
                        <>
                          {/* Language */}
                          <Pressable
                            onPress={() => {
                              try {
                                setSelectedLanguage(flashListData?.Name);
                                setSelectedLanguageFlag(flashListData?.Flag);
                                setLangaugeModal(false);
                                setRadioButtonGroupValue(flashListData?.id);
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
                                  justifyContent: 'space-between',
                                  marginBottom: [
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 10,
                                    },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 12,
                                    },
                                  ],
                                },
                                dimensions.width
                              )}
                            >
                              {/* Flag Image */}
                              <ExpoImage
                                allowDownscaling={true}
                                cachePolicy={'disk'}
                                contentPosition={'center'}
                                resizeMode={'cover'}
                                transitionDuration={300}
                                transitionEffect={'cross-dissolve'}
                                transitionTiming={'ease-in-out'}
                                {...GlobalStyles.ExpoImageStyles(theme)[
                                  'Image 12'
                                ].props}
                                source={imageSource(`${flashListData?.Flag}`)}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.ExpoImageStyles(theme)[
                                      'Image 12'
                                    ].style,
                                    {
                                      height: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 22,
                                        },
                                        {
                                          minWidth: Breakpoints.BigScreen,
                                          value: 33,
                                        },
                                      ],
                                      width: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 32,
                                        },
                                        {
                                          minWidth: Breakpoints.BigScreen,
                                          value: 48,
                                        },
                                      ],
                                    }
                                  ),
                                  dimensions.width
                                )}
                              />
                              {/* Language */}
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginLeft: 10,
                                    padding: 12,
                                  },
                                  dimensions.width
                                )}
                              >
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
                                        fontFamily: 'Inter_400Regular',
                                        fontSize: [
                                          {
                                            minWidth: Breakpoints.Mobile,
                                            value: 16,
                                          },
                                          {
                                            minWidth: Breakpoints.Laptop,
                                            value: 19,
                                          },
                                          {
                                            minWidth: Breakpoints.Desktop,
                                            value: 22,
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
                                  {flashListData?.Name}
                                </Text>
                                <RadioButton
                                  onPress={() => {
                                    try {
                                      setRadioButtonGroupValue(
                                        flashListData?.Name
                                      );
                                      setSelectedLanguage(flashListData?.Name);
                                      setSelectedLanguageFlag(
                                        flashListData?.Flag
                                      );
                                      setLangaugeModal(false);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  selectedIcon={
                                    'MaterialIcons/radio-button-checked'
                                  }
                                  size={24}
                                  unselectedIcon={
                                    'MaterialIcons/radio-button-unchecked'
                                  }
                                  color={theme.colors.branding.primary}
                                  unselectedColor={
                                    theme.colors.branding.primary
                                  }
                                  value={flashListData?.id}
                                />
                              </View>
                            </View>
                          </Pressable>
                        </>
                      );
                    }}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                );
              }}
            </ExampleDataApi.FetchLanguagesGET>
          </RadioButtonGroup>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingScreen);
