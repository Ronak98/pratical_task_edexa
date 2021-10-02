import { Button, PageHeader } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TableComponent from "../../Components/TableComponent";
import AddComponent from "./Components/AddComponent";
import EditComponent from "./Components/EditComponent";
import { setCurrentObj } from "./dashboardSlice";

export function Dashboard() {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const dispatch = useDispatch();

  // useEffect hook for api call to set data
  useEffect(() => {}, []);

  // Open form for add new regular expression
  const openAddModal = () => setAddModal(true);

  // Close form for close new regular expression
  const closeAddModal = () => setAddModal(false);

  // Open form for edit existing cash transaction and set values to form
  const openEditModal = (id) => {
    dispatch(setCurrentObj(id));
    setEditModal(true);
  };

  // Close form of edit cash transaction
  const closeEditModal = () => setEditModal(false);

  return (
    <div className="dashboard">
      <PageHeader
        title={"Dashboard"}
        extra={[
          <Button key="1" title="Add Form" onClick={openAddModal}>
            Add Form
          </Button>,
        ]}
      >
        <TableComponent openEditModal={openEditModal} />
        <AddComponent visible={addModal} close={closeAddModal} />
        <EditComponent visible={editModal} close={closeEditModal} />
      </PageHeader>
    </div>
  );
}
