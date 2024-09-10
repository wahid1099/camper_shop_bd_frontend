import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { TProduct } from "@/types";
import { toast } from "sonner";
import productApis from "@/redux/features/ProductSlice/ProductsApi";

interface UpdateProductProps {
  product: TProduct;
  open: boolean;
  onClose: () => void;
}

const UpdateProduct: React.FC<UpdateProductProps> = ({
  product,
  open,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TProduct>({
    defaultValues: product,
  });

  const [updateProduct, { isLoading, isSuccess }] =
    productApis.useUpdateProductMutation();

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess, onClose]);

  useEffect(() => {
    if (open) {
      reset(product);
    }
  }, [open, product, reset]);

  const onSubmit = (data: TProduct) => {
    data.price = parseFloat(data.price.toString());
    data.stock = parseFloat(data.stock.toString());
    data.rating = parseFloat(data.rating.toString());
    updateProduct({ productId: product._id, data })
      .unwrap()
      .then(() => {
        toast.success("Product Updated Successfully!", {
          position: "top-right",
        });
      })
      .catch((error) => {
        toast.error(`Failed to update product: ${error.message}`);
      });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>
            Make changes to your product here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="col-span-3"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              {...register("price", { required: "Price is required" })}
              className="col-span-3"
            />
            {errors.price && (
              <span className="text-red-500">{errors.price.message}</span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Input
              id="category"
              {...register("category")}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              {...register("description")}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stock" className="text-right">
              Stock
            </Label>
            <Input
              id="stock"
              type="number"
              {...register("stock", { required: "Stock is required" })}
              className="col-span-3"
            />
            {errors.stock && (
              <span className="text-red-500">{errors.stock.message}</span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right">
              Rating
            </Label>
            <Input
              id="rating"
              type="number"
              step="0.1"
              {...register("rating", {
                required: "Rating is required",
                min: { value: 0, message: "Rating must be at least 0" },
                max: { value: 5, message: "Rating must be at most 5" },
              })}
              className="col-span-3"
            />
            {errors.rating && (
              <span className="text-red-500">{errors.rating.message}</span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="imageUrl" className="text-right">
              Image URL
            </Label>
            <Input
              id="imageUrl"
              {...register("image")}
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProduct;
