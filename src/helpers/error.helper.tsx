import { message } from 'antd';

const errorHelpers = {
  httpError(err: any) {
    if (err && err.response) {
      console.log(err.response);
      message.error(err.response.data.message);
    }
  }
};

export {
  errorHelpers
};
