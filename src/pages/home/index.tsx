import React  from 'react';
import { connect } from 'react-redux';
import { List, Button, Row, Col, Modal } from 'antd';
import { RouteComponentProps } from 'react-router';
import HomeAction from 'src/store/actions/home.action';
import { TodosFormInterface, TodoStatusInterface } from '../../interfaces/http';
import './index.scss';
import Header from 'src/components/Header';
import TodoComponent from 'src/components/Todo';
import { TodosListGetHttp } from '../../http';
import { TypeRootStateInterface } from '../../store/reducers';

interface IParams {
}

interface IParams {}
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof HomeAction;
type RouteProps = RouteComponentProps<IParams>;
interface State {
  todosList: Array<TodosFormInterface>;
  visible: boolean;
  todoTitle: string;
  currentTodo: TodosFormInterface;
}

type Props = StateProps & DispatchProps & RouteProps & {
  children?: React.ReactNode;
};

class HomeComponent extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      todosList: [],
      visible: false,
      todoTitle: '添加 TODO',
      currentTodo: {
        id: '',
        content: '',
        remark:'',
        createTime: '',
        status: TodoStatusInterface.PENDING,
      }
    };
  }

  componentDidMount(): void {
    try {
      TodosListGetHttp().then(res => {
        console.log(res);
        this.setState({
          todosList: res.data
        });
      });
    }catch (e) {
      console.log(e);
      console.log(e.message);
    }
  }

  todoFinish= (todo: TodosFormInterface) => {
    console.log('todoFinish');
  };
  todoUpdate = (todo: TodosFormInterface) => {
    console.log('todoUpdate');
  };
  todoDelete = (todo: TodosFormInterface) => {
    console.log('todoDelete');
  };

  todoModalOk = () => {
    this.setState({
      visible: false
    });
  };

  todoModalCancel = () => {
    this.setState({
      visible: false
    });
  };

  addTodoModal = ()=> {
    this.setState({
      visible: true,
      todoTitle: '添加 TODO'
    });
  };

  todoComponentSubmit = (values: TodosFormInterface) => {
    (async () => {
      await this.props.createTodo(values);
      this.setState({
        visible: false
      });
    })();

  };

  todoComponentCancel = () => {
    console.log('todoComponentCancel');
  };

  render () {
    return (
      <div className='home'>
        <div className='header'>
          <Header/>
        </div>
        <div className='actions'>
          <Button onClick={() => this.addTodoModal()}>添加 TODO</Button>
        </div>
        <section className='list'>
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
                        <Button size='small' type='primary' onClick={() => this.todoFinish(todo)}>完成</Button>,
                        <Button size='small' type='default' onClick={() => this.todoUpdate(todo)}>修改</Button>,
                        <Button size='small' type='danger' onClick={() => this.todoDelete(todo)}>删除</Button>
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
        </section>

        <Modal
          title={this.state.todoTitle}
          visible={this.state.visible}
          onOk={this.todoModalOk}
          onCancel={this.todoModalCancel}
          footer={null}
        >
          <TodoComponent
            defaultFormValues={this.state.currentTodo}
            onSubmit={(values) => this.todoComponentSubmit(values)}
            onCancel={() => this.todoComponentCancel()}
          />
        </Modal>

      </div>
    );
  }
}

const mapStateToProps = (state: TypeRootStateInterface): TypeRootStateInterface  => state;

export default connect(mapStateToProps, HomeAction)(HomeComponent);
