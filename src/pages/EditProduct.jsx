import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const EditProduct = () => {
  return (
    <div className="p-6">
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <a href="#" className="hover:underline">Dashboard</a>
        <span>/</span>
        <a href="#" className="hover:underline">Products</a>
        <span>/</span>
        <span>Edit Product</span>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pro Controller</h1>
        <span className="px-2 py-1 text-sm font-medium text-green-800 bg-green-100 rounded">In stock</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Gamer Gear Pro Controller" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisi nec nunc." />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Stock</CardTitle>
              <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                <Label>SKU</Label>
                <Label>Stock</Label>
                <Label>Price</Label>
                <Label>Size</Label>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <Input placeholder="GGPC-001" />
                <Input placeholder="100" />
                <Input placeholder="99,99" />
                <div className="flex space-x-2">
                  <Button variant="outline">S</Button>
                  <Button variant="outline">M</Button>
                  <Button variant="outline">L</Button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <Input placeholder="GGPC-002" />
                <Input placeholder="143" />
                <Input placeholder="99,99" />
                <div className="flex space-x-2">
                  <Button variant="outline">S</Button>
                  <Button variant="outline">M</Button>
                  <Button variant="outline">L</Button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <Input placeholder="GGPC-003" />
                <Input placeholder="32" />
                <Input placeholder="99,99" />
                <div className="flex space-x-2">
                  <Button variant="outline">S</Button>
                  <Button variant="outline">M</Button>
                  <Button variant="outline">L</Button>
                </div>
              </div>
              <Button variant="ghost" className="w-full">Add Variant</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product Category</CardTitle>
              <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="category1">Category 1</SelectItem>
                      <SelectItem value="category2">Category 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="subcategory">Subcategory (optional)</Label>
                  <Select>
                    <SelectTrigger id="subcategory">
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="subcategory1">Subcategory 1</SelectItem>
                      <SelectItem value="subcategory2">Subcategory 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Status</CardTitle>
              <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
              <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">+</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="w-full h-24 bg-gray-200 rounded-lg"></div>
                <div className="w-full h-24 bg-gray-200 rounded-lg"></div>
                <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">+</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Archive Product</CardTitle>
              <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive" className="w-full">Archive Product</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-6 flex justify-end space-x-4">
        <Button variant="outline">Discard</Button>
        <Button>Save Product</Button>
      </div>
    </div>
  );
};

export default EditProduct;