import * as React from 'react';
import _ from 'lodash';
import {useUID} from '@twilio-paste/uid-library';
import {Anchor} from '@twilio-paste/anchor';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {Text} from '@twilio-paste/text';
import {Select, Option} from '@twilio-paste/select';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {AttachIcon} from '@twilio-paste/icons/esm/AttachIcon';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {useCombobox, Combobox} from '../src';

const countryList = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas (the)',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory (the)',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands (the)',
  'Central African Republic (the)',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands (the)',
  'Colombia',
  'Comoros (the)',
  'Congo (the Democratic Republic of the)',
  'Congo (the)',
  'Cook Islands (the)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czechia',
  "Côte d'Ivoire",
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic (the)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (the) [Malvinas]',
  'Faroe Islands (the)',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories (the)',
  'Gabon',
  'Gambia (the)',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See (the)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea (the Democratic People's Republic of)",
  'Korea (the Republic of)',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic (the)",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands (the)',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia (Federated States of)',
  'Moldova (the Republic of)',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands (the)',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger (the)',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands (the)',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines (the)',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of North Macedonia',
  'Romania',
  'Russian Federation (the)',
  'Rwanda',
  'Réunion',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan (the)',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands (the)',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates (the)',
  'United Kingdom of Great Britain and Northern Ireland (the)',
  'United States Minor Outlying Islands (the)',
  'United States of America (the)',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela (Bolivarian Republic of)',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Åland Islands',
];

const items = [
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
];

interface IconItems {
  label: string;
  iconRight?: boolean;
  iconLeft?: undefined;
}
const iconItems = [
  {label: 'Alert', iconRight: true},
  {label: 'Anchor'},
  {label: 'Button', iconLeft: true},
  {label: 'Card', iconRight: true},
  {label: 'Heading'},
  {label: 'List', iconRight: true},
  {label: 'Modal', iconLeft: true},
  {label: 'Paragraph', iconRight: true},
];

interface ObjectItem {
  code: string;
  label: string;
  phone: string;
}
const objectItems = [
  {code: 'AD', label: 'Andorra', phone: '376'},
  {code: 'AE', label: 'United Arab Emirates', phone: '971'},
  {code: 'AF', label: 'Afghanistan', phone: '93'},
  {code: 'AG', label: 'Antigua and Barbuda', phone: '1-268'},
  {code: 'AI', label: 'Anguilla', phone: '1-264'},
  {code: 'AL', label: 'Albania', phone: '355'},
  {code: 'AM', label: 'Armenia', phone: '374'},
  {code: 'AO', label: 'Angola', phone: '244'},
  {code: 'AQ', label: 'Antarctica', phone: '672'},
  {code: 'AR', label: 'Argentina', phone: '54'},
  {code: 'AS', label: 'American Samoa', phone: '1-684'},
  {code: 'AT', label: 'Austria', phone: '43'},
];

interface GroupedItem {
  group?: string;
  label: string;
}
const groupedItems = [
  {group: 'Components', label: 'Alert'},
  {group: 'Components', label: 'Anchor'},
  {group: 'Components', label: 'Button'},
  {group: 'Components', label: 'Card'},
  {group: 'Components', label: 'Heading'},
  {group: 'Components', label: 'List'},
  {group: 'Components', label: 'Modal'},
  {group: 'Components', label: 'Paragraph'},
  {group: 'Primitives', label: 'Box'},
  {group: 'Primitives', label: 'Text'},
  {group: 'Primitives', label: 'Non-modal dialog'},
  {group: 'Layout', label: 'Grid'},
  {label: 'Design Tokens'},
];

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Combobox',
};

export const DefaultCombobox = (): React.ReactNode => {
  return (
    <Combobox
      items={iconItems}
      labelText="Choose a component:"
      helpText="This is the help text"
      optionTemplate={(item: IconItems) => (
        <MediaObject verticalAlign="center">
          {item.iconLeft ? (
            <MediaFigure spacing="space20">
              <InformationIcon decorative={false} size="sizeIcon20" title="information" />
            </MediaFigure>
          ) : null}

          <MediaBody>{item.label}</MediaBody>
          {item.iconRight ? (
            <MediaFigure spacing="space20">
              <InformationIcon decorative={false} size="sizeIcon20" title="information" />
            </MediaFigure>
          ) : null}
        </MediaObject>
      )}
      itemToString={(item: IconItems) => (item ? String(item.label) : null)}
      onHighlightedIndexChange={(changes) => console.log(changes)}
    />
  );
};

DefaultCombobox.story = {
  name: 'Combobox',
};

export const ComboboxInverse = (): React.ReactNode => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Combobox
        items={iconItems}
        labelText="Choose a component:"
        helpText="This is the help text"
        optionTemplate={(item: IconItems) => (
          <MediaObject verticalAlign="center">
            {item.iconLeft ? (
              <MediaFigure spacing="space20">
                <AttachIcon decorative={false} size="sizeIcon20" title="product" />
              </MediaFigure>
            ) : null}

            <MediaBody>{item.label}</MediaBody>
            {item.iconRight ? (
              <MediaFigure spacing="space20">
                <AttachIcon decorative={false} size="sizeIcon20" title="product 2" />
              </MediaFigure>
            ) : null}
          </MediaObject>
        )}
        itemToString={(item: IconItems) => (item ? String(item.label) : null)}
        variant="inverse"
      />
    </Box>
  );
};

ComboboxInverse.story = {
  name: 'Combobox - Inverse',
};

export const ComboboxAutocomplete = (): React.ReactNode => {
  const [inputItems, setInputItems] = React.useState(items);
  return (
    <Combobox
      autocomplete
      items={inputItems}
      helpText="This is the help text"
      labelText="Choose a component:"
      onInputValueChange={({inputValue}) => {
        if (inputValue !== undefined) {
          setInputItems(items.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase())));
        }
      }}
    />
  );
};

ComboboxAutocomplete.story = {
  name: 'Combobox - Autocomplete',
};

export const ComboboxRequired = (): React.ReactNode => {
  return <Combobox items={countryList} labelText="Choose a component:" helpText="This is the help text" required />;
};

ComboboxRequired.story = {
  name: 'Combobox - Required',
};

export const ComboboxRequiredInverse = (): React.ReactNode => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Combobox
        items={items}
        labelText="Choose a component:"
        helpText="This is the help text"
        required
        variant="inverse"
      />
    </Box>
  );
};

ComboboxRequiredInverse.story = {
  name: 'Combobox - Required inverse',
};

export const ComboboxError = (): React.ReactNode => {
  return <Combobox items={items} labelText="Choose a component:" helpText="This is the help text" hasError />;
};

ComboboxError.story = {
  name: 'Combobox - Error',
};

export const ComboboxErrorInverse = (): React.ReactNode => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Combobox
        items={items}
        labelText="Choose a component:"
        helpText="This is the help text"
        hasError
        variant="inverse"
      />
    </Box>
  );
};

ComboboxErrorInverse.story = {
  name: 'Combobox - Error inverse',
};

export const ComboboxDisabled = (): React.ReactNode => {
  return <Combobox items={items} labelText="Choose a component:" helpText="This is the help text" disabled />;
};

ComboboxDisabled.story = {
  name: 'Combobox - Disabled',
};

export const ComboboxDisabledInverse = (): React.ReactNode => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Combobox
        items={items}
        labelText="Choose a component:"
        helpText="This is the help text"
        disabled
        variant="inverse"
      />
    </Box>
  );
};

ComboboxDisabledInverse.story = {
  name: 'Combobox - Disabled inverse',
};

export const ComboboxInsertBeforeAndAfter = (): React.ReactNode => {
  return (
    <Combobox
      items={items}
      insertBefore={<div>$10.99</div>}
      insertAfter={
        <Anchor href="#" display="flex">
          <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
        </Anchor>
      }
      labelText="Choose a component:"
      helpText="This is the help text"
    />
  );
};

ComboboxInsertBeforeAndAfter.story = {
  name: 'Combobox - Insert before and after',
};

export const ComboboxDisabledInsertBeforeAndAfter = (): React.ReactNode => {
  return (
    <Combobox
      items={items}
      insertBefore={<div>$10.99</div>}
      insertAfter={
        <Anchor href="#" display="flex">
          <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
        </Anchor>
      }
      labelText="Choose a component:"
      helpText="This is the help text"
      disabled
    />
  );
};

ComboboxDisabledInsertBeforeAndAfter.story = {
  name: 'Combobox - Disabled insert before and after',
};

export const ComboboxInsertBeforeAndAfterInverse = (): React.ReactNode => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Combobox
        items={items}
        insertBefore={
          <Text as="span" color="colorTextInverse" lineHeight="lineHeight20">
            $10.99
          </Text>
        }
        insertAfter={
          <Anchor href="#" display="flex">
            <InformationIcon color="colorTextInverse" decorative={false} size="sizeIcon20" title="Get more info" />
          </Anchor>
        }
        labelText="Choose a component:"
        helpText="This is the help text"
        variant="inverse"
      />
    </Box>
  );
};

ComboboxInsertBeforeAndAfterInverse.story = {
  name: 'Combobox - Insert before and after inverse',
};

export const ComboboxDisabledInsertBeforeAndAfterInverse = (): React.ReactNode => {
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Combobox
        items={items}
        insertBefore={
          <Text as="span" color="colorTextInverse" lineHeight="lineHeight20">
            $10.99
          </Text>
        }
        insertAfter={
          <Anchor href="#" display="flex">
            <InformationIcon color="colorTextInverse" decorative={false} size="sizeIcon20" title="Get more info" />
          </Anchor>
        }
        labelText="Choose a component:"
        helpText="This is the help text"
        variant="inverse"
        disabled
      />
    </Box>
  );
};

ComboboxDisabledInsertBeforeAndAfterInverse.story = {
  name: 'Combobox - Disabled insert before and after inverse',
};

export const ComboboxObject = (): React.ReactNode => {
  const [inputItems, setInputItems] = React.useState(objectItems);
  return (
    <Combobox
      autocomplete
      items={inputItems}
      labelText="Choose a country:"
      helpText="This is the help text"
      optionTemplate={(item: ObjectItem) => (
        <div>
          {item.code} | {item.label} | {item.phone}
        </div>
      )}
      onInputValueChange={({inputValue}) => {
        if (inputValue !== undefined) {
          setInputItems(
            _.filter(objectItems, (item: ObjectItem) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()))
          );
        }
      }}
      itemToString={(item: ObjectItem) => (item ? item.label : null)}
    />
  );
};

ComboboxObject.story = {
  name: 'Combobox - Object',
};

export const ComboboxOverflowLongValue = (): React.ReactNode => {
  const [inputItems, setInputItems] = React.useState(items);
  return (
    <Box maxWidth="size40">
      <Combobox
        items={inputItems}
        helpText="This is the help text"
        labelText="Choose a component:"
        initialSelectedItem={inputItems[5]}
        onInputValueChange={({inputValue}) => {
          if (inputValue !== undefined) {
            setInputItems(items.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase())));
          }
        }}
      />
    </Box>
  );
};

ComboboxOverflowLongValue.story = {
  name: 'Combobox - overflow long value',
};

export const ComboboxControlled = (): React.ReactNode => {
  const [value, setValue] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState({});
  const [inputItems, setInputItems] = React.useState(objectItems);
  return (
    <>
      <Combobox
        autocomplete
        items={inputItems}
        labelText="Choose a country:"
        helpText="This is the help text"
        optionTemplate={(item: ObjectItem) => (
          <div>
            {item.code} | {item.label} | {item.phone}
          </div>
        )}
        onInputValueChange={({inputValue}) => {
          if (inputValue !== undefined) {
            setInputItems(
              _.filter(objectItems, (item: ObjectItem) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()))
            );
            setValue(inputValue);
          }
        }}
        itemToString={(item: ObjectItem) => (item ? item.label : null)}
        selectedItem={selectedItem}
        onSelectedItemChange={(changes) => {
          setSelectedItem(changes.selectedItem);
        }}
        inputValue={value}
      />
      <Box paddingTop="space70">
        Input value state: {JSON.stringify(value)}
        <br />
        Selected item state: {JSON.stringify(selectedItem)}
      </Box>
    </>
  );
};

ComboboxControlled.story = {
  name: 'Combobox - Controlled',
};

export const ComboboxControlledUsingState = (): React.ReactNode => {
  const [value, setValue] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState({});
  const [inputItems, setInputItems] = React.useState(objectItems);
  const {reset, ...state} = useCombobox({
    items: inputItems,
    itemToString: (item) => (item ? item.label : null),
    onSelectedItemChange: (changes) => {
      setSelectedItem(changes.selectedItem);
    },
    onInputValueChange: ({inputValue}) => {
      if (inputValue !== undefined) {
        setInputItems(
          _.filter(objectItems, (item: ObjectItem) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()))
        );
        setValue(inputValue);
      }
    },
    inputValue: value,
  });
  return (
    <>
      <Combobox
        state={state}
        items={inputItems}
        autocomplete
        labelText="Choose a country:"
        helpText="This is the help text"
        optionTemplate={(item: ObjectItem) => (
          <div>
            {item.code} | {item.label} | {item.phone}
          </div>
        )}
        insertAfter={
          <Button
            variant="link"
            size="reset"
            onClick={() => {
              reset();
            }}
          >
            <CloseIcon decorative={false} title="Clear" />
          </Button>
        }
      />
      <Box paddingTop="space70">
        Input value state: {JSON.stringify(value)}
        <br />
        Selected item state: {JSON.stringify(selectedItem)}
      </Box>
    </>
  );
};

ComboboxControlledUsingState.story = {
  name: 'Combobox - Controlled using state',
};

export const ComboboxOpen = (): React.ReactNode => {
  return (
    <Combobox
      items={objectItems}
      labelText="Choose a country:"
      initialIsOpen
      optionTemplate={(item: ObjectItem) => <div>{item.label}</div>}
      itemToString={(item: ObjectItem) => (item ? item.label : null)}
    />
  );
};

ComboboxOpen.story = {
  name: 'Combobox - Open',
};

export const ComboboxOptionGroups = (): React.ReactNode => {
  return (
    <Combobox
      groupItemsBy="group"
      items={groupedItems}
      labelText="Choose a component:"
      helpText="This is group"
      optionTemplate={(item: GroupedItem) => <div>{item.label}</div>}
      itemToString={(item: GroupedItem) => (item ? item.label : null)}
    />
  );
};

ComboboxOptionGroups.story = {
  name: 'Combobox - Option groups',
};

export const ComboboxOptionGroupsOpen = (): React.ReactNode => {
  return (
    <Combobox
      groupItemsBy="group"
      items={groupedItems}
      labelText="Choose a component:"
      helpText="This is group"
      initialIsOpen
      optionTemplate={(item: GroupedItem) => <div>{item.label}</div>}
      groupLabelTemplate={(groupName: string) => {
        if (groupName === 'Components') {
          return (
            <MediaObject verticalAlign="center">
              <MediaFigure spacing="space20">
                <AttachIcon color="colorTextIcon" decorative={false} title="icon" />
              </MediaFigure>
              <MediaBody>{groupName}</MediaBody>
            </MediaObject>
          );
        }
        return groupName;
      }}
      itemToString={(item: GroupedItem) => (item ? item.label : null)}
    />
  );
};

ComboboxOptionGroupsOpen.story = {
  name: 'Combobox - Option groups open',
};

export const ComboboxOptionGroupsTypeahead = (): React.ReactNode => {
  const [inputItems, setInputItems] = React.useState(groupedItems);
  return (
    <Combobox
      autocomplete
      groupItemsBy="group"
      items={inputItems}
      labelText="Choose a component:"
      helpText="This is the help text"
      optionTemplate={(item: GroupedItem) => <div>{item.label}</div>}
      onInputValueChange={({inputValue}) => {
        if (inputValue !== undefined) {
          setInputItems(
            _.filter(groupedItems, (item: GroupedItem) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()))
          );
        }
      }}
      itemToString={(item: GroupedItem) => (item ? item.label : null)}
    />
  );
};

ComboboxOptionGroupsTypeahead.story = {
  name: 'Combobox - Option groups typeahead',
};

export const ComboboxListboxZIndex = (): React.ReactNode => {
  const [selectValue, setSelectValue] = React.useState('');
  const selectID = useUID();
  return (
    <>
      <Box marginBottom="space50">
        <Combobox
          items={iconItems}
          labelText="Choose a component:"
          helpText="This is the help text"
          optionTemplate={(item: IconItems) => (
            <MediaObject verticalAlign="center">
              {item.iconLeft ? (
                <MediaFigure spacing="space20">
                  <InformationIcon decorative={false} size="sizeIcon20" title="information" />
                </MediaFigure>
              ) : null}

              <MediaBody>{item.label}</MediaBody>
              {item.iconRight ? (
                <MediaFigure spacing="space20">
                  <InformationIcon decorative={false} size="sizeIcon20" title="information" />
                </MediaFigure>
              ) : null}
            </MediaObject>
          )}
          itemToString={(item: IconItems) => (item ? String(item.label) : null)}
          initialIsOpen
        />
      </Box>
      <Box marginBottom="space50">
        <Label htmlFor={selectID}>Text input</Label>
        <Select id={selectID} onChange={(e) => setSelectValue(e.currentTarget.value)} value={selectValue}>
          <Option value="">Select an option</Option>
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </Box>
    </>
  );
};

ComboboxListboxZIndex.story = {
  name: 'Combobox - Listbox zIndex',
};
