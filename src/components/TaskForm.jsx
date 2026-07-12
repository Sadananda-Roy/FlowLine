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
        className="title-item"
        layout="vertical"
        label="Title"
        name="title"
        rules={[{ required: true, message: "Title is required" }]}
      >
        <Input
          size="large"
          className="title-input"
          placeholder="Please enter a title"
        />
      </Form.Item>
      <Form.Item
        className="description-item"
        layout="vertical"
        label="Description"
        name="description"
        rules={[{ required: true, message: "Description is required" }]}
      >
        <TextArea
          size="large"
          rows={4}
          className="description-input"
          placeholder="Give a description"
        />
      </Form.Item>
      <Form.Item
        className="status-item"
        layout="vertical"
        label="Status"
        name="status"
        rules={[{ required: true, message: "Status is required" }]}
      >
        <Radio.Group
          size="large"
          className="status-radio-group"
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
        className="date-item"
        layout="vertical"
        label="Due Date"
        name="dueDate"
        rules={[{ required: true, message: "Date is required" }]}
      >
        <DatePicker size="large" />
      </Form.Item>
    </Form>
  );
};

export default TaskForm;
