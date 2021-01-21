import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps, BoxStyleProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {VirtualItem} from 'react-virtual/types';

export interface ComboboxListboxOptionProps {
  children: NonNullable<React.ReactNode>;
  highlighted?: boolean;
  variant: 'default' | 'groupOption';
  virtualRow: VirtualItem;
}

const VariantStyles: {[key in ComboboxListboxOptionProps['variant']]: BoxStyleProps} = {
  groupOption: {
    paddingLeft: 'space90',
    paddingRight: 'space90',
  },
  default: {
    paddingLeft: 'space70',
    paddingRight: 'space70',
  },
};

const ComboboxListboxOption = React.forwardRef<HTMLLIElement, ComboboxListboxOptionProps>(
  ({children, highlighted, variant = 'default', virtualRow, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="li"
        backgroundColor={highlighted ? 'colorBackgroundPrimaryLightest' : 'colorBackgroundBody'}
        padding="space30"
        cursor="pointer"
        ref={ref}
        position="absolute"
        top={0}
        left={0}
        width="100%"
        // height={virtualRow.size}
        transform={`translateY(${virtualRow.start}px)`}
        {...VariantStyles[variant]}
      >
        <Text
          as="span"
          color={highlighted ? 'colorTextLink' : 'colorText'}
          textDecoration={highlighted ? 'underline' : null}
        >
          {children}
        </Text>
      </Box>
    );
  }
);

ComboboxListboxOption.displayName = 'ComboboxListboxOption';

if (process.env.NODE_ENV === 'development') {
  ComboboxListboxOption.propTypes = {
    children: PropTypes.node.isRequired,
    highlighted: PropTypes.bool,
    variant: PropTypes.oneOf(['default', 'groupOption']).isRequired as any,
  };
}

export {ComboboxListboxOption};
