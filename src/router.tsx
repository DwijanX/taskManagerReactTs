import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TaskListView from './application/pages/taskList/application/components/taskListView';
import NewTaskView from './application/pages/createTask/application/components/newTaskView';
import EditTaskView from './application/pages/editTask/application/components/editTaskView';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskListView />} />
        <Route path="/new" element={<NewTaskView />} />
        <Route path="/update/:id" element={<EditTaskView/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
