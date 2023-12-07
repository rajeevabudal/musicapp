import React from 'react';
import { Button, Result } from 'antd';
const ErrorPage = ({status, handleButton}) => (
  <Result
    status={status}
    title={status}
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary" onClick={handleButton}>Back Home</Button>}
  />
);
export default ErrorPage;