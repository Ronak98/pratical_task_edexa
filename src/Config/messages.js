import { notification } from "antd";

const vsmAuth = {
  success: "Logged in successful",
  successRegister: "User created successfully",
  validation: {
    email: [
      { required: true, message: "Email Address cannot be empty." },
      {
        pattern:
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
        message: "Invalid email address, please enter the valid email address",
      },
    ],
    password: [
      { required: true, message: "Password cannot be empty." },
      {
        pattern: /(?=.*[0-9])(?=.*[@$!%*#?&])(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/,
        message: "Password entry does not meet criteria.",
      },
    ],
    confirmpassword: [
      { required: true, message: "Confirm Password cannot be empty." },
      ({ getFieldValue }) => ({
        validator(rule, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(
            "New Password and Confirm Password does not match."
          );
        },
      }),
    ],
  },
};

const vsmForm = {
  successRegister: "Record created successfully",
  validation: {
    name: [{ required: true, message: "Name cannot be empty." }],
    address: [{ required: true, message: "Address cannot be empty." }],
    bday: [{ required: true, message: "Birth Day cannot be empty." }],
  },
};

const vsmNotify = {
  success: (data) => {
    notification.success({ placement: "bottomRight", duration: 3, ...data });
  },
  error: (data) => {
    notification.error({ placement: "bottomRight", duration: 3, ...data });
  },
};

export { vsmNotify, vsmAuth, vsmForm };
