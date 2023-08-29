"use server";

import { RedirectType } from "next/dist/client/components/redirect";
import { createOption, deleteOption } from "../services/options";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const resetCache = async () => {
	const path = "/options";
	revalidatePath(path);
	redirect(path, RedirectType.push);
};

export default async function handleSubmit(
	description: string,
	isExpense: boolean
) {
	await createOption({ description, expense: isExpense });
	await resetCache();
}

export async function handleDelete(id: number) {
	await deleteOption(id);
	await resetCache();
}
