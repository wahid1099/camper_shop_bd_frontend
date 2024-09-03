import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import productApis from "@/redux/features/ProductSlice/ProductsApi";
import { TProduct } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BiAddToQueue } from "react-icons/bi";

import { Input } from "@/components/ui/input";

const AddProduct = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TProduct>();

  const [addProduct, { isLoading }] = productApis.useAddProductMutation();

  const onSubmit = (data: TProduct) => {
    data.price = parseFloat(data.price.toString());
    data.stock = parseFloat(data.stock.toString());
    data.rating = parseFloat(data.rating.toString());

    console.log(data);

    addProduct(data)
      .unwrap()
      .then(() => {
        toast.success("Product Created Successfully!", {
          position: "top-center",
        });
        setOpen(false);
        reset();
      })
      .catch((error) => {
        toast.error(`Failed to create product: ${error.message}`);
      });
  };
  return (
    <div>
      {" "}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="bg-violet-900 mb-4 text-white py-2 px-6 rounded-md border border-dark hover:bg-violet-700 hover:text-dark transition duration-300 flex items-center space-x-2">
            <BiAddToQueue /> <span>Add New Product</span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Product</DialogTitle>
            <DialogDescription>
              Fill out the form below to add a new product.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-left">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Type product name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm block text-center">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <Label htmlFor="price" className="text-left">
                  Price
                </Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  placeholder="write price"
                  {...register("price", { required: "Price is required" })}
                />
                {errors.price && (
                  <span className="text-red-500 text-sm block text-center">
                    {errors.price.message}
                  </span>
                )}
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <Label htmlFor="category" className="text-left">
                  Category
                </Label>
                <Input
                  id="category"
                  placeholder="Select category"
                  {...register("category", {
                    required: "Category is required",
                  })}
                />
                {errors.category && (
                  <span className="text-red-500 text-sm block text-center">
                    {errors.category.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description" className="text-left">
                Product Description
              </Label>
              <Input
                id="description"
                placeholder="Write product description here"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              {errors.description && (
                <span className="text-red-500 text-sm block text-center">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="stock" className="text-left">
                Stock
              </Label>
              <Input
                id="stock"
                type="number"
                placeholder="Enter stock quantity"
                {...register("stock", { required: "Stock is required" })}
              />
              {errors.stock && (
                <span className="text-red-500 text-sm block text-center">
                  {errors.stock.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="rating" className="text-left">
                Rating
              </Label>
              <Input
                id="rating"
                type="number"
                step="0.1"
                placeholder="Enter product rating"
                {...register("rating")}
              />
              {errors.rating && (
                <span className="text-red-500 text-sm block text-center">
                  {errors.rating.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="imageUrl" className="text-left">
                Image URL
              </Label>
              <Input
                id="imageUrl"
                placeholder="Enter image URL"
                {...register("image", { required: "Image URL is required" })}
              />
              {errors.image && (
                <span className="text-red-500 text-sm block text-center">
                  {errors.image.message}
                </span>
              )}
            </div>
            <DialogFooter className="mt-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Adding..." : "Add new product"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProduct;
