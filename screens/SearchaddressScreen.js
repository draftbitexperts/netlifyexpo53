import React from 'react';
import {
  ExpoImage,
  Icon,
  IconButton,
  Pressable,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const SearchaddressScreen = props => {
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
          {'New address'}
        </Text>
      </View>
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.FastFood['Custom Color'],
            flex: [
              { minWidth: Breakpoints.Mobile, value: 0.5 },
              { minWidth: Breakpoints.Laptop, value: 0.7 },
            ],
            padding: [
              { minWidth: Breakpoints.Tablet, value: 10 },
              { minWidth: Breakpoints.BigScreen, value: 20 },
            ],
          },
          dimensions.width
        )}
      >
        {/* Search view */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderColor: theme.colors.text.light,
              borderRadius: 100,
              borderWidth: 1,
              flexDirection: 'row',
              height: [
                { minWidth: Breakpoints.Tablet, value: 60 },
                { minWidth: Breakpoints.Laptop, value: 65 },
                { minWidth: Breakpoints.Desktop, value: 70 },
                { minWidth: Breakpoints.BigScreen, value: 80 },
              ],
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              paddingLeft: [
                { minWidth: Breakpoints.Mobile, value: 16 },
                { minWidth: Breakpoints.Tablet, value: 25 },
                { minWidth: Breakpoints.BigScreen, value: 30 },
              ],
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors.text.light}
            name={'Ionicons/search-outline'}
          />
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
            placeholder={'Search a place'}
            placeholderTextColor={theme.colors.text.light}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                {
                  borderBottomWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  fontFamily: 'Inter_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Tablet, value: 17 },
                    { minWidth: Breakpoints.Laptop, value: 19 },
                    { minWidth: Breakpoints.Desktop, value: 20 },
                    { minWidth: Breakpoints.BigScreen, value: 22 },
                  ],
                  paddingBottom: 12,
                  paddingTop: 12,
                  width: '85%',
                }
              ),
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>

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
            {...GlobalStyles.ExpoImageStyles(theme)['Image 4'].props}
            source={imageSource(Images['Searchaddrss'])}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ExpoImageStyles(theme)['Image 4'].style,
                {
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 85 },
                    { minWidth: Breakpoints.Tablet, value: 140 },
                    { minWidth: Breakpoints.Laptop, value: 168 },
                    { minWidth: Breakpoints.BigScreen, value: 170 },
                  ],
                  width: [
                    { minWidth: Breakpoints.Mobile, value: 120 },
                    { minWidth: Breakpoints.Tablet, value: 200 },
                    { minWidth: Breakpoints.BigScreen, value: 240 },
                  ],
                }
              ),
              dimensions.width
            )}
          />
        </View>
      </View>
      {/* Bottom view */}
      <View style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}>
        {/* Choose on map */}
        <Pressable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
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
              {...GlobalStyles.ExpoImageStyles(theme)['Image 5'].props}
              source={imageSource(Images['Location'])}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ExpoImageStyles(theme)['Image 5'].style,
                  { height: 24, width: 24 }
                ),
                dimensions.width
              )}
            />
            {/* Choose on map */}
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
                      { minWidth: Breakpoints.Tablet, value: 18 },
                      { minWidth: Breakpoints.Laptop, value: 20 },
                      { minWidth: Breakpoints.Desktop, value: 22 },
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                    ],
                    marginLeft: 10,
                  }
                ),
                dimensions.width
              )}
            >
              {'Choose on map'}
            </Text>
          </View>
        </Pressable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SearchaddressScreen);
