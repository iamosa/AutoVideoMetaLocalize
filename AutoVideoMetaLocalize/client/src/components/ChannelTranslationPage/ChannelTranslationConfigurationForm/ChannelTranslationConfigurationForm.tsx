import {LeftOutlined} from '@ant-design/icons';
import {Button, Checkbox, Col, Collapse, Form, Row, Select} from 'antd';
import {Store} from 'antd/lib/form/interface';
import * as React from 'react';
import {Channel} from '../../../../generated-sources/openapi';
import {ChannelTranslationConfiguration} from '../../../ChannelTranslationConfiguration';
import {Page} from '../../Page/Page';
import TranslationLanguageContext from '../../TranslationLanguageContext/TranslationLanguageContext';
import {VideoFormSelectionTable} from './VideoFormSelectionTable/VideoFormSelectionTable';

const FORM_ITEM_NAMES = {
  LANGUAGE_SELECTION: 'language-selection',
  VIDEO_SELECTION: 'video-selection',
  SMB_CHECKBOX: 'smb-checkbox',
};

/**
 * The language and video selection screen and content.
 *
 * @param {object} props
 * @return {JSX.Element}
 */
export function ChannelTranslationConfigurationForm(props: {
  channel: Channel,
  onFinish: (configuration: ChannelTranslationConfiguration) => void,
  onBack?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void,
}): JSX.Element {
  const TRANSLATION_LANGUAGE_CONTEXT = React.useContext(TranslationLanguageContext);

  const [form] = Form.useForm();

  /**
   * Called when the options form is successfully filled out and submitted.
   *
   * @param {Store} values
   */
  function onFinish(values: Store) {
    const LANGUAGE_SELECTION: string[] = values[FORM_ITEM_NAMES.LANGUAGE_SELECTION];
    const VIDEO_SELECTION: string[] = values[FORM_ITEM_NAMES.VIDEO_SELECTION];
    const SMB_CHECKBOX: boolean = values[FORM_ITEM_NAMES.SMB_CHECKBOX];

    props.onFinish({
      languageCodes: LANGUAGE_SELECTION,
      videoIds: VIDEO_SELECTION,
      sheetmusicboss: SMB_CHECKBOX,
    });
  }

  const languageSelectOptions: React.ReactNode[] = [];
  if (TRANSLATION_LANGUAGE_CONTEXT.GoogleTranslate && TRANSLATION_LANGUAGE_CONTEXT.YouTube) {
    TRANSLATION_LANGUAGE_CONTEXT.GoogleTranslate.forEach((_) => {
      if (_.supportTarget && TRANSLATION_LANGUAGE_CONTEXT.YouTube.find((elem) => elem.hl == _.languageCode)) {
        languageSelectOptions.push(
            <Select.Option key={_.languageCode} value={_.languageCode} label={_.displayName}>
              {_.displayName}
            </Select.Option >,
        );
      }
    });
  }

  return (
    <Page title="Options">
      <Form
        form={form}
        labelCol={{span: 4}}
        wrapperCol={{span: 20}}
        onFinish={onFinish}
      >
        <Form.Item
          label="Languages"
          name={FORM_ITEM_NAMES.LANGUAGE_SELECTION}
          rules={[{required: true, message: 'Please select at least one language.'}]}
        >
          <Select
            loading={!languageSelectOptions}
            mode="multiple"
            optionFilterProp="label"
          >
            {languageSelectOptions}
          </Select>
        </Form.Item>

        <Form.Item
          label="Videos"
          name={FORM_ITEM_NAMES.VIDEO_SELECTION}
          rules={[{
            required: true,
            message: 'Please select at least one video.',
          }]}
        >
          <VideoFormSelectionTable
            channel={props.channel}
          />
        </Form.Item>

        <Collapse className="ant-form-item">
          <Collapse.Panel header="Advanced Options" key="1">
            <Form.Item
              name={FORM_ITEM_NAMES.SMB_CHECKBOX}
              valuePropName="checked"
              noStyle
            >
              <Checkbox>Sheet Music Boss</Checkbox>
            </Form.Item>
          </Collapse.Panel>
        </Collapse>

        <Row align="middle" justify="space-between" gutter={8}>
          <Col>
            <Button
              shape="circle"
              icon={<LeftOutlined />}
              onClick={props.onBack}
              style={{width: '1em'}}
            />
          </Col>
          <Col>
            <Button type="primary" htmlType="submit">Execute</Button>
          </Col>
        </Row>
      </Form>
    </Page>
  );
}
