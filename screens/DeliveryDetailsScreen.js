import React from 'react';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  ExpoImage,
  Icon,
  IconButton,
  Pressable,
  ScreenContainer,
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

const DeliveryDetailsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [expandedDeliveryView, setExpandedDeliveryView] = React.useState(false);

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.background.base,
            flex: 1,
            justifyContent: 'flex-end',
          },
          dimensions.width
        )}
      >
        <MapView
          autoClusterMarkers={false}
          autoClusterMarkersDistanceMeters={10000}
          loadingEnabled={true}
          moveOnMarkerPress={true}
          rotateEnabled={true}
          scrollEnabled={true}
          showsCompass={false}
          showsPointsOfInterest={true}
          showsUserLocation={false}
          zoomEnabled={true}
          {...GlobalStyles.MapViewStyles(theme)['Map View'].props}
          apiKey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}
          latitude={37.4029}
          longitude={-122.1218}
          style={StyleSheet.applyWidth(
            GlobalStyles.MapViewStyles(theme)['Map View'].style,
            dimensions.width
          )}
          zoom={20}
        >
          <MapMarker
            androidUseDefaultIconImplementation={false}
            flat={false}
            pinImageSize={50}
            tracksViewChanges={true}
            latitude={37.4029}
            longitude={-122.1218}
            pinColor={palettes.FastFood['Custom Color_4']}
            title={'Broadway ave 128'}
          />
          <MapMarker
            androidUseDefaultIconImplementation={false}
            flat={false}
            pinImageSize={50}
            tracksViewChanges={true}
            latitude={37.403}
            longitude={-122.1218}
            pinColor={palettes.FastFood['Custom Color_3']}
            title={'samudra dance creation'}
          />
        </MapView>

        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.background.base,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              bottom: 0,
              left: 0,
              overflow: 'hidden',
              padding: [
                { minWidth: Breakpoints.Tablet, value: 8 },
                { minWidth: Breakpoints.Laptop, value: 8 },
                { minWidth: Breakpoints.Desktop, value: 10 },
                { minWidth: Breakpoints.BigScreen, value: 20 },
              ],
              position: 'absolute',
              right: 0,
            },
            dimensions.width
          )}
        >
          {/* Delivery Details Expanded */}
          <>
            {!expandedDeliveryView ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 20,
                  },
                  dimensions.width
                )}
              >
                {/* Timeline */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flex: 1,
                      flexDirection: 'row',
                      paddingBottom: 10,
                      paddingTop: 10,
                    },
                    dimensions.width
                  )}
                >
                  {/* Icons */}
                  <View
                    style={StyleSheet.applyWidth(
                      { alignItems: 'center' },
                      dimensions.width
                    )}
                  >
                    {/* Restaurant */}
                    <ExpoImage
                      allowDownscaling={true}
                      cachePolicy={'disk'}
                      contentPosition={'center'}
                      resizeMode={'cover'}
                      transitionDuration={300}
                      transitionEffect={'cross-dissolve'}
                      transitionTiming={'ease-in-out'}
                      {...GlobalStyles.ExpoImageStyles(theme)['Image 23'].props}
                      source={imageSource(Images['Building'])}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ExpoImageStyles(theme)['Image 23'].style,
                          {
                            height: [
                              { minWidth: Breakpoints.Mobile, value: 20 },
                              { minWidth: Breakpoints.Tablet, value: 30 },
                              { minWidth: Breakpoints.BigScreen, value: 45 },
                            ],
                            width: [
                              { minWidth: Breakpoints.Mobile, value: 20 },
                              { minWidth: Breakpoints.Tablet, value: 30 },
                              { minWidth: Breakpoints.BigScreen, value: 45 },
                            ],
                          }
                        ),
                        dimensions.width
                      )}
                    />
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderColor: theme.colors.text.light,
                          borderStyle: 'dashed',
                          borderWidth: 1,
                          height: [
                            { minWidth: Breakpoints.Mobile, value: 40 },
                            { minWidth: Breakpoints.Tablet, value: 55 },
                            { minWidth: Breakpoints.BigScreen, value: 70 },
                          ],
                          marginBottom: 5,
                          marginTop: 5,
                          width: 2,
                        },
                        dimensions.width
                      )}
                    />
                    {/* Arriving */}
                    <ExpoImage
                      allowDownscaling={true}
                      cachePolicy={'disk'}
                      contentPosition={'center'}
                      resizeMode={'cover'}
                      transitionDuration={300}
                      transitionEffect={'cross-dissolve'}
                      transitionTiming={'ease-in-out'}
                      {...GlobalStyles.ExpoImageStyles(theme)['Image 24'].props}
                      source={imageSource(Images['Clock'])}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ExpoImageStyles(theme)['Image 24'].style,
                          {
                            height: [
                              { minWidth: Breakpoints.Mobile, value: 20 },
                              { minWidth: Breakpoints.Tablet, value: 30 },
                              { minWidth: Breakpoints.BigScreen, value: 45 },
                            ],
                            width: [
                              { minWidth: Breakpoints.Mobile, value: 20 },
                              { minWidth: Breakpoints.Tablet, value: 30 },
                              { minWidth: Breakpoints.BigScreen, value: 45 },
                            ],
                          }
                        ),
                        dimensions.width
                      )}
                    />
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderColor: theme.colors.text.light,
                          borderStyle: 'dashed',
                          borderWidth: 1,
                          height: [
                            { minWidth: Breakpoints.Mobile, value: 40 },
                            { minWidth: Breakpoints.Tablet, value: 55 },
                            { minWidth: Breakpoints.BigScreen, value: 70 },
                          ],
                          marginBottom: 5,
                          marginTop: 5,
                          width: 2,
                        },
                        dimensions.width
                      )}
                    />
                    {/* Address */}
                    <ExpoImage
                      allowDownscaling={true}
                      cachePolicy={'disk'}
                      contentPosition={'center'}
                      resizeMode={'cover'}
                      transitionDuration={300}
                      transitionEffect={'cross-dissolve'}
                      transitionTiming={'ease-in-out'}
                      {...GlobalStyles.ExpoImageStyles(theme)['Image 25'].props}
                      source={imageSource(Images['Map'])}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ExpoImageStyles(theme)['Image 25'].style,
                          {
                            height: [
                              { minWidth: Breakpoints.Mobile, value: 20 },
                              { minWidth: Breakpoints.Tablet, value: 30 },
                              { minWidth: Breakpoints.BigScreen, value: 45 },
                            ],
                            width: [
                              { minWidth: Breakpoints.Mobile, value: 20 },
                              { minWidth: Breakpoints.Tablet, value: 30 },
                              { minWidth: Breakpoints.BigScreen, value: 45 },
                            ],
                          }
                        ),
                        dimensions.width
                      )}
                    />
                  </View>
                  {/* Details */}
                  <View
                    style={StyleSheet.applyWidth(
                      { marginLeft: 16 },
                      dimensions.width
                    )}
                  >
                    {/* Restaurant  */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1, justifyContent: 'center' },
                        dimensions.width
                      )}
                    >
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
                              color: theme.colors.text.medium,
                              fontFamily: 'Inter_300Light',
                              fontSize: [
                                { minWidth: Breakpoints.Mobile, value: 10 },
                                { minWidth: Breakpoints.Tablet, value: 13 },
                                { minWidth: Breakpoints.Laptop, value: 15 },
                                { minWidth: Breakpoints.Desktop, value: 17 },
                                { minWidth: Breakpoints.BigScreen, value: 19 },
                              ],
                              letterSpacing: 0.5,
                              opacity: 0.85,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Restorant:'}
                      </Text>

                      <Text
                        accessible={true}
                        selectable={false}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: theme.colors.text.medium,
                              fontFamily: 'Inter_500Medium',
                              fontSize: [
                                { minWidth: Breakpoints.Mobile, value: 16 },
                                { minWidth: Breakpoints.Tablet, value: 19 },
                                { minWidth: Breakpoints.Laptop, value: 21 },
                                { minWidth: Breakpoints.Desktop, value: 23 },
                                { minWidth: Breakpoints.BigScreen, value: 25 },
                              ],
                              marginTop: 2,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'McDonalds'}
                      </Text>
                    </View>
                    {/* Arriving */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flex: 1,
                          justifyContent: 'center',
                          marginBottom: [
                            { minWidth: Breakpoints.Mobile, value: 35 },
                            { minWidth: Breakpoints.Tablet, value: 50 },
                            { minWidth: Breakpoints.BigScreen, value: 70 },
                          ],
                          marginTop: [
                            { minWidth: Breakpoints.Mobile, value: 35 },
                            { minWidth: Breakpoints.Tablet, value: 50 },
                            { minWidth: Breakpoints.BigScreen, value: 70 },
                          ],
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: theme.colors.text.medium,
                              fontFamily: 'Inter_300Light',
                              fontSize: [
                                { minWidth: Breakpoints.Mobile, value: 10 },
                                { minWidth: Breakpoints.Tablet, value: 13 },
                                { minWidth: Breakpoints.Laptop, value: 15 },
                                { minWidth: Breakpoints.Desktop, value: 17 },
                                { minWidth: Breakpoints.BigScreen, value: 19 },
                              ],
                              letterSpacing: 0.5,
                              opacity: 0.85,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Arriving:'}
                      </Text>

                      <Text
                        accessible={true}
                        selectable={false}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: theme.colors.text.medium,
                              fontFamily: 'Inter_500Medium',
                              fontSize: [
                                { minWidth: Breakpoints.Mobile, value: 16 },
                                { minWidth: Breakpoints.Tablet, value: 19 },
                                { minWidth: Breakpoints.Laptop, value: 21 },
                                { minWidth: Breakpoints.Desktop, value: 23 },
                                { minWidth: Breakpoints.BigScreen, value: 25 },
                              ],
                              marginTop: 2,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'12 min'}
                      </Text>
                    </View>
                    {/* Address */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1, justifyContent: 'center' },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: theme.colors.text.medium,
                              fontFamily: 'Inter_300Light',
                              fontSize: [
                                { minWidth: Breakpoints.Mobile, value: 10 },
                                { minWidth: Breakpoints.Tablet, value: 13 },
                                { minWidth: Breakpoints.Laptop, value: 15 },
                                { minWidth: Breakpoints.Desktop, value: 17 },
                                { minWidth: Breakpoints.BigScreen, value: 19 },
                              ],
                              letterSpacing: 0.5,
                              opacity: 0.85,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Your address:'}
                      </Text>

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
                              color: theme.colors.text.medium,
                              fontFamily: 'Inter_500Medium',
                              fontSize: [
                                { minWidth: Breakpoints.Mobile, value: 16 },
                                { minWidth: Breakpoints.Tablet, value: 19 },
                                { minWidth: Breakpoints.Laptop, value: 21 },
                                { minWidth: Breakpoints.Desktop, value: 23 },
                                { minWidth: Breakpoints.BigScreen, value: 25 },
                              ],
                              marginTop: 2,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Broadway ave 128'}
                      </Text>
                    </View>
                  </View>
                </View>
                {/* Minimize the details pop up */}
                <View>
                  <Pressable
                    onPress={() => {
                      try {
                        setExpandedDeliveryView(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          borderColor: theme.colors.text.light,
                          borderRadius: 8,
                          borderWidth: 1,
                          flexDirection: 'row',
                          height: [
                            { minWidth: Breakpoints.Mobile, value: 48 },
                            { minWidth: Breakpoints.Tablet, value: 60 },
                            { minWidth: Breakpoints.Laptop, value: 65 },
                            { minWidth: Breakpoints.Desktop, value: 70 },
                            { minWidth: Breakpoints.BigScreen, value: 80 },
                          ],
                          justifyContent: 'center',
                          width: [
                            { minWidth: Breakpoints.Mobile, value: 48 },
                            { minWidth: Breakpoints.Tablet, value: 60 },
                            { minWidth: Breakpoints.Laptop, value: 65 },
                            { minWidth: Breakpoints.Desktop, value: 70 },
                            { minWidth: Breakpoints.BigScreen, value: 80 },
                          ],
                        },
                        dimensions.width
                      )}
                    >
                      <Icon
                        size={24}
                        color={theme.colors.text.strong}
                        name={'FontAwesome/angle-down'}
                      />
                    </View>
                  </Pressable>
                </View>
              </View>
            )}
          </>
          {/* Delivery Details short */}
          <>
            {expandedDeliveryView ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: [
                      { minWidth: Breakpoints.Mobile, value: 20 },
                      { minWidth: Breakpoints.BigScreen, value: 20 },
                    ],
                  },
                  dimensions.width
                )}
              >
                {/* Arriving */}
                <View>
                  {/* Arrving */}
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          color: theme.colors.text.medium,
                          fontFamily: 'Inter_300Light',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 10 },
                            { minWidth: Breakpoints.Tablet, value: 13 },
                            { minWidth: Breakpoints.Laptop, value: 15 },
                            { minWidth: Breakpoints.Desktop, value: 17 },
                            { minWidth: Breakpoints.BigScreen, value: 19 },
                          ],
                          letterSpacing: 0.5,
                          opacity: 0.85,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Arriving:'}
                  </Text>
                  {/* Time */}
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 19 },
                            { minWidth: Breakpoints.Tablet, value: 22 },
                            { minWidth: Breakpoints.Laptop, value: 24 },
                            { minWidth: Breakpoints.Desktop, value: 26 },
                            { minWidth: Breakpoints.BigScreen, value: 28 },
                          ],
                          marginTop: 2,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'12 min'}
                  </Text>
                </View>
                {/* Details */}
                <Pressable
                  onPress={() => {
                    try {
                      setExpandedDeliveryView(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderColor: theme.colors.text.light,
                        borderRadius: [
                          { minWidth: Breakpoints.Mobile, value: 6 },
                          { minWidth: Breakpoints.Tablet, value: 7 },
                          { minWidth: Breakpoints.Laptop, value: 8 },
                          { minWidth: Breakpoints.Desktop, value: 9 },
                          { minWidth: Breakpoints.BigScreen, value: 10 },
                        ],
                        borderWidth: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingBottom: [
                          { minWidth: Breakpoints.Mobile, value: 4 },
                          { minWidth: Breakpoints.Tablet, value: 7 },
                          { minWidth: Breakpoints.Laptop, value: 10 },
                          { minWidth: Breakpoints.BigScreen, value: 16 },
                        ],
                        paddingLeft: [
                          { minWidth: Breakpoints.Mobile, value: 12 },
                          { minWidth: Breakpoints.Tablet, value: 15 },
                          { minWidth: Breakpoints.Laptop, value: 20 },
                          { minWidth: Breakpoints.BigScreen, value: 30 },
                        ],
                        paddingRight: [
                          { minWidth: Breakpoints.Mobile, value: 12 },
                          { minWidth: Breakpoints.Tablet, value: 15 },
                          { minWidth: Breakpoints.Laptop, value: 20 },
                          { minWidth: Breakpoints.BigScreen, value: 30 },
                        ],
                        paddingTop: [
                          { minWidth: Breakpoints.Mobile, value: 4 },
                          { minWidth: Breakpoints.Tablet, value: 7 },
                          { minWidth: Breakpoints.Laptop, value: 10 },
                          { minWidth: Breakpoints.BigScreen, value: 16 },
                        ],
                      },
                      dimensions.width
                    )}
                  >
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
                              { minWidth: Breakpoints.Tablet, value: 17 },
                              { minWidth: Breakpoints.Laptop, value: 19 },
                              { minWidth: Breakpoints.Desktop, value: 21 },
                              { minWidth: Breakpoints.BigScreen, value: 23 },
                            ],
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Details'}
                    </Text>
                    <Icon
                      size={24}
                      color={theme.colors.text.strong}
                      name={'Entypo/chevron-small-up'}
                      style={StyleSheet.applyWidth(
                        { marginLeft: 6 },
                        dimensions.width
                      )}
                    />
                  </View>
                </Pressable>
              </View>
            )}
          </>
          {/* Delivery Partner */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
                padding: 20,
                paddingTop: 10,
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
              {...GlobalStyles.ExpoImageStyles(theme)['Image 26'].props}
              source={imageSource(Images['Avatar'])}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ExpoImageStyles(theme)['Image 26'].style,
                  {
                    borderRadius: [
                      { minWidth: Breakpoints.Mobile, value: 24 },
                      { minWidth: Breakpoints.Tablet, value: 33 },
                      { minWidth: Breakpoints.Laptop, value: 40 },
                      { minWidth: Breakpoints.Desktop, value: 50 },
                      { minWidth: Breakpoints.BigScreen, value: 70 },
                    ],
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 66 },
                      { minWidth: Breakpoints.Laptop, value: 80 },
                      { minWidth: Breakpoints.BigScreen, value: 140 },
                    ],
                    width: [
                      { minWidth: Breakpoints.Mobile, value: 48 },
                      { minWidth: Breakpoints.Tablet, value: 66 },
                      { minWidth: Breakpoints.Laptop, value: 80 },
                      { minWidth: Breakpoints.BigScreen, value: 140 },
                    ],
                  }
                ),
                dimensions.width
              )}
            />
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginLeft: 12 },
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
                {'Mina Klein'}
              </Text>
              {/* Rating */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', marginTop: 4 },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors.text.strong}
                  name={'FontAwesome/star'}
                  size={16}
                  style={StyleSheet.applyWidth(
                    { marginRight: 5 },
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
                          { minWidth: Breakpoints.Mobile, value: 13 },
                          { minWidth: Breakpoints.Tablet, value: 16 },
                          { minWidth: Breakpoints.Laptop, value: 18 },
                          { minWidth: Breakpoints.Desktop, value: 20 },
                          { minWidth: Breakpoints.BigScreen, value: 22 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'4.8'}
                </Text>
              </View>
            </View>
            {/* Actions */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              {/* Chat */}
              <Pressable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: palettes.FastFood['Custom Color_2'],
                      borderRadius: [
                        { minWidth: Breakpoints.Mobile, value: 20 },
                        { minWidth: Breakpoints.Tablet, value: 30 },
                        { minWidth: Breakpoints.BigScreen, value: 50 },
                      ],
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 40 },
                        { minWidth: Breakpoints.Tablet, value: 60 },
                        { minWidth: Breakpoints.BigScreen, value: 100 },
                      ],
                      justifyContent: 'center',
                      width: [
                        { minWidth: Breakpoints.Mobile, value: 40 },
                        { minWidth: Breakpoints.Tablet, value: 60 },
                        { minWidth: Breakpoints.BigScreen, value: 100 },
                      ],
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={palettes.FastFood['Custom Color']}
                    name={'Ionicons/chatbox-ellipses-outline'}
                    size={20}
                  />
                </View>
              </Pressable>
              {/* Call */}
              <Pressable
                style={StyleSheet.applyWidth(
                  {
                    marginLeft: [
                      { minWidth: Breakpoints.Mobile, value: 12 },
                      { minWidth: Breakpoints.Tablet, value: 20 },
                      { minWidth: Breakpoints.BigScreen, value: 35 },
                    ],
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.branding.primary,
                      borderRadius: [
                        { minWidth: Breakpoints.Mobile, value: 20 },
                        { minWidth: Breakpoints.Tablet, value: 30 },
                        { minWidth: Breakpoints.BigScreen, value: 50 },
                      ],
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 40 },
                        { minWidth: Breakpoints.Tablet, value: 60 },
                        { minWidth: Breakpoints.BigScreen, value: 100 },
                      ],
                      justifyContent: 'center',
                      width: [
                        { minWidth: Breakpoints.Mobile, value: 40 },
                        { minWidth: Breakpoints.Tablet, value: 60 },
                        { minWidth: Breakpoints.BigScreen, value: 100 },
                      ],
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={palettes.FastFood['Custom Color']}
                    name={'Feather/phone-call'}
                    size={20}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <IconButton
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
        color={theme.colors.text.light}
        icon={'AntDesign/leftcircle'}
        size={48}
        style={StyleSheet.applyWidth(
          { marginLeft: 20, marginTop: 20, position: 'absolute' },
          dimensions.width
        )}
      />
    </ScreenContainer>
  );
};

export default withTheme(DeliveryDetailsScreen);
