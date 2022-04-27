import { Form, Input, Modal } from "antd";
import { checkAuthAndGetUserOrError, getAuthInputRules } from "helpers/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin, signout } from "store/actions/auth";
import "styles/Signin.scss";

function Signin() {
  const [isModalVisble, setIsModalVisible] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [form] = Form.useForm();

  const modalVisibleHandler = () => {
    form.resetFields();
    setIsModalVisible((isModalVisble) => !isModalVisble);
  };

  const formHandler = ({ login, password }) => {
    const { user, error } = checkAuthAndGetUserOrError(login, password);

    if (user) {
      dispatch(signin(user));
      modalVisibleHandler();
      setError("");
    } else {
      setError(error);
    }
  };

  const signOutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className="signin">
      <li className="header__list-item">
        {user ? (
          <button className="header__button" onClick={signOutHandler}>
            Выход
          </button>
        ) : (
          <button className="header__button" onClick={modalVisibleHandler}>
            Вход
          </button>
        )}
      </li>
      <Modal
        visible={isModalVisble}
        footer={null}
        width={350}
        onCancel={modalVisibleHandler}
      >
        <div className="signin__header">
          <div className="signin__header-title">Вход</div>
          {error && <p className="signin__header-text--error">{error}</p>}
        </div>
        <Form form={form} layout="vertical" onFinish={formHandler}>
          <Form.Item name="login" label="Логин:" rules={getAuthInputRules()}>
            <Input placeholder="Введите логин" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Пароль:"
            rules={getAuthInputRules()}
          >
            <Input.Password placeholder="Введите Пароль" />
          </Form.Item>
          <button className="signin__button">Войти</button>
        </Form>
      </Modal>
    </div>
  );
}

export default Signin;
