import style from "./App.module.scss";
import { useFetch } from "./hooks/useFetch";

const API_URL = `https://jsonplaceholder.typicode.com/todos`;

function App() {
   const { data: todos, loading, error } = useFetch(API_URL);

   if (error) {
      console.error(error);
      return <div>{error}</div>;
   }

   if (loading) {
      return <div>Loading...</div>;
   }

   return (
      <>
         <div className={style.root}>
            {todos &&
               todos.map((todo) => (
                  <div className={style.todo} key={todo.id}>
                     <h3>{todo.title}</h3>
                     <input type="checkbox" value={todo.completed} />
                  </div>
               ))}
         </div>
      </>
   );
}

export default App;
