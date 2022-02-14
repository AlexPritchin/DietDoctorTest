import React from 'react';
import {
  HeaderButton,
  HeaderButtonProps,
} from 'react-navigation-header-buttons';
import Icon from 'react-native-ionicons';

const CustomHeaderButton: React.FC<HeaderButtonProps> = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={19}
      color={'steelblue'}
    />
  );
};

export default CustomHeaderButton;
