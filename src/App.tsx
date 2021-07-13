import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {
    Col, Divider, Layout, Row, Space,
} from 'antd';
import { Content } from 'antd/es/layout/layout';
import { TipCalculator } from './components/TipCalculator';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
    return (
        <Layout>
            <Space direction="vertical" size={30}>
                <div />
                <Content>
                    <Row>
                        <Col span={12} offset={12}>
                            <h1>Tip App</h1>
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col span={12} offset={7}>
                            <TipCalculator />
                        </Col>
                    </Row>
                </Content>
            </Space>
        </Layout>
    );
}

export default App;
