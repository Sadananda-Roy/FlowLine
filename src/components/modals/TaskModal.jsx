import { Form, Modal } from "antd";
import TaskForm from "../TaskForm";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../features/tasks/taskSlice";
import { useEffect } from "react";
import dayjs from "dayjs";

const TaskModal = ({ modalState, onModalCancel }) => {
  const { open, mode, task } = modalState;
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleModalCancel = () => {
    form.resetFields();
    onModalCancel();
  };

  const handleFormFinish = (values) => {
    const payload = {
      ...values,
      id: mode === "add" ? crypto.randomUUID() : task.id,
      dueDate: values.dueDate.format("YYYY-MM-DD"),
    };

    if (mode === "add") {
      dispatch(addTask(payload));
      handleModalCancel();
    } else {
      dispatch(updateTask(payload));
      handleModalCancel();
    }
  };

  useEffect(() => {
    if (!open) return;
    if (open && mode === "edit" && task) {
      form.setFieldsValue({
        title: task.title,
        description: task.description,
        status: task.status,
        dueDate: dayjs(task.dueDate),
      });
    } else {
      form.resetFields();
    }
  }, [mode, task, form, open]);

  return (
    <Modal
      title={`${mode === "edit" ? "Edit task" : "Add new task"}`}
      open={open}
      okText={mode === "add" ? "Create" : "Save Changes"}
      onOk={() => form.submit()}
      onCancel={handleModalCancel}
    >
      <TaskForm form={form} onFinish={handleFormFinish} />
    </Modal>
  );
};

export default TaskModal;
