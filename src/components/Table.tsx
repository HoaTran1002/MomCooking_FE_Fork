import React from "react";
export interface ColumnsProps {
  headerName?: string | null;
  field: string;
  type?: string;
  hidden?: boolean;
  getActions?: (params?: any) => JSX.Element[];
}
interface TableProps {
  columns: ColumnsProps[];
  rows: any[];
  numberItems?: number;
}
const Table = ({ columns, rows }: TableProps): JSX.Element => {
  return (
    <>
      <table className="min-w-full border-collapse border border-solid border-slate-500 font-medium overflow-hidden">
        <thead className=" border border-solid border-slate-500 rounded-tl-md rounded-tr-md">
          <tr className="bg-slate-700 text-white  ">
            {columns.map((r: ColumnsProps, index: number) => (
              <td
                key={index}
                className="border border-solid border-slate-600 px-2 py-4"
              >
                {r.headerName}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className=" border border-solid border-slate-500">
          {rows?.map((row, index: number) => (
            <tr
              key={index}
              className={`border transition-all duration-150 border-solid border-slate-600 px-2 py-4 border-b bg-white `}
            >
              {columns
                .filter((r) => !r.hidden)
                .map((column: any, columnIndex: number) => (
                  <td
                    key={columnIndex}
                    className="text-center border border-solid border-slate-600 px-2 py-4  align-middle"
                  >
                    {column.getActions &&
                    typeof column.getActions === "function" ? (
                      <React.Fragment key={columnIndex}>
                        {column
                          .getActions(row)
                          .map((action: any, actionIndex: any) => (
                            <span key={actionIndex}>
                              {React.isValidElement(action)
                                ? action
                                : String(action)}
                            </span>
                          ))}
                      </React.Fragment>
                    ) : (
                      row[column.field]
                    )}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
