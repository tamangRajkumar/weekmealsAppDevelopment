import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextComponent,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { CheckBox, Icon } from "react-native-elements";
import {
  CommonTextInput,
  CommonButtons,
  CommonText,
  CommonHeader,
  CommonSkipButton,
  CommonInnerText,
  CommonSmallText,
} from "../commons";

import { Scale, width, Images, Colors, height } from "../constants";

type Props = {
  navigation?: any;
};

const PlanFirstDayBreakfast: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("PlanFirstDayBreakfastSelectRecipe");
  };

  // breakfast Data
  const veganData = [
    {
      id: 1,
      image: Images.breakfastImage1,
      title: "Biologische cornflakes met melk",
      time: "3m",
    },
    {
      id: 2,
      image: Images.breakfastImage2,
      title: "Simpel gebakken eitje",
      time: "7m",
    },
    {
      id: 3,
      image: Images.breakfastImage3,
      title: "Ontbijtgranen met aardbei en bosvruchten",
      time: "10m",
    },
    {
      id: 4,
      image: Images.breakfastImage4,
      title: "Avocadotoast met gebakken ei en verse salade",
      time: "20m",
    },
    {
      id: 5,
      image: Images.breakfastImage5,
      title: "Breakfast burger met ei, avocado en salade",
      time: "26m",
    },
  ];

  // breakfast Data
  const categoryData = [
    {
      id: 1,
      image: Images.categoryCarouselImage1,
      title: "Brood",
    },
    {
      id: 2,
      image: Images.categoryCarouselImage2,
      title: "Zuivel",
    },
    {
      id: 3,
      image: Images.categoryCarouselImage3,
      title: "Vegan",
    },
    {
      id: 4,
      image: Images.categoryCarouselImage4,
      title: "Aziatisch",
    },
  ];

  return (
    <View style={styles.wrapper}>
      <CommonHeader
        title="Plan je eerste dag in"
        backArrow={true}
        crossIcon={true}
      />
      <ScrollView style={styles.scrollView}>
        <CommonText title="Ontbijt" externalTextStyle={styles.title} />
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <View style={styles.searchIconContainer}>
            <Image source={Images.searchIcon} style={styles.searchIcon} />
            </View>
            <CommonTextInput placeholder="Wat neem je als avondeten?"  />
          </View>

          {/* Category Carousel */}

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalCategoryScrollView}
          >
            {categoryData.map((item, index) => {
              return (
                <View key={item.id} style={styles.categoryContainer}>
                  <Image
                    source={item.image}
                    style={styles.carouselImageStyle}
                  />
                  <CommonSmallText title={item.title}  />
                </View>
              );
            })}
          </ScrollView>

          <View style={styles.subDetailsContainer}>
            <CommonInnerText title="Populaire recepten" />
            <View style={styles.subTitleDescriptionContainer}>
              <Image source={Images.rightIcon} style={styles.rightIcon} />
              <CommonSmallText title="Recept is aangepast op je energiebehoefte" />
            </View>
          </View>

          {veganData.map((item, index) => {
            return (
              <View key={item.id} style={styles.container}>
                <View style={styles.foodWholeContainer}>
                  <View style={styles.foodContainer}>
                    <Image source={item.image} style={styles.imageStyle} />
                    <View style={styles.foodDescription}>
                      <CommonSmallText
                        title={item.title}
                        externalTextStyle={styles.foodDescriptionText}
                      />
                      <View style={styles.timeContainer}>
                        <Image
                          source={Images.watchIcon}
                          style={styles.watchIcon}
                        />
                        <CommonSmallText title={item.time} />
                      </View>

                      <TouchableOpacity
                        onPress={handleNavigation}
                        style={styles.nextButton}
                      >
                        <Image
                          source={Images.nextCircledIcon}
                          style={styles.nextCircledIcon}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.loadMoreContainer}>
        <Image source={Images.loadMoreIcon} style={styles.loadMoreIcon} />
        <CommonSmallText title="Laad meer" />
      </View>
      <View style={styles.buttonContainer}>
        <CommonButtons
          title="Voeg je eigen recept toe"
          externalContainerStyle={styles.button}
        />
      </View>
    </View>
  );
};

export default PlanFirstDayBreakfast;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  scrollView: {
    flex: 1,
  },

  title: {
    marginTop: Scale(15),
  },
  searchContainer:{

  },
  searchIcon:{
   
height: Scale(16.67),
width: Scale(16.67),
resizeMode: 'contain',
position: 'absolute',
alignSelf: 'center',
  },
  searchIconContainer:{

position:"absolute",
height: Scale(30),
width: Scale(40),

marginLeft:Scale(15),
marginTop:Scale(40),

},

  carouselImageStyle: {
    height: Scale(38.46),
    width: Scale(37.67),
    resizeMode: "contain",
    marginBottom: Scale(10),
  },

  subDetailsContainer: {
    marginLeft: Scale(10),
    marginTop: Scale(20),
  },
  subTitleDescriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Scale(10),
    marginTop: Scale(5),
  },
  rightIcon: {
    height: Scale(13.33),
    width: Scale(10),
    marginRight: Scale(8),
  },

  container: {
    flex: 1,

    paddingHorizontal: Scale(10),
  },

  horizontalCategoryScrollView: {
    flexDirection: "row",
    marginLeft: Scale(10),
  },
  categoryContainer: {
    height: Scale(114),
    width: Scale(96),
    borderWidth: 1.5,
    borderColor: Colors.disableButton,
    borderRadius: Scale(5),
    justifyContent: "center",
    alignItems: "center",
    marginRight: Scale(5),
  },

  middleContainer: {
    flexDirection: "row",
    paddingTop: Scale(35),
  },

  foodWholeContainer: {
    flex: 1,
  },
  imageStyle: {
    height: height * 0.15,
    width: width * 0.28,
    resizeMode: "contain",
  },

  foodContainer: {
    flexDirection: "row",

    alignItems: "center",
    marginTop: Scale(20),
  },
  foodDescription: {
    flex: 0.99,
    flexDirection: "column",
    marginLeft: Scale(10),
  },
  foodDescriptionText: {
    marginBottom: Scale(7),
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  watchIcon: {
    height: Scale(15),
    width: Scale(15),
    resizeMode: "contain",
    marginRight: Scale(6),
  },
  nextCircledIcon: {
    height: Scale(32),
    width: Scale(32),
    position: "absolute",
  },

  nextButton: {
    height: Scale(32),
    width: Scale(32),
    alignSelf: "flex-end",
  
  },
  loadMoreContainer: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loadMoreIcon: {
    height: Scale(16.66),
    width: Scale(15),
    marginRight: Scale(8),
  },
  buttonContainer: {
    flex: 0.15,
  },
  button: {
    width: width * 0.9,
  },
});
