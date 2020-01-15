import React  from 'react';
import { List, Button, Row, Col, Modal } from 'antd';
import { RouteComponentProps } from 'react-router';

import './index.scss';
import Header from 'src/components/Header';
import Todo from 'src/components/Todo';
import { TodosInterface } from 'src/interfaces/http/todos.interface';
import { TodosListGetHttp } from '../../http';

interface IParams {
}

type Props = RouteComponentProps<IParams>;
interface State {
  todosList: Array<TodosInterface>;
  visible: boolean;
  todoTitle: string;
}

class HomeComponent extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      todosList: [],
      visible: false,
      todoTitle: '添加 TODO'
    };
  }

  componentDidMount(): void {
    try {
      TodosListGetHttp().then(res => {
        console.log(res);
      });
    }catch (e) {
      console.log(e);
      console.log(e.message);
    }
  }

  todoFinish= (todo: TodosInterface) => {
    console.log('todoFinish');
  };
  todoUpdate = (todo: TodosInterface) => {
    console.log('todoUpdate');
  };
  todoDelete = (todo: TodosInterface) => {
    console.log('todoDelete');
  };

  todoInfoOk = () => {
    console.log('todoInfoOk');
    this.setState({
      visible: false
    });
  };

  todoInfoCancel = () => {
    console.log('todoInfoCancel');
    this.setState({
      visible: false
    });
  };

  addTodo = ()=> {
    console.log('addTodo');
    this.setState({
      visible: true,
      todoTitle: '添加 TODO'
    });
  };

  render () {
    return (
      <div className='home'>
        <Header/>
        <Button onClick={() => this.addTodo()}>添加 TODO</Button>
        <Row gutter={16}>
          <Col span={6}/>
          <Col span={12}>
            <List
              itemLayout='horizontal'
              dataSource={this.state.todosList}
              renderItem={todo => (
                <List.Item
                  actions={
                    [
                      <Button size='small' type='primary' onClick={() => console.log(todo)}>完成</Button>,
                      <Button size='small' type='default' onClick={() => console.log(todo)}>修改</Button>,
                      <Button size='small' type='danger' onClick={() => console.log(todo)}>删除</Button>
                    ]
                  }
                >
                  <List.Item.Meta
                    title={todo.content}
                    description={todo.remark}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={6}/>
        </Row>

        <Modal
          title={this.state.todoTitle}
          visible={this.state.visible}
          onOk={this.todoInfoOk}
          onCancel={this.todoInfoCancel}
        >
          <Todo/>
        </Modal>

      </div>
    );
  }
}

export default HomeComponent;
