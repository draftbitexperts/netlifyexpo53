import React from 'react';
import { Button, IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
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

const GetDiscountScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      <IconButton
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
        color={theme.colors.text.strong}
        icon={'AntDesign/closecircleo'}
        size={28}
        style={StyleSheet.applyWidth(
          { marginBottom: 20, marginLeft: 20, marginRight: 20, marginTop: 20 },
          dimensions.width
        )}
      />
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          {
            flex: 1,
            justifyContent: 'space-between',
            padding: 20,
            paddingBottom: 0,
            paddingTop: 0,
          },
          dimensions.width
        )}
      >
        {/* Details */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              fontFamily: 'Inter_600SemiBold',
              fontSize: 31,
              lineHeight: 38,
              paddingLeft: 20,
              paddingRight: 20,
              textAlign: 'left',
            }),
            dimensions.width
          )}
        >
          {'Here’s 50% off for you, and 10% for a friend'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', justifyContent: 'center' },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={imageSource(Images['Illustration'])}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                {
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 399 },
                    { minWidth: Breakpoints.Tablet, value: 550 },
                    { minWidth: Breakpoints.Laptop, value: 600 },
                    { minWidth: Breakpoints.Desktop, value: 650 },
                    { minWidth: Breakpoints.BigScreen, value: 750 },
                  ],
                  width: [
                    { minWidth: Breakpoints.Mobile, value: 399 },
                    { minWidth: Breakpoints.Tablet, value: 550 },
                    { minWidth: Breakpoints.Laptop, value: 600 },
                    { minWidth: Breakpoints.Desktop, value: 650 },
                    { minWidth: Breakpoints.BigScreen, value: 750 },
                  ],
                }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* Code */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: palettes.FastFood['Custom Color_3'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 31,
              lineHeight: 38,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'DJFGH84'}
        </Text>
      </View>
      {/* Actions */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
            marginTop: [
              { minWidth: Breakpoints.Tablet, value: 20 },
              { minWidth: Breakpoints.Laptop, value: 25 },
              { minWidth: Breakpoints.Desktop, value: 30 },
              { minWidth: Breakpoints.BigScreen, value: 40 },
            ],
            padding: 20,
          },
          dimensions.width
        )}
      >
        {/* Copy */}
        <Button
          accessible={true}
          iconPosition={'left'}
          {...GlobalStyles.ButtonStyles(theme)['action btn tablet'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn tablet'].style,
              {
                backgroundColor: palettes.FastFood['Custom Color'],
                borderColor: palettes.FastFood['Custom Color_5'],
                borderWidth: 1,
                color: palettes.FastFood['Custom Color_5'],
                marginTop: 0,
                width: '48%',
              }
            ),
            dimensions.width
          )}
          title={'Copy'}
        />
        {/* Share */}
        <Button
          accessible={true}
          iconPosition={'left'}
          {...GlobalStyles.ButtonStyles(theme)['action btn tablet'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn tablet'].style,
              {
                backgroundColor: palettes.FastFood['Custom Color_5'],
                marginTop: 0,
                width: '48%',
              }
            ),
            dimensions.width
          )}
          title={'Share'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(GetDiscountScreen);
