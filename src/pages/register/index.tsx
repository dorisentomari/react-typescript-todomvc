import React  from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Form, Input, Icon, Button, message } from 'antd';
import { FormComponentProps } from 'antd/es/form';

import Header from 'src/components/Header';

import { AccountForms } from '../../forms';
import { errorHelpers } from '../../helpers';

import { RegisterHttp } from 'src/http/authorization.http';

import { AccountRegisterParamsInterface } from 'src/interfaces/http';

interface Params {
}

type RouteProps = RouteComponentProps<Params>;
type Props = RouteProps & FormComponentProps;

const Register: React.FC<Props> = (props) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.form.validateFields((err, values: AccountRegisterParamsInterface) => {
      if (err) {
        message.warning('fill form error');
        return false;
      }
      RegisterHttp(values).then(() => {
        message.success('register success');
        props.history.push('/login');
      }).catch(err => {
        errorHelpers.httpError(err);
      });
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <div className='account'>
      <Header/>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('email', AccountForms.email)(
            <Input
              prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Please input your email'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', AccountForms.password)(
            <Input
              type='password'
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Please input your password'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('rePassword', AccountForms.password)(
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
