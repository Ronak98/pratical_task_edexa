import React from "react";
import { useSortableData } from "../utils/Sortable";
import { dashboardState, deleteData } from "../Pages/Dashboard/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";

const TableComponent = ({ openEditModal }) => {
  const dispatch = useDispatch();
  const { tableList } = useSelector(dashboardState);
  const { items, requestSort } = useSortableData(tableList);

  return (
    tableList?.length > 0 && (
      <table>
        <thead>
          <tr>
            <th>
              <button type="button" onClick={() => requestSort("name")}>
                Name
              </button>
            </th>
            <th>
              <button type="button" onClick={() => requestSort("address")}>
                Address
              </button>
            </th>
            <th>
              <button type="button" onClick={() => requestSort("bday")}>
                Birth Date
              </button>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.bday}</td>
              <td>
                <button type="button" onClick={() => openEditModal(item.id)}>
                  Edit
                </button>
                <button
                  className="ml10"
                  type="button"
                  onClick={() => dispatch(deleteData(item.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};

export default TableComponent;
