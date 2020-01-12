import { message } from 'antd';

export default {
  httpError(err: any) {
    if (err && err.response) {
      console.log(err.response);
      message.error(err.response.data.message);
    }
  }
};
