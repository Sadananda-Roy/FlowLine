import { Outlet } from "react-router";
import Navbar from "../components/NavBar";
import TaskModal from "../components/modals/TaskModal";
import { useState } from "react";

const MainLayout = () => {
  const [modalState, setModalState] = useState({
    open: false,
    mode: null,
    task: null,
  });
  const openAddModal = () => {
    setModalState({ open: true, mode: "add", task: null });
  };
  const onModalCancel = () => {
    setModalState({ open: false, mode: null, task: null });
  };
  return (
    <div>
      <Navbar onAddTask={openAddModal} />
      <TaskModal modalState={modalState} onModalCancel={onModalCancel} />
      <Outlet context={{ setModalState }} />
    </div>
  );
};

export default MainLayout;
