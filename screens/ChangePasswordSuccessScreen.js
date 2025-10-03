import React from 'react';
import {
  Button,
  Icon,
  IconButton,
  ScreenContainer,
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

const ChangePasswordSuccessScreen = props => {
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
          { marginLeft: 20, marginTop: 20 },
          dimensions.width
        )}
      />
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'center', padding: 20 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', marginBottom: 45 },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors.branding.primary}
            name={'AntDesign/checkcircle'}
            size={104}
            style={StyleSheet.applyWidth(
              { height: 114, width: 114 },
              dimensions.width
            )}
          />
        </View>
        {/* Screen heading */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              fontFamily: 'Inter_600SemiBold',
              fontSize: [
                { minWidth: Breakpoints.Mobile, value: 21 },
                { minWidth: Breakpoints.Tablet, value: 25 },
                { minWidth: Breakpoints.Laptop, value: 28 },
                { minWidth: Breakpoints.Desktop, value: 30 },
                { minWidth: Breakpoints.BigScreen, value: 32 },
              ],
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Congrats!'}
        </Text>
        {/* details */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              fontFamily: 'Inter_300Light',
              fontSize: [
                { minWidth: Breakpoints.Tablet, value: 18 },
                { minWidth: Breakpoints.Laptop, value: 20 },
                { minWidth: Breakpoints.Desktop, value: 22 },
                { minWidth: Breakpoints.BigScreen, value: 25 },
              ],
              lineHeight: 21,
              padding: 20,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Your password changed successfully'}
        </Text>
        {/* Return to login */}
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
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                borderRadius: 12,
                fontFamily: 'Inter_400Regular',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 16 },
                  { minWidth: Breakpoints.Tablet, value: 20 },
                  { minWidth: Breakpoints.Desktop, value: 24 },
                ],
                height: [
                  { minWidth: Breakpoints.Mobile, value: 48 },
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.BigScreen, value: 70 },
                ],
                marginTop: [
                  { minWidth: Breakpoints.Mobile, value: 8 },
                  { minWidth: Breakpoints.Tablet, value: 18 },
                  { minWidth: Breakpoints.Laptop, value: 22 },
                  { minWidth: Breakpoints.BigScreen, value: 30 },
                ],
              }
            ),
            dimensions.width
          )}
          title={'Return to login'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ChangePasswordSuccessScreen);
