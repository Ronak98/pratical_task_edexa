import React from 'react';
import {
  AutoComplete,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Tooltip,
  TimePicker
} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const InputComponent = ({
  hasFeedback,
  hidden,
  label,
  required,
  rules,
  name,
  tooltip,
  hint,
  type,
  options,
  initialValue,
  extra,
  note,
  ...rest
}) => {
  switch (type) {
    case 'date':
      return (
        <Form.Item
          label={label}
          tooltip={tooltip}
          extra={note}
          required={required ? true : false}
          hidden={hidden}
        >
          <Form.Item hasFeedback={hasFeedback} name={name} noStyle rules={rules}>
            <DatePicker {...rest} />
          </Form.Item>
          {hint && (
            <Tooltip title={hint}>
              <InfoCircleOutlined className='ml-10' />
            </Tooltip>
          )}
        </Form.Item>
      );

    case 'date_range':
      return (
        <Form.Item
          label={label}
          tooltip={tooltip}
          extra={note}
          required={required ? true : false}
          hidden={hidden}
        >
          <Form.Item hasFeedback={hasFeedback} name={name} noStyle rules={rules}>
            <DatePicker.RangePicker {...rest} />
          </Form.Item>
          {hint && (
            <Tooltip title={hint}>
              <InfoCircleOutlined className='ml-10' />
            </Tooltip>
          )}
        </Form.Item>
      );

    case 'time':
      return (
        <Form.Item
          label={label}
          tooltip={tooltip}
          extra={note}
          required={required ? true : false}
          hidden={hidden}
        >
          <Form.Item hasFeedback={hasFeedback} name={name} noStyle rules={rules}>
            <TimePicker {...rest} />
          </Form.Item>
          {hint && (
            <Tooltip title={hint}>
              <InfoCircleOutlined className='ml-10' />
            </Tooltip>
          )}
        </Form.Item>
      );

    case 'number':
      return (
        <Form.Item
          label={label}
          tooltip={tooltip}
          extra={note}
          required={required ? true : false}
          hidden={hidden}
        >
          <Form.Item
            hasFeedback={hasFeedback}
            name={name}
            noStyle
            rules={rules}
            onChange={rest.onChange}
          >
            <InputNumber {...rest} />
          </Form.Item>
          {hint && (
            <Tooltip title={hint}>
              <InfoCircleOutlined className='ml-10' />
            </Tooltip>
          )}
        </Form.Item>
      );

    case 'textarea':
      return (
        <Form.Item
          label={label}
          tooltip={tooltip}
          extra={note}
          required={required ? true : false}
          hidden={hidden}
        >
          <Form.Item hasFeedback={hasFeedback} name={name} noStyle rules={rules}>
            <Input.TextArea rows={3} {...rest} />
          </Form.Item>
          {hint && (
            <Tooltip title={hint}>
              <InfoCircleOutlined className='ml-10' />
            </Tooltip>
          )}
        </Form.Item>
      );

    case 'select':
      if (options) {
        return (
          <Form.Item
            label={label}
            tooltip={tooltip}
            extra={note}
            required={required ? true : false}
            hidden={hidden}
          >
            <Form.Item
              hasFeedback={hasFeedback}
              name={name}
              noStyle
              rules={rules}
              initialValue={initialValue}
            >
              <Select
                className={options.className}
                showSearch
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children &&
                  option.children.toString().toLowerCase().indexOf(input.toString().toLowerCase()) >= 0
                }
                {...rest}
              >
                {options.values &&
                  options.values.map((item, index) => {
                    if (item) {
                      if (
                        (options.accepted_keys &&
                          options.accepted_keys.includes(
                            options.value_key ? item[options.value_key] : item.value
                          )) ||
                        (options.rejected_keys &&
                          !options.rejected_keys.includes(
                            options.value_key ? item[options.value_key] : item.value
                          )) ||
                        !options.rejected_keys
                      ) {
                        var text = item.text;
                        if (options.text_key) {
                          if (typeof options.text_key === 'object') {
                            text = '';
                            options.text_key.key.map(
                              (key, index) => (text += item[key] ? item[key] : key)
                            );
                          } else {
                            text = item[options.text_key];
                          }
                        }
                        return (
                          <Select.Option
                            key={index}
                            value={
                              options.value_key ? item[options.value_key] : item.value
                            }
                          >
                            {text}
                          </Select.Option>
                        );
                      }
                    }
                    return null;
                  })}
              </Select>
            </Form.Item>
            {extra}
            {hint && (
              <Tooltip title={hint}>
                <InfoCircleOutlined className='ml-10' />
              </Tooltip>
            )}
          </Form.Item>
        );
      }
      return null;

    case 'autocomplete':
      return (
        <Form.Item
          label={label}
          tooltip={tooltip}
          extra={note}
          required={required ? true : false}
          hidden={hidden}
        >
          <Form.Item
            hasFeedback={hasFeedback}
            name={name}
            noStyle
            rules={rules}
            initialValue={initialValue}
          >
            <AutoComplete
              options={options}
              filterOption={(inputValue, option) =>
                option.value &&
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              {...rest}
            />
          </Form.Item>
          {hint && (
            <Tooltip title={hint}>
              <InfoCircleOutlined className='ml-10' />
            </Tooltip>
          )}
        </Form.Item>
      );

    case 'radio_button':
      if (options) {
        return (
          <Form.Item
            label={label}
            tooltip={tooltip}
            extra={note}
            required={required ? true : false}
            hidden={hidden}
          >
            <Form.Item
              hasFeedback={hasFeedback}
              name={name}
              noStyle
              rules={rules}
              initialValue={initialValue}
            >
              <Radio.Group buttonStyle='solid' {...rest} className={options.className}>
                {options.values &&
                  options.values.map((item, index) => {
                    if (item) {
                      if (
                        (options.accepted_keys &&
                          options.accepted_keys.includes(
                            options.value_key ? item[options.value_key] : item.value
                          )) ||
                        (options.rejected_keys &&
                          !options.rejected_keys.includes(
                            options.value_key ? item[options.value_key] : item.value
                          )) ||
                        !options.rejected_keys
                      ) {
                        return (
                          <Radio.Button
                            style={{ flex: 1, textAlign: 'center' }}
                            key={index}
                            value={
                              options.value_key ? item[options.value_key] : item.value
                            }
                          >
                            {options.text_key ? item[options.text_key] : item.text}
                          </Radio.Button>
                        );
                      }
                    }
                    return null;
                  })}
              </Radio.Group>
            </Form.Item>
            {hint && (
              <Tooltip title={hint}>
                <InfoCircleOutlined className='ml-10' />
              </Tooltip>
            )}
          </Form.Item>
        );
      }
      return null;

    case 'password':
      return (
        <Form.Item
          label={label}
          tooltip={tooltip}
          extra={note}
          required={required ? true : false}
          hidden={hidden}
        >
          <Form.Item hasFeedback={hasFeedback} name={name} noStyle rules={rules}>
            <Input.Password {...rest} />
          </Form.Item>
          {hint && (
            <Tooltip title={hint}>
              <InfoCircleOutlined className='ml-10' />
            </Tooltip>
          )}
        </Form.Item>
      );

    case 'lableonly':
      return (
        <Form.Item
          label={label}
          tooltip={tooltip}
          extra={note}
          required={required ? true : false}
          hidden={hidden}
          className='lableonly'
        >
          {hint && (
            <Tooltip title={hint}>
              <InfoCircleOutlined className='ml-10' />
            </Tooltip>
          )}
        </Form.Item>
      );

    default:
      return (
        <Form.Item
          label={label}
          tooltip={tooltip}
          extra={note}
          required={required ? true : false}
          hidden={hidden}
        >
          <Form.Item hasFeedback={hasFeedback} name={name} noStyle rules={rules}>
            <Input {...rest} />
          </Form.Item>
          {hint && (
            <Tooltip title={hint}>
              <InfoCircleOutlined className='ml-10' />
            </Tooltip>
          )}
        </Form.Item>
      );
  }
};

export default InputComponent;
