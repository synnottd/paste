import {
  UseComboboxPrimitiveProps,
  UseComboboxPrimitiveState,
  UseComboboxPrimitiveReturnValue,
} from '@twilio-paste/combobox-primitive';
import {InputVariants, InputProps} from '@twilio-paste/input';
import {VirtualItem} from 'react-virtual/types';

export type Item = string | {[key: string]: any};

export type ScrollAlignment = 'start' | 'center' | 'end' | 'auto';

export interface ScrollToOffsetOptions {
  align: ScrollAlignment;
}
export interface ScrollToIndexOptions {
  align: ScrollAlignment;
}

export interface ComboboxProps extends Omit<InputProps, 'id' | 'type' | 'value'> {
  autocomplete?: boolean;
  helpText?: string | React.ReactNode;
  initialIsOpen?: UseComboboxPrimitiveProps<Item>['initialIsOpen'];
  initialSelectedItem?: UseComboboxPrimitiveProps<Item>['initialSelectedItem'];
  items: UseComboboxPrimitiveProps<Item>['items'];
  itemToString?: UseComboboxPrimitiveProps<Item>['itemToString'];
  labelText: string | NonNullable<React.ReactNode>;
  onHighlightedIndexChange?: UseComboboxPrimitiveProps<Item>['onHighlightedIndexChange'];
  onInputValueChange?: UseComboboxPrimitiveProps<Item>['onInputValueChange'];
  onIsOpenChange?: UseComboboxPrimitiveProps<Item>['onIsOpenChange'];
  onSelectedItemChange?: UseComboboxPrimitiveProps<Item>['onSelectedItemChange'];
  optionTemplate?: (item: string | Item) => React.ReactNode;
  groupLabelTemplate?: (groupName: string) => React.ReactNode;
  selectedItem?: UseComboboxPrimitiveProps<Item>['selectedItem'];
  inputValue?: UseComboboxPrimitiveProps<Item>['inputValue'];
  groupItemsBy?: string;
  variant?: InputVariants;
  state?: Partial<UseComboboxPrimitiveReturnValue<Item>>;
}

export interface ItemProps extends Pick<ComboboxProps, 'optionTemplate'> {
  item: Item;
  items: UseComboboxPrimitiveProps<Item>['items'];
  index: number | string;
  getItemProps: any;
  highlightedIndex: UseComboboxPrimitiveState<Item>['highlightedIndex'];
  inGroup?: boolean;
  virtualRow: VirtualItem;
}

export interface ItemsProps extends Omit<ItemProps, 'item' | 'index'> {
  items: Item[];
  rowVirtualizer: {
    virtualItems: VirtualItem[];
    totalSize: number;
    scrollToOffset: (index: number, options?: ScrollToOffsetOptions | undefined) => void;
    scrollToIndex: (index: number, options?: ScrollToIndexOptions | undefined) => void;
  };
}

export interface GroupItemsProps extends ItemsProps, Pick<ComboboxProps, 'groupLabelTemplate' | 'groupItemsBy'> {
  rowVirtualizer: {
    virtualItems: VirtualItem[];
    totalSize: number;
    scrollToOffset: (index: number, options?: ScrollToOffsetOptions | undefined) => void;
    scrollToIndex: (index: number, options?: ScrollToIndexOptions | undefined) => void;
  };
}

export type ListBoxProps = GroupItemsProps;
