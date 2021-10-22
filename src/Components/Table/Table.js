import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <div className="table p-4">
      <div>
        <span>Data Table</span>
        <button>
          <span> Filter</span>
        </button>
      </div>
      <div className="table-main mx-auto">
        <div className="table-head">
          <div>
            <span>Employee's ID</span>
            <span>Full Name</span>
            <span>Department</span>
          </div>
        </div>
        <div className="table-body">
          <div>
            <span>A93828SF</span>
            <span>Helen Paul</span>
            <span>Human Resource</span>
          </div>
          <div>
            <span>A93828SF</span>
            <span>Jack Allen</span>
            <span>Finance</span>
          </div>
          <div>
            <span>A93828SF</span>
            <span>Helen Paul</span>
            <span>Human Resource</span>
          </div>
          <div>
            <span>A93828SF</span>
            <span>Jack Allen</span>
            <span>Finance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
