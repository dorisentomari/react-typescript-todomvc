import React  from 'react';
import { Form, Input, Icon, Button, Checkbox } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { Link } from 'react-router-dom';
import AccountForm from 'src/forms/account';
import Header from 'src/components/Header';

interface Props extends FormComponentProps {
}

const Login: React.FC<Props> = (props) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const { getFieldDecorator } = props.form;

  return (
    <div className='account'>
      <Header/>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', AccountForm.username)(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Please input your username'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', AccountForm.password)(
            <Input
              type='password'
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Please input your password'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>remember me</Checkbox>)}
          <Button type='primary' htmlType='submit'>
            login
          </Button>
          or <Link to='/register'>register</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create({ name: 'login' })(Login);
