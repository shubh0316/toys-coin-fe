"use client";

import { getAgencies } from "@/services/api";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

interface Agency {
  _id: string;
  organization_name: string;
  contact_email: string;
  contact_person_name: string;
  contact_phone: string;
  state: string;
  zip_code: string;
  status: string;
}
async function getData(): Promise<Agency[]> {
  try {
    const response = await getAgencies();
    return response.agencies || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
export default function DemoPage() {
  const [data, setData] = React.useState<Agency[]>([]);
  const [statusFilter, setStatusFilter] = React.useState<string | null>(null);

  React.useEffect(() => {
    getData().then(setData);
  }, []);

  const filteredData = statusFilter
    ? data.filter((agency) => agency.status.toLowerCase() === statusFilter)
    : data;

  return (
    <div className="flex justify-center mt-20">
      <div className="w-full max-w-9xl">  
        <DataTable 
          columns={columns} 
          data={filteredData} 
          statusFilter={statusFilter} 
          setStatusFilter={setStatusFilter} 
        />
      </div>
    </div>
  );
}
const columns: ColumnDef<Agency>[] = [
  { accessorKey: "organization_name", header: "Organization Name" },
  { accessorKey: "contact_email", header: "Email" },
  { accessorKey: "contact_person_name", header: "Contact Person" },
  { accessorKey: "contact_phone", header: "Phone" },
  { accessorKey: "state", header: "State" },
  { accessorKey: "zip_code", header: "Zip Code" },
  { accessorKey: "status", header: "Status" },
  // {
  //   id: "actions",
  //   header: "Actions",
  //   cell: ({ row }) => (
  //     <DropdownMenu>
  //       <DropdownMenuTrigger asChild>
  //         <button 
  //           className="p-1 hover:bg-gray-100 rounded-full transition-colors"
  //           onClick={(e) => e.stopPropagation()}
  //         >
  //           <span className="text-gray-600 hover:text-gray-900 text-lg">⋯</span>
  //         </button>
  //       </DropdownMenuTrigger>
  //       <DropdownMenuContent 
  //         align="end"
  //         className="rounded-lg shadow-lg border border-gray-100 py-1 min-w-[120px]"
  //       >
  //         <DropdownMenuCheckboxItem className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm">
  //           Edit
  //         </DropdownMenuCheckboxItem>
  //         <DropdownMenuCheckboxItem className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-red-600">
  //           Delete
  //         </DropdownMenuCheckboxItem>
  //       </DropdownMenuContent>
  //     </DropdownMenu>
  //   ),
  // },
];

function DataTable<TData, TValue>({
  columns,
  data,
  statusFilter,
  setStatusFilter,
}: {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  statusFilter: string | null;
  setStatusFilter: (status: string | null) => void;
}) {
  const router = useRouter();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: { sorting, columnFilters, columnVisibility, rowSelection },
  });

  return (
    <div className="bg-white p-6 rounded-xl mx-auto max-w-9xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <Input
          placeholder="Search organizations..."
          value={(table.getColumn("organization_name")?.getFilterValue() as string) || ""}
          onChange={(event) =>
            table.getColumn("organization_name")?.setFilterValue(event.target.value)
          }
          className="max-w-md w-full rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm py-2 px-4"
        />
        <div className="flex flex-wrap gap-1">
          {["pending", "review", "active", "paused"].map((status) => (
            <Button
              key={status}
              variant={statusFilter === status ? "default" : "outline"}
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition-colors ${
                statusFilter === status 
                  ? 'bg-gray-200 text-black hover:bg-gray-200 shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-100 border-gray-200'
              }`}
              onClick={() => setStatusFilter(statusFilter === status ? null : status)}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="rounded-lg border border-gray-100 overflow-hidden">
        <Table className="border-collapse w-full">
          <TableHeader className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => (
                  <TableHead 
                    key={header.id}
                    className="px-6 py-4 text-sm font-semibold text-gray-700 border-b border-gray-200"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow 
                  key={row.id} 
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer"
                  onClick={() => router.push(`/v/admin/agency/${(row.original as Agency)._id}/account`)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell 
                      key={cell.id}
                      className="px-6 py-4 text-sm text-gray-600"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell 
                  colSpan={columns.length} 
                  className="h-24 text-center text-gray-500 py-8"
                >
                  No agencies found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-gray-600 border-gray-200 hover:bg-gray-100"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-gray-600 border-gray-200 hover:bg-gray-100"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}