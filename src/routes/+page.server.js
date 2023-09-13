import { error } from '@sveltejs/kit'
import { createClient } from '$lib/prismicio'

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request })
	const response = await client.getSingle('homepage', { fetchLinks: ['member.uid', 'member.firstname', 'member.website', 'member.github'] })

	if (response) {
		return { page: response.data }
	}

	throw error(404, 'Not found')
}