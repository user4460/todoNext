/*ソート
  const handleSort = (e: any) => {
    const sort = e.target.value;
    if (sort === "asc") {
      setTodos([...todos].sort((a, b) => a.id - b.id));
    } else if (sort === "desc") {
      setTodos([...todos].sort((a, b) => b.id - a.id));
    }
  };*/

//todo todoソートを作成,多分switch文で書く
/*const handleSort = () => {
    const deepCopy = todos.map((todo) => ({ ...todo }));
    const newTodos = deepCopy.sort((a, b) => {
    todo.id - todo.id;
    });
    setTodos(newTodos);
  }
const handleSort = (e: any) => {
   const sort = e.target.value;
   if (sort === "asc") {
      setTodos([...todos].sort((a, b) => a.id - b.id));
   } else if (sort === "desc") {
      setTodos([...todos].sort((a, b) => b.id - a.id));
   }
}
   */