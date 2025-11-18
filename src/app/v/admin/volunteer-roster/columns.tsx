"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface Volunteer {
  _id: string;
  contact_person_name: string;
  contact_email: string;
  contact_phone: number | string;
  zip_code: string;
}

export const columns: ColumnDef<Volunteer>[] = [
  {
    accessorKey: "contact_person_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Contact Person
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "contact_email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "contact_phone",
    header: "Phone",
    cell: ({ row }) => {
      const phone = row.getValue("contact_phone");
      return <div>{String(phone)}</div>;
    },
  },
  {
    accessorKey: "zip_code",
    header: "Zip Code",
  },
]

