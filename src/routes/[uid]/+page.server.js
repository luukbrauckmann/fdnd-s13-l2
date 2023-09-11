import { error } from '@sveltejs/kit'
import { createClient } from '$lib/prismicio'

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const client = createClient();

	const response = await client.getByUID('page', params.uid)

	if (response) return response

	error(404, 'Page not found')
}