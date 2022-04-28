import { Form, Input, Modal } from "antd";
import Button from "components/Button";
import { checkAuthAndGetUserOrError } from "helpers/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin, signout } from "store/actions/auth";
import "styles/Signin.scss";
import { emptyFunction, getInputRules } from "utils";

function Signin() {
  const [isModalVisble, setIsModalVisible] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
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

  return (
    <div className="signin">
      <li className="header__list-item">
        <GetNavbarButton modalVisibleHandler={modalVisibleHandler} />
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
          <Form.Item name="login" label="Логин:" rules={getInputRules()}>
            <Input placeholder="Введите логин" />
          </Form.Item>
          <Form.Item name="password" label="Пароль:" rules={getInputRules()}>
            <Input.Password placeholder="Введите Пароль" />
          </Form.Item>
          <Button text="Войти" isGreen={true} />
        </Form>
      </Modal>
    </div>
  );
}

function GetNavbarButton({ modalVisibleHandler = emptyFunction }) {
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signout());
  };

  return (
    <>
      {user ? (
        <button className="header__button" onClick={signOutHandler}>
          Выход
        </button>
      ) : (
        <button className="header__button" onClick={modalVisibleHandler}>
          Вход
        </button>
      )}
    </>
  );
}

export default Signin;
