"use server";

import { redirect } from "next/navigation";
import { getCurrentUser } from "../auth";
import { prisma } from "../prisma";
import { z } from "zod";

const ProductSchema = z.object({
  name: z.string().min(1),
  price: z.coerce.number().nonnegative(),
  quantity: z.coerce.number().int().min(0),
  sku: z.string().optional(),
  lowStockAt: z.coerce.number().int().min(0).optional(),
});

export async function createProduct(formData: FormData) {
  const user = await getCurrentUser();
  if (!user) throw new Error("User not authenticated");

  const parsed = ProductSchema.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    sku: formData.get("sku") || undefined,
    lowStockAt: formData.get("lowStockAt") || undefined,
  });

  if (!parsed.success) throw new Error("Validation failed");

  try {
    await prisma.product.create({
      data: {
        ...parsed.data,
        userId: user.id,
        sku: parsed.data.sku || undefined, // optional
      },
    });
    redirect("/inventory"); // NEXT_REDIRECT will be handled by Next
  } catch (err) {
    console.error(err);
    throw err; // keep original error for debugging
  }
}

export async function deleteProduct(formData: FormData) {
  const user = await getCurrentUser();
  const id = String(formData.get("id") || "");

  await prisma.product.deleteMany({
    where: { id: id, userId: user.id },
  });
}
