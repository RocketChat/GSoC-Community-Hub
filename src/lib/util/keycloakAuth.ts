import Keycloak from 'keycloak-js';
import {
	PUBLIC_KEYCLOAK_URL,
	PUBLIC_KEYCLOAK_CLIENT_ID,
	PUBLIC_KEYCLOAK_REALM
} from '$env/static/public';
import { authenticated, keycloakInstance, user } from '$lib/store.svelte';
import { browser } from '$app/environment';


interface KeycloakConfig {
	url: string;
	realm: string;
	clientId: string;
}


const keycloakConfig: KeycloakConfig = {
	url: PUBLIC_KEYCLOAK_URL,
	realm: PUBLIC_KEYCLOAK_REALM,
	clientId: PUBLIC_KEYCLOAK_CLIENT_ID
};
/**
 * Initializes Keycloak authentication.
 * - If already initialized, it reuses the existing instance.
 * - Otherwise, it creates a new instance and attempts authentication.
 * @returns An object containing authentication status and the Keycloak instance.
 */
export async function initKeycloak() {
	if (!browser) return { isAuthenticated: false };
	let keyCloak: Keycloak | null = null;
	try {

		if (!keycloakInstance.instance) {
			// Create a new Keycloak instance with the provided configuration
			keyCloak = new Keycloak(keycloakConfig);
			const isAuthenticated = await keyCloak.init({
				onLoad: 'check-sso',
				silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
				checkLoginIframe: false
			});
			keycloakInstance.instance = keyCloak;
			authenticated.value = isAuthenticated;
			user.email = keyCloak.tokenParsed?.email;
			user.role = keyCloak.tokenParsed?.realm_access?.roles[0] === 'admin' ? 'admin' : 'user';

			return { isAuthenticated: authenticated, keycloak: keyCloak };
		}
	} catch (error) {
		console.error('Keycloak Initialization Error:', error);
	}
}