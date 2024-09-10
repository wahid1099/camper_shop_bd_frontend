import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  CellContext,
} from "@tanstack/react-table";
import { ProductListProps } from "@/types";
import { BiEdit, BiTrash } from "react-icons/bi";
import Swal from "sweetalert2";
import productApis from "@/redux/features/ProductSlice/ProductsApi";
import UpdateProduct from "./UpdateProduct";
import { TProduct } from "@/types";

// interface Product {
//   _id?: string;
//   name: string;
//   price: number;
//   category: string;
//   description: string;
//   stock: number;
//   rating: number;
//   image?: string;
//   delay: string;
// }

const ProductList = ({ product }: ProductListProps) => {
  const [deleteProductMutation] = productApis.useDeleteProductMutation();
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  //const [productData, setProductData] = useState<Product[]>(products);

  // useEffect(() => {
  //   if (isUpdateModalOpen === false && selectedProduct) {
  //     fetchProducts(); // Re-fetch data after update
  //   }
  // }, [isUpdateModalOpen, selectedProduct, fetchProducts]);

  const columns = React.useMemo(
    () => [
      {
        header: "Image",
        accessorKey: "image",
        cell: ({ row }: CellContext<TProduct, unknown>) => (
          <img
            src={row.original.image}
            alt={row.original.name}
            className="w-16 h-16 object-cover rounded"
          />
        ),
      },
      {
        header: "Name",
        accessorKey: "name",
        cell: ({ getValue }: CellContext<TProduct, string>) => (
          <div className="p-2">{getValue()}</div>
        ),
      },
      {
        header: "Price",
        accessorKey: "price",
        cell: ({ getValue }: CellContext<TProduct, number>) => (
          <div className="p-2">{getValue()} TK</div>
        ),
      },
      {
        header: "Category",
        accessorKey: "category",
        cell: ({ getValue }: CellContext<TProduct, string>) => (
          <div className="p-2">{getValue()}</div>
        ),
      },
      {
        header: "Stock",
        accessorKey: "stock",
        cell: ({ getValue }: CellContext<TProduct, number>) => (
          <div className="p-2">{getValue()}</div>
        ),
      },
      {
        header: "Actions",
        accessorKey: "actions",
        cell: ({ row }: CellContext<TProduct, unknown>) => (
          <div className="flex space-x-2 p-2">
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => {
                setSelectedProduct(row.original);
                setIsUpdateModalOpen(true);
              }}
            >
              <BiEdit size={20} />
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDelete(row.original)}
            >
              <BiTrash size={20} />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const handleDelete = async (product: TProduct) => {
    const productId = product._id;

    if (typeof productId !== "string") {
      console.error("Product ID is invalid");
      Swal.fire({
        title: "Error",
        text: "Invalid product ID.",
        icon: "error",
      });
      return;
    }
    // Show confirmation alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProductMutation(productId);
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting product:", error);
          Swal.fire({
            title: "Error!",
            text: "There was a problem deleting the product.",
            icon: "error",
          });
        }
      }
    });
  };

  const table = useReactTable({
    data: product,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full divide-y divide-gray-200 border">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-2 border text-left font-semibold"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted()
                    ? header.column.getIsSorted() === "asc"
                      ? " 🔼"
                      : " 🔽"
                    : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2 border">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-4">
        <button
          className="p-2 border rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <span className="p-2">
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <button
          className="p-2 border rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>

      {/* Conditionally render the UpdateProduct modal */}
      {isUpdateModalOpen && selectedProduct && (
        <UpdateProduct
          product={selectedProduct}
          open={isUpdateModalOpen}
          onClose={() => {
            setIsUpdateModalOpen(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </div>
  );
};

// Component to truncate and expand text
// const TruncatedText = ({
//   text,
//   maxLength,
// }: {
//   text: string;
//   maxLength: number;
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   if (text.length <= maxLength) {
//     return <div className="p-2 border">{text}</div>;
//   }

//   return (
//     <div className="p-2 border">
//       {isExpanded ? text : `${text.substring(0, maxLength)}...`}
//       <button
//         className="ml-2 text-blue-500 hover:text-blue-700 text-sm"
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         {isExpanded ? "Show Less" : "Show More"}
//       </button>
//     </div>
//   );
// };

export default ProductList;
