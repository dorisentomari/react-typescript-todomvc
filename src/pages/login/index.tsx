import React from 'react';
import { Button, Checkbox, Form, Icon, Input, message } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from 'src/components/Header';
import AccountAction from 'src/store/actions/account.action';
import AccountForm from 'src/forms/account';
import { TypeRootStateInterface } from 'src/store/reducers/';
import { AccountLoginParamsInterface } from 'src/interfaces/forms/account.interface';

interface IParams {}
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof AccountAction;
type RouteProps = RouteComponentProps<IParams>;
type Props = StateProps & DispatchProps & RouteProps & FormComponentProps & {
  children?: React.ReactNode;
};

const Login: React.FC<Props> = (props) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.form.validateFields((err, values: AccountLoginParamsInterface) => {
      if (err) {
        message.warning('表单填写错误');
        return false;
      }
      props.userLogin(values);
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

const mapStateToProps = (state: TypeRootStateInterface): TypeRootStateInterface  => state;


const FormLogin = Form.create({ name: 'login' })(Login);

export default connect(mapStateToProps, AccountAction)(FormLogin);
