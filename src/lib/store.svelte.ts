import Keycloak from 'keycloak-js';

export const user = $state<{ email: string | null; role: string | null; avatar: string }>({
	email: null,
	role: null,
	avatar: 'defaultPic.png'
});

export const keycloakInstance = $state<{ instance: Keycloak | null }>({ instance: null });

export const authenticated = $state<{ value: boolean }>({
	value: false
});
