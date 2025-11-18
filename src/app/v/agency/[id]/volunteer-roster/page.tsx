"use client";

import { getAllVolunteers } from "@/services/api";
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
import { columns, Volunteer } from "./columns";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function VolunteerRosterPage() {
  const router = useRouter();
  const [data, setData] = React.useState<Volunteer[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  React.useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        setLoading(true);
        const response = await getAllVolunteers();
        // Handle both array response and object with volunteers property
        const volunteers = Array.isArray(response) ? response : (response.volunteers || []);
        setData(volunteers);
      } catch (error) {
        console.error("Error fetching volunteers:", error);
        toast.error("Failed to fetch volunteers");
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading volunteers...</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-20">
      <div className="w-full max-w-9xl">
        <div className="bg-white p-6 rounded-xl mx-auto max-w-9xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <h2 className="text-3xl font-bold">Volunteer Roster</h2>
            <Input
              placeholder="Search by email..."
              value={(table.getColumn("contact_email")?.getFilterValue() as string) || ""}
              onChange={(event) =>
                table.getColumn("contact_email")?.setFilterValue(event.target.value)
              }
              className="max-w-md w-full rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm py-2 px-4"
            />
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
                      className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
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
                      No volunteers found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-600">
              Showing {table.getRowModel().rows.length} of {data.length} volunteer(s)
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
      </div>
    </div>
  );
}

