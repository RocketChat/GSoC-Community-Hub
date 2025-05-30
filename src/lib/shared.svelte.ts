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


//setter functions for shared state 
export async function setAuthenticated(value: boolean) {
  authenticated.value = value;
}

export async function setKeyCloakInstance(value: Keycloak){
  keycloakInstance.instance = value;
}