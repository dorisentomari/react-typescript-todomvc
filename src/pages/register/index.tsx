import React  from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Icon, Button, message } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import AccountForm from 'src/forms/account';
import Header from 'src/components/Header';
import { RegisterHttp } from '../../http/authorization.http';
import { RegisterParamsInterface } from '../../interfaces/http/authorization.interface';

interface Props extends FormComponentProps {
}

const Register: React.FC<Props> = (props) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.form.validateFields(async (err, values: RegisterParamsInterface) => {
      if (err) {
        message.warning('表单填写错误');
      }
      console.log(values);
      const token = await RegisterHttp(values);
      console.log(token);
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <div className='account'>
      <Header/>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('email', AccountForm.email)(
            <Input
              prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Please input your email'
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
          {getFieldDecorator('rePassword', AccountForm.password)(
            <Input
              type='password'
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Please input your password again'
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            register
          </Button>
          or <Link to='/login'>login</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create({ name: 'register' })(Register);
