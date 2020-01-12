import React  from 'react';
import { Form, Input, Icon, Button, Checkbox, message } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import AccountForm from 'src/forms/account';
import Header from 'src/components/Header';

import { LoginHttp } from '../../http/authorization.http';
import { JwtTokenInterface } from '../../interfaces/http/authorization.interface';

interface Params {
}

type RouteProps = RouteComponentProps<Params>;
type Props = RouteProps & FormComponentProps;

const Login: React.FC<Props> = (props) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.form.validateFields((err, values) => {
      if (err) {
        // message.warning('表单填写错误');
        return false;
      }

      LoginHttp(values).then((tokenData: JwtTokenInterface) => {
        message.success('登录成功');
        props.history.push('/');
      }).catch((err) => {
        console.log(err.response);
        message.error(err.response.data.message);
      });
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <div className='account'>
      <Header/>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: AccountForm.email.rules
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Please input your email'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: AccountForm.password.rules
          })(
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

const FormLogin = Form.create({ name: 'login' })(Login);


export default FormLogin;
