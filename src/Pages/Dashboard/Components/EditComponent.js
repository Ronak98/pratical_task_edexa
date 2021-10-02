import React, { useEffect, useState } from "react";
import { Form, Button } from "antd";
import FormComponent from "../../../Components/FormComponent";
import { useSelector, useDispatch } from "react-redux";
import {
  loadingOn,
  editData,
  clearState,
  dashboardState,
  clearCurrentObj,
} from "../dashboardSlice";
import moment from "moment";

const EditComponent = (props) => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);
  const { loading, currentObj } = useSelector(dashboardState);
  const dispatch = useDispatch();

  // Make function call to add new record
  const handleSubmit = (data) => {
    data.id = currentObj.id;
    data.bday = data.bday && moment(data.bday).format("YYYY-MM-DD");
    dispatch(loadingOn());
    dispatch(editData(data));
    close();
  };

  // reset form and close add form
  const close = () => {
    props.close();
    form.resetFields();
    setDisabled(true);
    dispatch(clearCurrentObj());
  };

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch]);

  // set data on refresh page
  useEffect(() => {
    if (props.visible && currentObj) {
      form.setFieldsValue({
        name: currentObj.name,
        address: currentObj.address,
        bday: moment(currentObj.bday),
      });
    }
  }, [props.visible, currentObj, form]);

  return (
    <FormComponent
      form={form}
      form_id="editform"
      title="Edit Form"
      visible={props.visible}
      close={close}
      handleSubmit={handleSubmit}
      setDisabled={setDisabled}
      formButtons={[
        <Button
          key="1"
          form="editform"
          disabled={disabled}
          htmlType="submit"
          type="primary"
          loading={loading}
        >
          Update
        </Button>,
        <Button key="2" htmlType="button" onClick={close}>
          Cancel
        </Button>,
      ]}
    />
  );
};

export default EditComponent;
