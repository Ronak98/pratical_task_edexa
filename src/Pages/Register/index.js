import React, { useEffect, useState } from "react";
import { Card, Form, Input, Button, Alert, Popover } from "antd";
import { vsmAuth, vsmNotify } from "../../Config/messages";
import { Link, useHistory } from "react-router-dom";
import {
  loadingOn,
  registerSuccess,
  registerError,
  loginState,
  clearState,
} from "../Login/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const { isError, loading, user } = useSelector(loginState);
  const [tooltip, setTooltip] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  let history = useHistory();

  // make function call to register
  const handleSubmit = (data) => {
    dispatch(loadingOn());
    const userList = user;
    let checkUser =
      userList?.length > 0 &&
      userList.find((item) => item.email === data.email);
    if (checkUser) {
      dispatch(registerError());
    } else {
      vsmNotify.success({
        message: vsmAuth.successRegister,
      });
      history.push("/");
      dispatch(registerSuccess({ email: data.email, password: data.password }));
    }
  };

  // password criteria tool tip
  const passwordTooltip = (
    <div>
      <div>at least 1 numeric character</div>
      <div>at least 1 special character</div>
      <div>at least 1 uppercase letter</div>
      <div>at least 8 character</div>
    </div>
  );

  // handle password tool tip visiblility
  const handleChangePassword = (e) => {
    form
      .validateFields(["password"])
      .then(() => {
        setTooltip(false);
      })
      .catch(() => {
        setTooltip(true);
      });
  };

  useEffect(() => {
    dispatch(clearState());
    form.resetFields();
  }, [form, dispatch]);

  return (
    <div className="common__wrapper">
      <Form form={form} className="w400" onFinish={handleSubmit}>
        <Card title="Sign Up">
          {isError && (
            <Alert
              style={{ marginBottom: 15 }}
              message={isError}
              type="error"
              showIcon
            />
          )}
          <Form.Item name="email" rules={vsmAuth.validation.email} hasFeedback>
            <Input placeholder="Email Address" />
          </Form.Item>
          <Popover
            placement="topRight"
            content={passwordTooltip}
            visible={tooltip}
          >
            <Form.Item
              name="password"
              rules={vsmAuth.validation.password}
              hasFeedback
            >
              <Input.Password
                placeholder="Password"
                onBlur={() => setTooltip(false)}
                onChange={handleChangePassword}
                onFocus={handleChangePassword}
              />
            </Form.Item>
          </Popover>
          <Form.Item
            name="confirm_password"
            rules={vsmAuth.validation.confirmpassword}
            hasFeedback
          >
            <Input.Password
              placeholder="Confirm Password"
              onBlur={() => setTooltip(false)}
              onChange={handleChangePassword}
            />
          </Form.Item>
          <div className="text-center">
            <Button loading={loading} htmlType="submit" block type="primary">
              SIGN UP
            </Button>
          </div>
          <div className="d-flex justify-content-end">
            <Link to="/" type="link" className="p-0 mt-10">
              <b>Login</b>
            </Link>
          </div>
        </Card>
      </Form>
    </div>
  );
};

export default Register;
