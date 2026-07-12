import { Modal } from "antd";

const TaskModal = ({ modalState, onModalCancel }) => {
  const onOk = () => {};
  return (
    <Modal
      title={`${modalState.mode === "edit" ? "Edit Task" : "Add New Task"}`}
      open={modalState.open}
      onOk={onOk}
      onCancel={onModalCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default TaskModal;
