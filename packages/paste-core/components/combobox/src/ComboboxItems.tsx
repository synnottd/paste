import * as React from 'react';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {ComboboxListboxOption} from './styles/ComboboxListboxOption';
import {ComboboxListboxGroup} from './styles/ComboboxListboxGroup';
import {getIndexedItems, getGroupedItems} from './helpers';
import type {ComboboxItemsProps} from './types';
import type {VirtualItem} from 'react-virtual/types';

const ComboboxItems: React.FC<ComboboxItemsProps> = ({
  items,
  getItemProps,
  highlightedIndex,
  optionTemplate,
  groupLabelTemplate,
  groupItemsBy,
  rowVirtualizer,
}) => {
  const UIDSeed = useUIDSeed();

  // If no groupings, return plain list
  if (groupItemsBy == null) {
    return (
      <ComboboxListboxGroup>
        <li key="total-size" style={{height: rowVirtualizer.totalSize}} />
        {rowVirtualizer.virtualItems.map((virtualItem: VirtualItem) => {
          const item = items[virtualItem.index];
          return (
            <ComboboxListboxOption
              {...getItemProps({item, index: virtualItem.index})}
              highlighted={highlightedIndex === virtualItem.index}
              key={UIDSeed(`item-${virtualItem.index}`)}
              variant="default"
              virtualItem={virtualItem}
              aria-setsize={items.length}
              aria-posinset={items.indexOf(item)}
            >
              {optionTemplate ? optionTemplate(item) : item}
            </ComboboxListboxOption>
          );
        })}
      </ComboboxListboxGroup>
    );
  }

  // Creating indexed Items so we can use original flat array index values
  // for indexing within groups.
  const indexedItems = getIndexedItems(items);
  const groupedItems = getGroupedItems(indexedItems, groupItemsBy);
  const groupedItemKeys = Object.keys(groupedItems);

  return (
    <>
      {groupedItemKeys.map((groupedItemKey) => {
        const isUncategorized = groupedItemKey === 'undefined';
        const groupKey = isUncategorized ? 'Uncategorized' : groupedItemKey;

        return (
          <ComboboxListboxGroup
            key={UIDSeed(groupKey)}
            groupName={isUncategorized ? undefined : groupKey}
            groupLabelTemplate={groupLabelTemplate}
          >
            {groupedItems[groupedItemKey].map((item: {[key: string]: any}) => (
              <ComboboxListboxOption
                {...getItemProps({item, index: item.index})}
                highlighted={highlightedIndex === item.index}
                key={UIDSeed(`${groupKey}-${item.index}`)}
                variant={isUncategorized ? 'default' : 'groupOption'}
              >
                {optionTemplate ? optionTemplate(item) : item}
              </ComboboxListboxOption>
            ))}
          </ComboboxListboxGroup>
        );
      })}
    </>
  );
};

export {ComboboxItems};
