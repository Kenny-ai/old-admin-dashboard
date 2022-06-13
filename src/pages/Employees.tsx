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
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";

const Employees = () => {

  const editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
  };

  const toolbarOptions = ["Search", "Edit", "Update"];

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        editSettings={editSettings}
        toolbar={toolbarOptions}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Sort,
            Filter,
            Page,
            Search,
            Toolbar,
            Edit,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
