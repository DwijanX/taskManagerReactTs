import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TaskListView from './application/pages/taskList/application/components/taskListView';
import NewTaskView from './application/pages/taskForm/application/components/newTaskView';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskListView />} />
        <Route path="/new" element={<NewTaskView />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
