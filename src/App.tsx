import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import TipForm from './components/TipForm'
import ResultBox from "./components/ResultBox";
import {Layout, Space} from "antd";
import {Content} from "antd/es/layout/layout";
import HistoryList from "./components/HistoryList";

function App() {
  return (
      <Layout>
    <Content>
      <p>Tip App :)</p>
        <Space size='large' direction='vertical'>
        <TipForm />
        <ResultBox result={5 + 5 + "Kč"}/>
          <HistoryList/>
        </Space>
    </Content>
      </Layout>
  );
}

export default App;
