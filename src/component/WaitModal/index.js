import React from 'react';
import { Modal, Button } from 'antd';
import Wait from '../Wait/index';

export default function Index({ visible, onOk, onCancel }) {
  return (
    <Modal
      title="提示"
      okText="确定"
      visible={visible}
      onOk={onOk}
      width={600}
      onCancel={onCancel}
      centered
      footer={[
        <Button key="submit" type="primary" onClick={onCancel}>确定</Button>
      ]}
    >
      <Wait text="正在开发中..." style={{ border: 'none', margin: 'auto', minWidth: '50%', minHeight: 200, width: '80%' }} />
    </Modal>
  );
}