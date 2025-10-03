import React from 'react';
import { Button, ExpoImage, ScreenContainer, withTheme } from '@draftbit/ui';
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

const CartEmptyScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: theme.colors.background.base, flex: 1 },
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
        {/* Main View */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, justifyContent: 'center', padding: 24 },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
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
              {...GlobalStyles.ExpoImageStyles(theme)['Image 6'].props}
              source={imageSource(Images['Group11498986'])}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ExpoImageStyles(theme)['Image 6'].style,
                  {
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 110 },
                      { minWidth: Breakpoints.Tablet, value: 165 },
                      { minWidth: Breakpoints.Desktop, value: 220 },
                      { minWidth: Breakpoints.BigScreen, value: 295 },
                    ],
                    width: [
                      { minWidth: Breakpoints.Mobile, value: 150 },
                      { minWidth: Breakpoints.Tablet, value: 225 },
                      { minWidth: Breakpoints.Desktop, value: 300 },
                      { minWidth: Breakpoints.BigScreen, value: 400 },
                    ],
                  }
                ),
                dimensions.width
              )}
            />
          </View>

          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_400Regular',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 15 },
                  { minWidth: Breakpoints.Tablet, value: 18 },
                  { minWidth: Breakpoints.Laptop, value: 20 },
                  { minWidth: Breakpoints.Desktop, value: 22 },
                  { minWidth: Breakpoints.BigScreen, value: 24 },
                ],
                marginBottom: [
                  { minWidth: Breakpoints.Mobile, value: 16 },
                  { minWidth: Breakpoints.Tablet, value: 32 },
                  { minWidth: Breakpoints.Laptop, value: 36 },
                  { minWidth: Breakpoints.Desktop, value: 42 },
                  { minWidth: Breakpoints.BigScreen, value: 50 },
                ],
                marginTop: [
                  { minWidth: Breakpoints.Mobile, value: 20 },
                  { minWidth: Breakpoints.Tablet, value: 40 },
                  { minWidth: Breakpoints.Laptop, value: 50 },
                  { minWidth: Breakpoints.Desktop, value: 60 },
                  { minWidth: Breakpoints.BigScreen, value: 75 },
                ],
                opacity: 0.5,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'There is no food yet'}
          </Text>
          {/* Let’s discover foods */}
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
            {...GlobalStyles.ButtonStyles(theme)['action btn big screen'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['action btn big screen'].style,
                {
                  height: { minWidth: Breakpoints.Tablet, value: 60 },
                  marginTop: 20,
                  paddingLeft: [
                    { minWidth: Breakpoints.Mobile, value: 24 },
                    { minWidth: Breakpoints.Tablet, value: 35 },
                    { minWidth: Breakpoints.Laptop, value: 45 },
                    { minWidth: Breakpoints.Desktop, value: 50 },
                    { minWidth: Breakpoints.BigScreen, value: 60 },
                  ],
                  paddingRight: [
                    { minWidth: Breakpoints.Mobile, value: 24 },
                    { minWidth: Breakpoints.Tablet, value: 35 },
                    { minWidth: Breakpoints.Laptop, value: 45 },
                    { minWidth: Breakpoints.Desktop, value: 50 },
                    { minWidth: Breakpoints.BigScreen, value: 60 },
                  ],
                }
              ),
              dimensions.width
            )}
            title={'Let’s discover foods  →'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(CartEmptyScreen);
