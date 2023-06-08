import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "redux/operations";
import { TaskList } from "./TaskList/TaskList";
import { selectError, selectIsLoading } from "redux/selectors";
import { TaskForm } from "./TaskForm/TaskForm";
import { AppBar } from "./AppBar/AppBar";
import { Layout } from "./Layout/Layout";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <p>Request in progress...</p>}
      <TaskList />
    </Layout>
  );
};