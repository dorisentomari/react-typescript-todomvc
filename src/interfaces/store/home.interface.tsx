export interface HomeStateInterface {
  createTodo: {
    content: string;
    remark: string;
  };
  updateTodo: {
    id: string;
    content: string;
    remark: string;
  };
}
