import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { TipCalculator } from './components/TipCalculator';

function App() {
  return (
    <Layout>
      <Content>
        <p>Tip App :)</p>
        <TipCalculator />
      </Content>
    </Layout>
  );
}

export default App;
