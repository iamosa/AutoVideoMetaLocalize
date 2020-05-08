import {LeftOutlined} from '@ant-design/icons';
import {Button, Col, Divider, Form, Row, Select} from 'antd';
import {Store} from 'antd/lib/form/interface';
import * as React from 'react';
import {AppSupportedLanguage, Channel, LanguageApi, PlaylistItem} from '../../../../../generated-sources/openapi';
import {PlaylistTable} from '../../../PlaylistTable/PlaylistTable';
import {Page} from '../../Page';
import {ChannelTranslationConfiguration} from '../ChannelTranslationConfiguration';
import './style.less';

const LANGUAGE_API = new LanguageApi();

const FORM_ITEM_NAMES = {
  LANGUAGE_SELECTION: 'language-selection',
  VIDEO_SELECTION: 'video-selection',
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
  onBack: () => void,
}): JSX.Element {
  const [form] = Form.useForm();

  const [languageOptions, setLanguageOptions] =
    React.useState<AppSupportedLanguage[]>(null);

  React.useEffect(() => {
    LANGUAGE_API.apiLanguageGoogleTranslateSupportedLanguagesGet()
        .then((res) => setLanguageOptions(res));
  }, []);

  /**
   *
   *
   * @param selectedRowKeys
   * @param selectedRows
   */
  async function onSelectVideos(selectedRowKeys: React.Key[], selectedRows: PlaylistItem[]) {
    const values: Store = form.getFieldsValue();
    values[FORM_ITEM_NAMES.VIDEO_SELECTION] = selectedRowKeys;
    form.setFieldsValue(values);
  }

  /**
   * Called when the options form is successfully filled out and submitted.
   *
   * @param {Store} values
   */
  async function onFinish(values: Store): Promise<void> {
    const selectedLanguageCodes: string[] = values[FORM_ITEM_NAMES.LANGUAGE_SELECTION];
    const selectedVideoIds: string[] = values[FORM_ITEM_NAMES.VIDEO_SELECTION];

    props.onFinish({
      languages: selectedLanguageCodes,
      videos: selectedVideoIds,
    });
  }

  return (
    <Page>
      <Divider>Options</Divider>

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
            loading={languageOptions == null}
            mode="multiple"
            optionFilterProp="label"
          >
            {languageOptions && languageOptions.map((_) =>
              <Select.Option key={_.code} value={_.code} label={_.name}>
                {_.name}
              </Select.Option >,
            )}
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
          {props.channel && (
            <PlaylistTable
              playlistId={props.channel.contentDetails?.relatedPlaylists.uploads}
              onChangeRowSelection={onSelectVideos}
            />
          )}
        </Form.Item>

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