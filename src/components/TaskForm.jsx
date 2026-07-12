import { DatePicker, Form, Input, Radio } from "antd";
import "../styles/TaskForm.css";
import TextArea from "antd/es/input/TextArea";
import { TASK_STATUS, TASK_STATUS_OPTIONS } from "../constants/taskStatus";

const TaskForm = ({ form, onFinish }) => {
  return (
    <Form
      className="task-form"
      name="basic"
      form={form}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        className="label title-item"
        layout="vertical"
        label="Title"
        name="title"
        rules={[{ required: true, message: "Title is required" }]}
      >
        <Input
          className="title-input"
          size="large"
          placeholder="e.g. Wire up Redux store"
        />
      </Form.Item>
      <Form.Item
        className="label description-item"
        layout="vertical"
        label="Description"
        name="description"
        rules={[{ required: true, message: "Description is required" }]}
      >
        <TextArea
          className="description-input"
          size="large"
          rows={4}
          placeholder="Give a description"
        />
      </Form.Item>
      <Form.Item
        className="label status-item"
        layout="vertical"
        label="Status"
        name="status"
        rules={[{ required: true, message: "Status is required" }]}
      >
        <Radio.Group
          className="status-radio-group"
          size="large"
          // defaultValue={statusFilter}
          // onChange={changeStatusFilter}
        >
          {TASK_STATUS_OPTIONS.filter((item) => item !== TASK_STATUS.ALL).map(
            (item) => (
              <Radio.Button value={item} key={item}>
                {item}
              </Radio.Button>
            ),
          )}
        </Radio.Group>
      </Form.Item>
      <Form.Item
        className="label date-item"
        layout="vertical"
        label="Due Date"
        name="dueDate"
        rules={[{ required: true, message: "Due date is required" }]}
      >
        <DatePicker className="due-datepicker" size="large" />
      </Form.Item>
    </Form>
  );
};

export default TaskForm;
