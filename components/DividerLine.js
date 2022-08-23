import { View } from 'react-native'
import PropTypes from "prop-types";

export default function DividerLine(props) {
  return (
    <View
        style={{
            borderBottomColor: props.color,
            borderBottomWidth: props.width,
            marginHorizontal: props.margin,
        }}
    />
  )
}

DividerLine.defaultprops = {
  width: 1,
  color: "#ddd",
  margin: 0
  }


DividerLine.prototype = {
  color: PropTypes.string,
  width: PropTypes.number,
  margin: PropTypes.number,
}