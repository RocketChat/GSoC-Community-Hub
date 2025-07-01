import Keycloak from 'keycloak-js';

export const user = $state<{ name: string | undefined | null; email: string | null; role: string | null; avatar: string | null }>({
	name: null,
	email: null,
	role: null,
	avatar: 'defaultPic.png'
});

export const keycloakInstance = $state<{ instance: Keycloak | null }>({ instance: null });

export const authenticated = $state<{ value: boolean }>({
	value: false																						
});
