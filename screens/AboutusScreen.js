import React from 'react';
import {
  IconButton,
  ScreenContainer,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const AboutusScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.FastFood['Custom Color'] },
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
          {'About Us'}
        </Text>
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
              padding: [
                { minWidth: Breakpoints.Mobile, value: 20 },
                { minWidth: Breakpoints.Tablet, value: 40 },
              ],
              paddingTop: 0,
            },
            dimensions.width
          )}
        >
          {/* Version */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: theme.colors.border.brand,
                paddingBottom: 20,
              },
              dimensions.width
            )}
          >
            {/* ~ version number */}
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
                      { minWidth: Breakpoints.Mobile, value: 18 },
                      { minWidth: Breakpoints.Tablet, value: 21 },
                      { minWidth: Breakpoints.Desktop, value: 24 },
                      { minWidth: Breakpoints.BigScreen, value: 26 },
                    ],
                    marginTop: 20,
                    textAlign: 'center',
                  }
                ),
                dimensions.width
              )}
            >
              {'1.9.4'}
            </Text>
            {/* label */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: palettes.FastFood['Custom Color_6'],
                    fontFamily: 'Inter_300Light',
                    fontSize: [
                      { minWidth: Breakpoints.Tablet, value: 17 },
                      { minWidth: Breakpoints.Desktop, value: 20 },
                      { minWidth: Breakpoints.BigScreen, value: 22 },
                    ],
                    lineHeight: 25,
                    marginTop: [
                      { minWidth: Breakpoints.Mobile, value: 2 },
                      { minWidth: Breakpoints.Desktop, value: 8 },
                      { minWidth: Breakpoints.BigScreen, value: 12 },
                    ],
                    opacity: 0.85,
                    textAlign: 'center',
                  }
                ),
                dimensions.width
              )}
            >
              {'Current version'}
            </Text>
          </View>
          {/* short about us */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: { minWidth: Breakpoints.Tablet, value: 25 } },
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
                      { minWidth: Breakpoints.Mobile, value: 21 },
                      { minWidth: Breakpoints.Tablet, value: 24 },
                      { minWidth: Breakpoints.Desktop, value: 30 },
                      { minWidth: Breakpoints.BigScreen, value: 32 },
                    ],
                    marginTop: 20,
                  }
                ),
                dimensions.width
              )}
            >
              {'Short about us'}
            </Text>
            {/* details */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: palettes.FastFood['Custom Color_5'],
                    fontFamily: 'Inter_300Light',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 16 },
                      { minWidth: Breakpoints.Tablet, value: 20 },
                      { minWidth: Breakpoints.Desktop, value: 26 },
                      { minWidth: Breakpoints.BigScreen, value: 28 },
                    ],
                    letterSpacing: 0.3,
                    lineHeight: [
                      { minWidth: Breakpoints.Mobile, value: 25 },
                      { minWidth: Breakpoints.Tablet, value: 28 },
                      { minWidth: Breakpoints.Desktop, value: 32 },
                      { minWidth: Breakpoints.BigScreen, value: 34 },
                    ],
                    marginTop: [
                      { minWidth: Breakpoints.Mobile, value: 8 },
                      { minWidth: Breakpoints.Tablet, value: 20 },
                    ],
                    opacity: 0.8,
                    textAlign: 'left',
                  }
                ),
                dimensions.width
              )}
            >
              {
                'Bibendum sit eu morbi velit praesent. Fermentum mauris fringilla vitae feugiat vel sit blandit quam. In mi sodales nisl eleifend duis porttitor. Convallis euismod facilisis neque eget praesent diam in nulla. Faucibus interdum vulputate rhoncus mauris id facilisis est nunc habitant. Velit posuere facilisi tortor sed. '
              }
            </Text>
          </View>
          {/* Vision */}
          <View>
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
                      { minWidth: Breakpoints.Mobile, value: 21 },
                      { minWidth: Breakpoints.Tablet, value: 24 },
                      { minWidth: Breakpoints.Desktop, value: 30 },
                      { minWidth: Breakpoints.BigScreen, value: 32 },
                    ],
                    marginTop: 20,
                  }
                ),
                dimensions.width
              )}
            >
              {'Vision'}
            </Text>
            {/* details */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: palettes.FastFood['Custom Color_5'],
                    fontFamily: 'Inter_300Light',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 16 },
                      { minWidth: Breakpoints.Tablet, value: 20 },
                      { minWidth: Breakpoints.Desktop, value: 26 },
                      { minWidth: Breakpoints.BigScreen, value: 28 },
                    ],
                    letterSpacing: 0.3,
                    lineHeight: [
                      { minWidth: Breakpoints.Mobile, value: 25 },
                      { minWidth: Breakpoints.Tablet, value: 28 },
                      { minWidth: Breakpoints.Desktop, value: 32 },
                      { minWidth: Breakpoints.BigScreen, value: 34 },
                    ],
                    marginTop: [
                      { minWidth: Breakpoints.Mobile, value: 8 },
                      { minWidth: Breakpoints.Tablet, value: 20 },
                    ],
                    opacity: 0.8,
                    textAlign: 'left',
                  }
                ),
                dimensions.width
              )}
            >
              {
                'Lectus a velit sed pretium egestas integer lacus, mi. Risus eget venenatis at amet sed. Fames rhoncus purus ornare nulla. Lorem dolor eget sagittis mattis eget nam. Nulla nisi egestas nisl nibh eleifend luctus.'
              }
            </Text>
          </View>
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(AboutusScreen);
