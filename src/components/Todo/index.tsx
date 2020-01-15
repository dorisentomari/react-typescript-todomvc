import React from 'react';
import { Form, Icon, Input, message, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { TodosCreateUpdateInterface } from '../../interfaces/http';

type RenderType = React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined;

interface TodoProps extends  FormComponentProps {
  onSubmit: (values: TodosCreateUpdateInterface) => any;
  onCancel: () => any;
}

class TodoComponent extends React.Component<TodoProps>  {

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.form.validateFields((err, values: TodosCreateUpdateInterface) => {
      if (err) {
        message.warning('fill form error');
        return false;
      }
      this.props.onSubmit(values);
    });
  };

  handleCancel = () => {
    this.props.onCancel();
  };

  render(): RenderType {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <Form.Item label='content'>
          {getFieldDecorator('content', {
            rules: [{ required: true, message: 'Please input content!' }],
          })(
            <Input
              prefix={<Icon type='edit' style={{ color: 'rgba(0,0,0,.25)' }} />}
            />,
          )}
        </Form.Item>
        <Form.Item label='remark'>
          {getFieldDecorator('remark', {
            rules: [{ required: false, message: 'Please input your remark!' }],
          })(
            <Input
              prefix={<Icon type='edit' style={{ color: 'rgba(0,0,0,.25)' }} />}
            />,
          )}
        </Form.Item>
        <Form.Item className='flex-end'>
          <Button type='default' className='mr-3' onClick={() => this.handleCancel()}>
            cancel
          </Button>
          <Button type='primary' htmlType='submit' onClick={(e) => this.handleSubmit(e)}>
            add
          </Button>
        </Form.Item>

      </Form>
    );
  }
}

const WrappedTodoComponent = Form.create<TodoProps>({ name: 'todo' })(TodoComponent);

export default WrappedTodoComponent;
