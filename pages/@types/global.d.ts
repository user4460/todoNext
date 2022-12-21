//to doの型
type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

//userの型
type User = {
  id: number;
  name: string;
  lateLogin: number;
};

//commentの型
type Comment = {
  id: number;
  text: string;
  userId: number;
  todoId: number;
};

//filterの型
type Filiter = "all" | "checked" | "unchecked" | "removed";

//sortの型
type Sort = "id" | "text" | "checked";

//priodの型
type Period = {
  name: string;
  start: number;
  update: number;
};

