import { Form, Modal } from "antd";
import TaskForm from "../TaskForm";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../features/tasks/taskSlice";
import { useEffect } from "react";
import dayjs from "dayjs";
import { formatDate } from "../../utils/date";

const TaskModal = ({ modalState, onModalCancel, messageApi }) => {
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
      dueDate: formatDate(values.dueDate),
    };

    if (mode === "add") {
      dispatch(addTask(payload));
      messageApi.open({
        type: "success",
        content: `Task "${payload.title}" was created successfully`,
      });
      handleModalCancel();
    } else {
      dispatch(updateTask(payload));
      messageApi.open({
        type: "success",
        content: "Task was edited successfully",
      });
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
