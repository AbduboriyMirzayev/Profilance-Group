import { useDispatch } from "react-redux";
import { createNews } from "store/actions/news";

const { Modal, Form, Input } = require("antd");
const { default: Button } = require("components/Button");
const { emptyFunction, getInputRules } = require("utils");

function CreateNews({
  isModalVisble = false,
  modalVisibleHandler = emptyFunction,
}) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const resetForm = () => form.resetFields();

  const modalHandler = () => {
    resetForm();
    modalVisibleHandler();
  };

  const formHadler = async ({ title, description }) => {
    dispatch(createNews({ title, description }));
    modalHandler();
  };

  return (
    <Modal visible={isModalVisble} footer={null} onCancel={modalHandler}>
      <Form form={form} layout="vertical" onFinish={formHadler}>
        <Form.Item label="Заголовок" name="title" rules={getInputRules()}>
          <Input placeholder="Введите заголовок" />
        </Form.Item>
        <Form.Item label="Описание" name="description" rules={getInputRules()}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Button text="Создать" isGreen={true} />
      </Form>
    </Modal>
  );
}

export default CreateNews;
