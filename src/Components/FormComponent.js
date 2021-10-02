import React from "react";
import { Form, Modal } from "antd";
import InputComponent from "./InputComponent";
import { vsmForm } from "../Config/messages";

const FormComponent = ({
  title,
  visible,
  close,
  formButtons,
  form,
  form_id,
  setDisabled,
  handleSubmit,
}) => {
  // check for valid form values then accordingly make save button disable/enable
  const handleChange = () => {
    form
      .validateFields()
      .then((data) => {
        setDisabled(false);
      })
      .catch((e) => {
        setDisabled(true);
      });
  };

  return (
    <Modal
      centered
      title={title}
      visible={visible}
      onCancel={close}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      footer={formButtons}
    >
      <Form
        form={form}
        id={form_id}
        layout="vertical"
        onChange={handleChange}
        onFinish={handleSubmit}
      >
        <InputComponent
          required
          label="Name"
          name="name"
          placeholder="Name"
          tooltip="Name"
          rules={vsmForm.validation.name}
          maxLength={100}
          autoComplete="off"
        />
        <InputComponent
          required
          label="Address"
          name="address"
          placeholder="Address"
          tooltip="Address"
          rules={vsmForm.validation.address}
          maxLength={500}
          autoComplete="off"
        />
        <InputComponent
          required
          type="date"
          label="Birth Date"
          name="bday"
          tooltip="Birth Date"
          onChange={handleChange}
          rules={vsmForm.validation.bday}
        />
      </Form>
    </Modal>
  );
};

export default FormComponent;
