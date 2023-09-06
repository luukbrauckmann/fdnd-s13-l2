import { createClient } from '$lib/prismicio';

export const prerender = true;

export async function load() {
	const client = createClient();
	const { data } = await client.getByUID('page', "main");
	return { page: data }
}