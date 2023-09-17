import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Slider from "@react-native-community/slider";

const EmojiSlider = () => {
  const emojiData = [
    {
      bwImageSource: require("../../../assets/A-7/bwEmoji/BwWorst.png"),
      colorImageSource: require("../../../assets/A-7/emoji/Worst.png"),
      label: "Worst",
    },
    {
      bwImageSource: require("../../../assets/A-7/bwEmoji/Bwnot_good.png"),
      colorImageSource: require("../../../assets/A-7/emoji/not_good.png"),
      label: "Not good",
    },
    {
      bwImageSource: require("../../../assets/A-7/bwEmoji/BwFine.png"),
      colorImageSource: require("../../../assets/A-7/emoji/Fine.png"),
      label: "Fine",
    },
    {
      bwImageSource: require("../../../assets/A-7/bwEmoji/BwGood.png"),
      colorImageSource: require("../../../assets/A-7/emoji/Good.png"),
      label: "Look good",
    },
    {
      bwImageSource: require("../../../assets/A-7/bwEmoji/BwLoveit.png"),
      colorImageSource: require("../../../assets/A-7/emoji/Loveit.png"),
      label: "Very good",
    },
  ];

  const [selectedEmoji, setSelectedEmoji] = useState(0);
  const [hoveredEmoji, setHoveredEmoji] = useState(null);

  const handleEmojiSliderChange = (value) => {
    setSelectedEmoji(value);
  };

  const handleEmojiHover = (index) => {
    setHoveredEmoji(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Share your experience in scaling</Text>
      <View style={styles.emojiContainer}>
        {emojiData.map((emojiItem, index) => (
          <View
            key={index}
            style={[
              styles.emojiItem,
              hoveredEmoji === index && styles.hoveredEmojiItem,
            ]}
            onMouseEnter={() => handleEmojiHover(index)}
            onMouseLeave={() => handleEmojiHover(null)}
          >
            <Image
              style={[styles.emojiImage]}
              source={
                selectedEmoji === index
                  ? emojiItem.colorImageSource
                  : emojiItem.bwImageSource
              }
            />
            <Text
              style={[
                styles.labelText,
                (selectedEmoji === index || hoveredEmoji === index) &&
                  styles.hoveredLabelText,
              ]}
            >
              {emojiItem.label}
            </Text>
          </View>
        ))}
      </View>

      <Slider
        style={styles.slider}
        value={selectedEmoji}
        minimumValue={0}
        maximumValue={emojiData.length - 1}
        step={1}
        onValueChange={handleEmojiSliderChange}
        minimumTrackTintColor="#322BB3"
        maximumTrackTintColor="#322BB3"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  emojiContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  emojiItem: {
    alignItems: "center",
    marginRight: 14,
  },
  emojiImage: {
    width: 35,
    height: 35,
  },
  emojiText: {
    fontSize: 18,
  },
  labelText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#322BB3",
  },
  hoveredLabelText: {
    color: "#105955",
  },
  hoveredEmojiItem: {
    backgroundColor: "lightgray",
  },
  slider: {
    width: "99%",
  },
  name: {
    fontSize: 17,
    color: "#322BB3",
    fontWeight: "bold",
  },
});

export default EmojiSlider;
