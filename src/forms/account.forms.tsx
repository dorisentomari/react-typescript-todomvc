const minLength = 8;
const maxLength = 30;

const AccountForms = {
  email: {
    rules: [
      { required: true, message: 'Please input your email' }
    ]
  },
  password: {
    rules: [
      { required: true, message: 'Please input your password' },
      { min: minLength, message: `password min length is ${minLength}` },
      { max: maxLength, message: `password max length is ${maxLength}` }
    ]
  }
};

export {
  AccountForms
};
