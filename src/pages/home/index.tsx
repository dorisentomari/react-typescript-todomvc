import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, List, message, Modal, Row, Pagination } from 'antd';
import { RouteComponentProps } from 'react-router';
import HomeAction from 'src/store/actions/home.action';
import {
  TodosFormCreateInterface,
  TodosFormUpdateDeleteInterface,
  TodoStatusInterface
} from '../../interfaces/http';
import constant from '../../config/constant';
import { PaginationInterface } from 'src/interfaces/commom/pagination.interface';
import './index.scss';
import Header from 'src/components/Header';
import TodoComponent from 'src/components/Todo';
import { TodosDeleteHttp, TodosListGetHttp } from '../../http';
import { TypeRootStateInterface } from '../../store/reducers';

const { confirm } = Modal;

interface IParams {
}

interface IParams {}
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof HomeAction;
type RouteProps = RouteComponentProps<IParams>;
interface State {
  todosList: Array<TodosFormUpdateDeleteInterface>;
  visible: boolean;
  todoTitle: string;
  currentPage: number;
  currentCreateTodo: TodosFormCreateInterface;
  currentTodo: TodosFormUpdateDeleteInterface;
  page: PaginationInterface;
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
      currentCreateTodo: {
        content: '',
        remark:''
      },
      currentTodo: {
        _id: '',
        content: '',
        remark: '',
        createTime: '',
        updateTime: '',
        status: TodoStatusInterface.PENDING
      },
      page: {
        total: 0,
        pageSize: constant.PAGE.PAGE_SIZE
      },
      currentPage: 1
    };
  }

  componentDidMount(): void {
    this.getTodoList(1);
  }

  getTodoList = (page?: number): void => {

    if (page) {
      this.setState({
        currentPage: page
      });
    }

    try {
      TodosListGetHttp({ page, pageSize: this.state.page.pageSize }).then((res: any) => {
        if (res.data.length === 0) {
          message.warning('find result is empty');
          this.setState({
            todosList: []
          });
          return false;
        }
        this.setState({
          todosList: res.data
        });
        const profile = res.profile;
        this.setState({
          page: {
            pageSize: profile.pageSize,
            total: profile.total
          }
        });
      });
    }catch (e) {
      console.log(e);
      console.log(e.message);
    }
  };

  todoFinish= (todo: TodosFormUpdateDeleteInterface) => {
    console.log('todoFinish');
  };

  todoUpdate = (todo: TodosFormUpdateDeleteInterface) => {
    console.log('todoUpdate');
  };

  todoDelete = (todo: TodosFormUpdateDeleteInterface) => {
    console.log('todoDelete');
    confirm({
      title: 'Do you want to delete this todo?',
      onOk: () => {
        TodosDeleteHttp({ _id: todo._id }).then(() => {
          this.getTodoList();
          message.success('delete success');
        }).catch(err => {
          console.log(err);
          message.error(err.response.data.message);
        });
      },
      onCancel() {
        message.warning('you canceled');
      },
    });
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

  todoComponentSubmit = (values: TodosFormCreateInterface) => {
    (async () => {
      await this.props.createTodo(values);
      this.setState({
        visible: false
      });
      this.getTodoList();
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
              <Pagination className='flex-center'
                current={this.state.currentPage}
                onChange={(page) => this.getTodoList(page)}
                total={this.state.page.total}
                pageSize={this.state.page.pageSize}
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
