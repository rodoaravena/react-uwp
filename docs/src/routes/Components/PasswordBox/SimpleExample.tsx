import * as React from "react";
import * as PropTypes from "prop-types";

import PasswordBox from "react-uwp/PasswordBox";

const baseStyle: React.CSSProperties = {
  margin: 20
};
export default class SimpleExample extends React.Component<{}, void> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  render() {
    return (
      <div>
        <PasswordBox style={baseStyle} />

        <PasswordBox
          style={{ width: 340, ...baseStyle }}
          placeholder="Input Your Password"
          passwordBoxHeight={28}
        />

        <PasswordBox
          style={baseStyle}
          defaultShowPassword
          value="This My Password"
        />
      </div>
    );
  }
}
