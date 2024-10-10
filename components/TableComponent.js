import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import Select from "react-select";
import { CSVLink } from "react-csv";
import {
  MagnifyingGlassIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

const formatDate = (date) => {
  if (!(date instanceof Date)) return "";
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const TableComponent = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: "Order ID", accessor: "orderId" },
      { Header: "Category", accessor: "category" },
      {
        Header: "Arrival Time",
        accessor: "arrivalTime",
        sortType: (a, b) => a.original.arrivalTime - b.original.arrivalTime,
      },
      {
        Header: "Weight",
        accessor: "weight",
        sortType: (a, b) =>
          parseFloat(a.original.weight) - parseFloat(b.original.weight),
      },
      {
        Header: "Route",
        accessor: "route",
      },
      {
        Header: "Fee",
        accessor: "fee",
        sortType: (a, b) =>
          parseFloat(a.original.fee.replace(/[^0-9.-]+/g, "")) -
          parseFloat(b.original.fee.replace(/[^0-9.-]+/g, "")),
      },
      { Header: "Status", accessor: "status" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const { globalFilter } = state;

  const categoryOptions = [
    { value: "Electronic", label: "Electronic" },
    { value: "Furniture", label: "Furniture" },
    { value: "Clothing", label: "Clothing" },
  ];

  const handleSearch = (e) => {
    setGlobalFilter(e.target.value || undefined);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Shipping":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="p-6 bg-white mt-8 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Tracking Order</div>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              className="border border-gray-300 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Search..."
              value={globalFilter || ""}
              onChange={handleSearch}
            />
          </div>
          <div className="relative">
            <Select
              options={categoryOptions}
              placeholder="Filter"
              classNamePrefix="react-select"
              className="pl-10 w-56 border-gray-300 rounded-md"
              onChange={(selectedOption) =>
                setGlobalFilter(
                  selectedOption ? selectedOption.value : undefined
                )
              }
            />
          </div>
          <CSVLink
            data={data}
            headers={columns.map((col) => ({
              label: col.Header,
              key: col.accessor,
            }))}
            filename="orders_export.csv"
            className="border border-gray-300 px-4 py-2 rounded-md flex items-center"
          >
            <ArrowDownTrayIcon className="w-5 h-5 mr-2 rotate-180" />
            Export
          </CSVLink>
        </div>
      </div>

      <table {...getTableProps()} className="w-full border-collapse">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="bg-gray-50 text-left"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-4 py-3 text-sm font-medium text-gray-600 border-b cursor-pointer"
                >
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100">
                {row.cells.map((cell) => {
                  if (cell.column.id === "arrivalTime") {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-4 py-3 border-b text-sm text-gray-600"
                      >
                        {formatDate(cell.value)}
                      </td>
                    );
                  }
                  if (cell.column.id === "status") {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-4 py-3 border-b text-sm"
                      >
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                            cell.value
                          )}`}
                        >
                          {cell.render("Cell")}
                        </span>
                      </td>
                    );
                  }
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-3 border-b text-sm text-gray-600"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
