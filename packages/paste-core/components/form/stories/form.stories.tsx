import * as React from 'react';
import {useUID, useUIDSeed} from '@twilio-paste/uid-library';
import {storiesOf} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Grid, Column} from '@twilio-paste/grid';
import {Anchor} from '@twilio-paste/anchor';
import {Checkbox, FormLabel, FormInput, Select, Option, Radio, FormTextArea, CheckboxGroup, RadioGroup} from '../src';

storiesOf('Forms|Form', module).add('All', () => {
  const inputIDSeed = useUIDSeed();
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(true);
  const [value, setValue] = React.useState('2');
  return (
    <>
      <Box marginBottom="space70">
        <FormLabel htmlFor={inputIDSeed('input')}>Text Input</FormLabel>
        <FormInput id={inputIDSeed('input')} type="text" value="" />
        <Grid>
          <Column>
            <CheckboxGroup
              name="bar"
              legend={
                <Text as="span" color="currentColor">
                  This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
                </Text>
              }
              helpText="Help text should go here."
              required
            >
              <Checkbox
                id={useUID()}
                value="1"
                checked={checked1}
                onChange={event => {
                  setChecked1(event.currentTarget.checked);
                }}
                helpText={
                  <Text as="span" color="currentColor">
                    This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
                  </Text>
                }
              >
                First
              </Checkbox>
              <Checkbox
                checked={checked2}
                onChange={event => {
                  setChecked2(event.currentTarget.checked);
                }}
                id={useUID()}
                value="2"
                helpText="This is some help text."
              >
                Second
              </Checkbox>
              <Checkbox
                checked={checked3}
                onChange={event => {
                  setChecked3(event.currentTarget.checked);
                }}
                id={useUID()}
                value="3"
                helpText="This is some help text."
              >
                Third
              </Checkbox>
            </CheckboxGroup>
          </Column>
          <Column>
            <RadioGroup
              name="bar"
              value={value}
              legend={
                <Text as="span" color="currentColor">
                  This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
                </Text>
              }
              helpText="Help text should go here."
              required
              onChange={newValue => {
                setValue(newValue);
              }}
            >
              <Radio
                id={useUID()}
                value="1"
                helpText={
                  <Text as="span" color="currentColor">
                    This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
                  </Text>
                }
              >
                First
              </Radio>
              <Radio id={useUID()} value="2" helpText="This is some help text.">
                Second
              </Radio>
              <Radio id={useUID()} value="3" helpText="This is some help text.">
                Third
              </Radio>
            </RadioGroup>
          </Column>
        </Grid>
        <FormLabel htmlFor={inputIDSeed('textarea')}>Textarea textarea</FormLabel>
        <FormTextArea id={inputIDSeed('textarea')} value="" />
        <CheckboxGroup
          name="bar"
          legend={
            <Text as="span" color="currentColor">
              This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
            </Text>
          }
          helpText="Help text should go here."
          orientation="horizontal"
          required
        >
          <Checkbox
            id={useUID()}
            value="1"
            checked={checked1}
            onChange={event => {
              setChecked1(event.currentTarget.checked);
            }}
            helpText={
              <Text as="span" color="currentColor">
                This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
              </Text>
            }
          >
            First
          </Checkbox>
          <Checkbox
            checked={checked2}
            onChange={event => {
              setChecked2(event.currentTarget.checked);
            }}
            id={useUID()}
            value="2"
            helpText="This is some help text."
          >
            Second
          </Checkbox>
          <Checkbox
            checked={checked3}
            onChange={event => {
              setChecked3(event.currentTarget.checked);
            }}
            id={useUID()}
            value="3"
            helpText="This is some help text."
          >
            Third
          </Checkbox>
        </CheckboxGroup>
        <RadioGroup
          name="bar"
          value={value}
          legend={
            <Text as="span" color="currentColor">
              This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
            </Text>
          }
          helpText="Help text should go here."
          required
          orientation="horizontal"
          onChange={newValue => {
            setValue(newValue);
          }}
        >
          <Radio
            id={useUID()}
            value="1"
            helpText={
              <Text as="span" color="currentColor">
                This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
              </Text>
            }
          >
            First
          </Radio>
          <Radio id={useUID()} value="2" helpText="This is some help text.">
            Second
          </Radio>
          <Radio id={useUID()} value="3" helpText="This is some help text.">
            Third
          </Radio>
        </RadioGroup>
        <FormLabel htmlFor={inputIDSeed('select')}>Select Input</FormLabel>
        <Select id={inputIDSeed('select')} value="" onChange={() => {}}>
          <Option value="1">Option</Option>
        </Select>
        <Checkbox id={inputIDSeed('chcekbox1')} value="1" name="foo">
          Label
        </Checkbox>
        <Checkbox checked id={inputIDSeed('checkbox2')} value="1" name="foo">
          Label
        </Checkbox>
        <Radio id={inputIDSeed('radio1')} value="1" name="foo">
          Label
        </Radio>
        <Radio checked id={inputIDSeed('radio2')} value="1" name="foo">
          Label
        </Radio>
      </Box>
      <Box marginBottom="space70">
        <FormLabel disabled htmlFor={inputIDSeed('disabledinput')}>
          Text Input
        </FormLabel>
        <FormInput disabled id={inputIDSeed('disabledinput')} type="text" value="" />
        <FormLabel disabled htmlFor={inputIDSeed('disabledtextarea')}>
          Textarea Input
        </FormLabel>
        <FormTextArea disabled id={inputIDSeed('disabledtextarea')} value="" />
        <FormLabel disabled htmlFor={inputIDSeed('disabledselect')}>
          Select Input
        </FormLabel>
        <Select disabled id={inputIDSeed('disabledselect')} value="" onChange={() => {}}>
          <Option value="1">Option</Option>
        </Select>
        <Checkbox disabled id={inputIDSeed('disabledcheckbox1')} value="1" name="foo">
          Label
        </Checkbox>
        <Checkbox checked disabled id={inputIDSeed('disabledcheckbox2')} value="1" name="foo">
          Label
        </Checkbox>
        <Radio disabled id={inputIDSeed('disabledradio1')} value="1" name="foo">
          Label
        </Radio>
        <Radio checked disabled id={inputIDSeed('disabledradio2')} value="1" name="foo">
          Label
        </Radio>
      </Box>
      <Box marginBottom="space70">
        <FormLabel htmlFor={inputIDSeed('errorinput')}>Text Input</FormLabel>
        <FormInput hasError id={inputIDSeed('errorinput')} type="text" value="" />
        <Grid>
          <Column>
            <CheckboxGroup
              name="bar"
              legend={
                <Text as="span" color="currentColor">
                  This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
                </Text>
              }
              helpText="Help text should go here."
              errorText="This is an error"
              required
            >
              <Checkbox
                id={useUID()}
                value="1"
                checked={checked1}
                onChange={event => {
                  setChecked1(event.currentTarget.checked);
                }}
                helpText={
                  <Text as="span" color="currentColor">
                    This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
                  </Text>
                }
              >
                First
              </Checkbox>
              <Checkbox
                checked={checked2}
                onChange={event => {
                  setChecked2(event.currentTarget.checked);
                }}
                id={useUID()}
                value="2"
                helpText="This is some help text."
              >
                Second
              </Checkbox>
              <Checkbox
                checked={checked3}
                onChange={event => {
                  setChecked3(event.currentTarget.checked);
                }}
                id={useUID()}
                value="3"
                helpText="This is some help text."
              >
                Third
              </Checkbox>
            </CheckboxGroup>
          </Column>
          <Column>
            <RadioGroup
              name="bar"
              value={value}
              legend={
                <Text as="span" color="currentColor">
                  This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
                </Text>
              }
              helpText="Help text should go here."
              required
              errorText="this is an error"
              onChange={newValue => {
                setValue(newValue);
              }}
            >
              <Radio
                id={useUID()}
                value="1"
                helpText={
                  <Text as="span" color="currentColor">
                    This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
                  </Text>
                }
              >
                First
              </Radio>
              <Radio id={useUID()} value="2" helpText="This is some help text.">
                Second
              </Radio>
              <Radio id={useUID()} value="3" helpText="This is some help text.">
                Third
              </Radio>
            </RadioGroup>
          </Column>
        </Grid>
        <FormLabel htmlFor={inputIDSeed('errortextarea')}>Textarea Input</FormLabel>
        <FormTextArea hasError id={inputIDSeed('errortextarea')} value="" />
        <CheckboxGroup
          name="bar"
          legend={
            <Text as="span" color="currentColor">
              This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
            </Text>
          }
          helpText="Help text should go here."
          errorText="This is an error"
          orientation="horizontal"
          required
        >
          <Checkbox
            id={useUID()}
            value="1"
            checked={checked1}
            onChange={event => {
              setChecked1(event.currentTarget.checked);
            }}
            helpText={
              <Text as="span" color="currentColor">
                This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
              </Text>
            }
          >
            First
          </Checkbox>
          <Checkbox
            checked={checked2}
            onChange={event => {
              setChecked2(event.currentTarget.checked);
            }}
            id={useUID()}
            value="2"
            helpText="This is some help text."
          >
            Second
          </Checkbox>
          <Checkbox
            checked={checked3}
            onChange={event => {
              setChecked3(event.currentTarget.checked);
            }}
            id={useUID()}
            value="3"
            helpText="This is some help text."
          >
            Third
          </Checkbox>
        </CheckboxGroup>
        <RadioGroup
          name="bar"
          value={value}
          legend={
            <Text as="span" color="currentColor">
              This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
            </Text>
          }
          helpText="Help text should go here."
          required
          errorText="this is an error"
          orientation="horizontal"
          onChange={newValue => {
            setValue(newValue);
          }}
        >
          <Radio
            id={useUID()}
            value="1"
            helpText={
              <Text as="span" color="currentColor">
                This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
              </Text>
            }
          >
            First
          </Radio>
          <Radio id={useUID()} value="2" helpText="This is some help text.">
            Second
          </Radio>
          <Radio id={useUID()} value="3" helpText="This is some help text.">
            Third
          </Radio>
        </RadioGroup>
        <FormLabel htmlFor={inputIDSeed('errorselect')}>Select Input</FormLabel>
        <Select hasError id={inputIDSeed('errorselect')} value="" onChange={() => {}}>
          <Option value="1">Option</Option>
        </Select>
        <Checkbox hasError id={inputIDSeed('errorcheck1')} value="1" name="foo">
          Label
        </Checkbox>
        <Checkbox checked hasError id={inputIDSeed('errorcheck2')} value="1" name="foo">
          Label
        </Checkbox>
        <Radio hasError id={inputIDSeed('errorradio1')} value="1" name="foo">
          Label
        </Radio>
        <Radio checked hasError id={inputIDSeed('errorradio2')} value="1" name="foo">
          Label
        </Radio>
      </Box>
    </>
  );
});
