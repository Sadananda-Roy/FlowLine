import { Radio } from "antd";
import { TASK_STATUS } from "../../constants/taskStatus";

const StatusPill = ({ status }) => {
  return (
    <Radio.Group defaultValue={TASK_STATUS.ALL}>
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  );
};
export default StatusPill;
