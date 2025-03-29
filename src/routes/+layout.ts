import { initKeycloak } from '$lib/utils/keycloakAuth';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	await initKeycloak();
	return {};
};
