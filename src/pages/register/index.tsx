import React  from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Icon, Button, message } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { RouteComponentProps } from 'react-router';

import Header from 'src/components/Header';
import AccountForm from 'src/forms/account';
import errorHandler from '../../helpers/errorHandler';
import { RegisterHttp } from 'src/http/authorization.http';

import { RegisterParamsInterface } from 'src/interfaces/http/authorization.interface';


interface Params {
}

type RouteProps = RouteComponentProps<Params>;
type Props = RouteProps & FormComponentProps;

const Register: React.FC<Props> = (props) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.form.validateFields((err, values: RegisterParamsInterface) => {
      if (err) {
        message.warning('表单填写错误');
        return false;
      }
      RegisterHttp(values).then(() => {
        message.success('注册成功');
        props.history.push('/login');
      }).catch(err => {
        errorHandler.httpError(err);
      });
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
