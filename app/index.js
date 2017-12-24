import React from "react"
import EStyleSheet from "react-native-extended-stylesheet"

import Navigator from "./config/routes"

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryOrange: "#D57A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E768f",

  $white: "#fff",
  $border: "#e2e2e2",
  $inputText: "#797979",
  $lightGray: "#F0F0F0",
  $darkText: "#343434",
})

export default () => <Navigator />
