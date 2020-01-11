const minLength = 8;
const maxLength = 16;

export default {
  username: {
    rules: [
      { required: true, message: 'Please input your username' },
      { min: minLength, message: `username min length is ${minLength}` },
      { max: maxLength, message: `username max length is ${maxLength}` }
    ],
  },
  password: {
    rules: [
      { required: true, message: 'Please input your password' },
      { min: minLength, message: `password min length is ${minLength}` },
      { max: maxLength, message: `password max length is ${maxLength}` }
    ],
  },
  email: {
    rules: [
      { required: true, message: 'Please input your email' }
    ],
  }
};
