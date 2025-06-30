import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'

import { ChevronDown, Settings2 } from 'lucide-react'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Input } from '../ui/input'
import DataTablePagination from './DataTablePagination'

const DataTable = ({ columns, data, pagination, setPagination, pageCount, sorting, setSorting,
  rowSelection, setRowSelection,
  globalFilter, setGlobalFilter,
  className = {},
  maxHeight = ''
}) => {
  // const [sorting, setSorting] = useState()
  const { table: tableClass } = className;

  const table = useReactTable({
    data,
    columns,
    pageCount,
    // manualPagination: true,
    // manualSorting: true,
    // manualFiltering: true,
    // enableGlobalFilter: true,
    // enableMultiRowSelection: true,
    // enableRowSelection: true,
    state: {
      pagination,
      sorting,
      globalFilter,
      // rowSelection: getRowSelectionState(),
      rowSelection,
    },
    getRowId: (row) => row.id.toString(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    // onRowSelectionChange: onRowSelectionChange,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const selectedData = table.getSelectedRowModel().rows.map(row => row.original);

  console.log(rowSelection);


  return (
    <div className='flex flex-col gap-4 overflow-auto'>
      <div className="flex items-center px-4 pt-4">
        <Input
          placeholder="Filter header..."
          value={table.getColumn("header")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("header")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <Settings2 /> Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden border">
        <Table className={tableClass} maxHeight={maxHeight}>
          <TableHeader className="bg-muted sticky top-0 z-10">
            {table.getHeaderGroups()?.map((headerGroup) => (
              <TableRow key={headerGroup?.id}>
                {headerGroup?.headers?.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan} className="first:px-3.5">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="first:px-3.5">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns?.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} className={{ wrapper: 'px-4 mb-4' }} />
    </div>
  )
}

export default DataTable