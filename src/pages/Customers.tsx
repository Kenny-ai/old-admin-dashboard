import React from 'react'
import { Header } from "../components";
import {
  ColumnDirective,
  ColumnsDirective,
  Edit,
  Filter,
  GridComponent,
  Page,
  Inject,
  Search,
  Toolbar,
  Sort,
  Selection,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";

const Customers = () => {
  const editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
  };

  const toolbarOptions = ["Search", "Edit", "Update", "Delete"];

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        editSettings={editSettings}
        toolbar={toolbarOptions}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Sort, Filter, Page, Search, Toolbar, Edit, Selection]} />
      </GridComponent>
    </div>
  );
};

export default Customers;