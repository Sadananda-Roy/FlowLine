import { Outlet } from "react-router";
import Navbar from "../components/NavBar";
import TaskModal from "../components/modals/TaskModal";
import { useState } from "react";
import { message } from "antd";

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
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <div>
      {contextHolder}
      <Navbar onAddTask={openAddModal} />
      <TaskModal
        modalState={modalState}
        onModalCancel={onModalCancel}
        messageApi={messageApi}
      />
      <Outlet context={{ setModalState, messageApi }} />
    </div>
  );
};

export default MainLayout;
