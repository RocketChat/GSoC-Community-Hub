import { initKeycloak } from '$lib/util/keycloakAuth';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	await initKeycloak();
	return {};
};