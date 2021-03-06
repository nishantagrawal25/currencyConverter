import React, { Component } from "react"
import { View, Text, Keyboard, Animated, Platform, StyleSheet } from "react-native"

import styles from "./styles"

const ANIMATION_DURATION = 250

class Logo extends Component {
  constructor(props) {
    super(props)

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize)
    this.imageWidth = new Animated.Value(styles.$largeImageSize)
  }
  componentDidMount() {
    const name = Platform.OS === "ios" ? "Will" : "Did"
    this.keyboardShowListener = Keyboard.addListener(`keyboard${name}Show`, this.keyboardShow)
    this.keyboardHideListener = Keyboard.addListener(`keyboard${name}Hide`, this.keyboardHide)
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove()
    this.keyboardHideListener.remove()
  }

  keyboardShow = () => {
    console.log("keyboard did show")

    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start()
  }
  keyboardHide = () => {
    console.log("keyboard did hide")

    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start()
  }
  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ]

    const imageStyle = [styles.logo, { width: this.imageWidth }]

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyle]}
            source={require("./images/background.png")}
          />
          <Animated.Image
            resizeMode="contain"
            style={imageStyle}
            source={require("./images/logo.png")}
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    )
  }
}

export default Logo
