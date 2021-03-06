import {ArrowUpOutlined} from '@ant-design/icons';
import {Card, Col, Row, Statistic} from 'antd';
import {ColProps} from 'antd/lib/col';
import * as React from 'react';
import './style.less';

const {Meta} = Card;

const COL_LAYOUT: ColProps = {
  xs: 24,
  md: 12,
  xl: 8,
};

/**
 * A visual explaination about how this web application is useful.
 *
 * @return {JSX.Element}
 */
export function AppExplanationGrid(): JSX.Element {
  const [viewCount, setViewCount] =
    React.useState<number>(927787);

  return (
    <Row className="app-explanation-grid" align="top" justify="center" gutter={8}>
      <Col {...COL_LAYOUT} >
        <Card cover={
          <Row align="middle" justify="center">
            <img alt="example" src="https://www.authorsguilds.com/wp-content/uploads/2017/02/youtube.png"
              className="image-cover" />
          </Row>
        }>
          <Meta description="The YouTube algorithm tends to recommend content which is local in relation to the viewer." />
        </Card>
      </Col>
      <Col {...COL_LAYOUT} >
        <Card cover={
          <Row align="middle" justify="center">
            <img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Cloud-Translation-Logo.svg"
              style={{width: 110}} />
          </Row>
        }>
          <Meta description="This service can automatically localize content on YouTube by translating it into several languages." />
        </Card>
      </Col>
      <Col {...COL_LAYOUT} >
        <Card cover={
          <Row align="middle" justify="center">
            <Statistic
              title="View Count"
              value={viewCount}
              valueStyle={{color: '#3f8600'}}
              prefix={<ArrowUpOutlined />}
              suffix="views"
              style={{textAlign: 'center'}}
            />
          </Row>
        }>
          <Meta description="The content affected by this service tends to be viewed more frequently." />
        </Card>
      </Col>
    </Row>
  );
}
