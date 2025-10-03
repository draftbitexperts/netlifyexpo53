import React from 'react';
import {
  Button,
  Icon,
  IconButton,
  KeyboardAvoidingView,
  Pressable,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Image, Modal, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const PromocodeScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [PromoCodePopUp, setPromoCodePopUp] = React.useState(false);
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
          {'Promo code'}
        </Text>
      </View>
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.FastFood['Custom Color'],
            flex: 1,
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        {/* Options */}
        <View style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}>
          {/* Enter promo code */}
          <Pressable
            onPress={() => {
              try {
                setPromoCodePopUp(true);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginTop: 8 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 50 },
                    { minWidth: Breakpoints.Tablet, value: 65 },
                    { minWidth: Breakpoints.Laptop, value: 70 },
                    { minWidth: Breakpoints.Desktop, value: 75 },
                    { minWidth: Breakpoints.BigScreen, value: 85 },
                  ],
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Menu Icon */}
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={imageSource(Images['TicketStar'])}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    {
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 24 },
                        { minWidth: Breakpoints.Tablet, value: 30 },
                        { minWidth: Breakpoints.Laptop, value: 32 },
                        { minWidth: Breakpoints.Desktop, value: 35 },
                        { minWidth: Breakpoints.BigScreen, value: 40 },
                      ],
                      width: [
                        { minWidth: Breakpoints.Mobile, value: 24 },
                        { minWidth: Breakpoints.Tablet, value: 30 },
                        { minWidth: Breakpoints.Laptop, value: 32 },
                        { minWidth: Breakpoints.Desktop, value: 35 },
                        { minWidth: Breakpoints.BigScreen, value: 40 },
                      ],
                    }
                  ),
                  dimensions.width
                )}
              />
              {/* Details */}
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 16, paddingRight: 16 },
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
                          { minWidth: Breakpoints.Mobile, value: 16 },
                          { minWidth: Breakpoints.Tablet, value: 19 },
                          { minWidth: Breakpoints.Laptop, value: 21 },
                          { minWidth: Breakpoints.Desktop, value: 23 },
                          { minWidth: Breakpoints.BigScreen, value: 25 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Enter promo code'}
                </Text>
              </View>
              <Icon size={24} name={'Feather/chevron-right'} />
            </View>
          </Pressable>
          {/* Get discount */}
          <Pressable
            onPress={() => {
              try {
                navigation.navigateDeprecated('GetDiscountScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginTop: 14 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 50 },
                    { minWidth: Breakpoints.Tablet, value: 65 },
                    { minWidth: Breakpoints.Laptop, value: 70 },
                    { minWidth: Breakpoints.Desktop, value: 75 },
                    { minWidth: Breakpoints.BigScreen, value: 85 },
                  ],
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Menu Icon */}
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={imageSource(Images['DiscountShape'])}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    {
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 24 },
                        { minWidth: Breakpoints.Tablet, value: 30 },
                        { minWidth: Breakpoints.Laptop, value: 32 },
                        { minWidth: Breakpoints.Desktop, value: 35 },
                        { minWidth: Breakpoints.BigScreen, value: 40 },
                      ],
                      width: [
                        { minWidth: Breakpoints.Mobile, value: 24 },
                        { minWidth: Breakpoints.Tablet, value: 30 },
                        { minWidth: Breakpoints.Laptop, value: 32 },
                        { minWidth: Breakpoints.Desktop, value: 35 },
                        { minWidth: Breakpoints.BigScreen, value: 40 },
                      ],
                    }
                  ),
                  dimensions.width
                )}
              />
              {/* Details */}
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 16, paddingRight: 16 },
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
                          { minWidth: Breakpoints.Mobile, value: 16 },
                          { minWidth: Breakpoints.Tablet, value: 19 },
                          { minWidth: Breakpoints.Laptop, value: 21 },
                          { minWidth: Breakpoints.Desktop, value: 23 },
                          { minWidth: Breakpoints.BigScreen, value: 25 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Get discount'}
                </Text>
              </View>
              <Icon size={24} name={'Feather/chevron-right'} />
            </View>
          </Pressable>
        </View>
        {/* Share discount */}
        <Button
          accessible={true}
          iconPosition={'left'}
          {...GlobalStyles.ButtonStyles(theme)['action btn tablet'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn tablet'].style,
              { backgroundColor: theme.colors.branding.primary, margin: 20 }
            ),
            dimensions.width
          )}
          title={'Share discount'}
        />
      </View>
      {/* Entry Promo Card Modal */}
      <>
        {!PromoCodePopUp ? null : (
          <Modal
            supportedOrientations={['portrait', 'landscape']}
            animationType={'slide'}
            transparent={true}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.text.strong,
                  bottom: 0,
                  flex: 1,
                  left: 0,
                  opacity: 0.25,
                  position: 'absolute',
                  right: 0,
                  top: 0,
                },
                dimensions.width
              )}
            />
            <KeyboardAvoidingView
              behavior={'padding'}
              enabled={true}
              keyboardVerticalOffset={0}
              style={StyleSheet.applyWidth(
                { bottom: 0, left: 0, position: 'absolute', right: 0 },
                dimensions.width
              )}
            >
              {/* Promo code pop up */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.FastFood['Custom Color'],
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    bottom: 0,
                    flex: 1,
                    left: 0,
                    padding: 20,
                    position: 'absolute',
                    right: 0,
                  },
                  dimensions.width
                )}
              >
                {/* header */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 40,
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
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          flex: 1,
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 18 },
                            { minWidth: Breakpoints.Tablet, value: 21 },
                            { minWidth: Breakpoints.Laptop, value: 23 },
                            { minWidth: Breakpoints.Desktop, value: 25 },
                            { minWidth: Breakpoints.BigScreen, value: 27 },
                          ],
                          textAlign: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Promo code'}
                  </Text>
                </View>
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
                  placeholder={'Enter promo code'}
                  placeholderTextColor={theme.colors.text.light}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                      {
                        borderRadius: 12,
                        fontFamily: 'Inter_400Regular',
                        fontSize: [
                          { minWidth: Breakpoints.Tablet, value: 17 },
                          { minWidth: Breakpoints.Laptop, value: 19 },
                          { minWidth: Breakpoints.Desktop, value: 21 },
                          { minWidth: Breakpoints.BigScreen, value: 23 },
                        ],
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 48 },
                          { minWidth: Breakpoints.Tablet, value: 60 },
                          { minWidth: Breakpoints.Laptop, value: 65 },
                          { minWidth: Breakpoints.Desktop, value: 70 },
                          { minWidth: Breakpoints.BigScreen, value: 80 },
                        ],
                        paddingLeft: 16,
                        paddingRight: 16,
                      }
                    ),
                    dimensions.width
                  )}
                  value={textInputValue}
                />
                {/* Actions */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      paddingBottom: 20,
                    },
                    dimensions.width
                  )}
                >
                  {/* Apply */}
                  <Button
                    accessible={true}
                    iconPosition={'left'}
                    onPress={() => {
                      try {
                        setPromoCodePopUp(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    {...GlobalStyles.ButtonStyles(theme)['Action button'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ButtonStyles(theme)['Action button'].style,
                        {
                          backgroundColor: palettes.FastFood['Custom Color_5'],
                          fontSize: [
                            { minWidth: Breakpoints.Tablet, value: 19 },
                            { minWidth: Breakpoints.Laptop, value: 21 },
                            { minWidth: Breakpoints.Desktop, value: 23 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                          height: [
                            { minWidth: Breakpoints.Tablet, value: 60 },
                            { minWidth: Breakpoints.Laptop, value: 65 },
                            { minWidth: Breakpoints.Desktop, value: 70 },
                            { minWidth: Breakpoints.BigScreen, value: 80 },
                          ],
                          marginTop: [
                            { minWidth: Breakpoints.Mobile, value: 20 },
                            { minWidth: Breakpoints.Tablet, value: 30 },
                            { minWidth: Breakpoints.Laptop, value: 35 },
                            { minWidth: Breakpoints.BigScreen, value: 40 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                    title={'Apply'}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </Modal>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(PromocodeScreen);
