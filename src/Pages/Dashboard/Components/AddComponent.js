import React, { useEffect, useState } from "react";
import { Form, Button } from "antd";
import FormComponent from "../../../Components/FormComponent";
import { useSelector, useDispatch } from "react-redux";
import {
  loadingOn,
  addData,
  clearState,
  dashboardState,
} from "../dashboardSlice";
import moment from "moment";

const AddComponent = (props) => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);
  const { loading } = useSelector(dashboardState);
  const dispatch = useDispatch();

  // Make function call to add new record
  const handleSubmit = (data) => {
    data.bday = data.bday && moment(data.bday).format("YYYY-MM-DD");
    dispatch(loadingOn());
    dispatch(addData(data));
    close();
  };

  // reset form and close add form
  const close = () => {
    props.close();
    form.resetFields();
    setDisabled(true);
  };

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch]);

  return (
    <FormComponent
      form={form}
      form_id="addform"
      title="Add Form"
      visible={props.visible}
      close={close}
      handleSubmit={handleSubmit}
      setDisabled={setDisabled}
      formButtons={[
        <Button
          key="1"
          form="addform"
          disabled={disabled}
          htmlType="submit"
          type="primary"
          loading={loading}
        >
          Save
        </Button>,
        <Button key="2" htmlType="button" onClick={close}>
          Cancel
        </Button>,
      ]}
    />
  );
};

export default AddComponent;
