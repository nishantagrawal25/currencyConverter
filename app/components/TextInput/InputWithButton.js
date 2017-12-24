import React from "react"
import PropTypes from "prop-types"
import { View, Text, TouchableHighlight, TextInput } from "react-native"
import color from "color"

import styles from "./styles"

const InputWithButton = (props) => {
  const { buttonText, onPress, editable = true } = props

  const underlayColor = color(styles.$buttonBakcgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  )

  const containerStyles = [styles.container]
  if (editable === false) {
    containerStyles.push(styles.containerDisabled)
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  )
}

InputWithButton.propTypes = {
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  editable: PropTypes.bool,
}
export default InputWithButton
