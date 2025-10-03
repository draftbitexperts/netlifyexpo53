import React from 'react';
import { Button, ExpoImage, ScreenContainer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const WelcomeScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Content View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            marginBottom: 50,
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
          {...GlobalStyles.ExpoImageStyles(theme)['Image 2'].props}
          source={imageSource(Images['Content'])}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ExpoImageStyles(theme)['Image 2'].style,
              {
                height: [
                  { minWidth: Breakpoints.Mobile, value: 500 },
                  { minWidth: Breakpoints.Tablet, value: 750 },
                  { minWidth: Breakpoints.Laptop, value: 600 },
                  { minWidth: Breakpoints.Desktop, value: 750 },
                  { minWidth: Breakpoints.BigScreen, value: 900 },
                ],
                width: [
                  { minWidth: Breakpoints.Mobile, value: null },
                  { minWidth: Breakpoints.Mobile, value: dimensions.width },
                  { minWidth: Breakpoints.Tablet, value: 490 },
                  { minWidth: Breakpoints.Laptop, value: 392 },
                  { minWidth: Breakpoints.Desktop, value: 490 },
                  { minWidth: Breakpoints.BigScreen, value: 588 },
                ],
              }
            ),
            dimensions.width
          )}
        />
      </View>
      {/* Actions View */}
      <View style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}>
        {/* Log in */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigateDeprecated('LoginScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['action btn big screen'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn big screen'].style,
              {
                backgroundColor: palettes.FastFood['Custom Color'],
                borderColor: theme.colors.branding.primary,
                borderWidth: 1.5,
                color: theme.colors.branding.primary,
                fontSize: [
                  { minWidth: Breakpoints.Tablet, value: 20 },
                  { minWidth: Breakpoints.BigScreen, value: 25 },
                ],
                height: [
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.BigScreen, value: 75 },
                ],
              }
            ),
            dimensions.width
          )}
          title={'Log in'}
        />
        {/* Sign up */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigateDeprecated('SignupScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['action btn big screen'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn big screen'].style,
              {
                backgroundColor: {
                  minWidth: Breakpoints.Laptop,
                  value: theme.colors.branding.secondary,
                },
                fontSize: [
                  { minWidth: Breakpoints.Tablet, value: 20 },
                  { minWidth: Breakpoints.BigScreen, value: 25 },
                ],
                height: [
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.BigScreen, value: 75 },
                ],
                marginTop: 25,
              }
            ),
            dimensions.width
          )}
          title={'Sign up'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
