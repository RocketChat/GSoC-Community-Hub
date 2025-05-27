import Keycloak from "keycloak-js";
import type { KeycloakInitOptions } from "keycloak-js";
import { browser } from "$app/environment";

//to be imported from $env/static\public
const KEYCLOAK_URL = import.meta.env.VITE_KEYCLOAK_URL;
const KEYCLOAK_CLIENT_ID = import.meta.env.VITE_KEYCLOAK_CLIENT_ID;
const KEYCLOAK_REALM = import.meta.env.VITE_KEYCLOAK_REALM;

export const keycloakInstance = $state<{ instance: Keycloak | null }>({ instance: null });

export const authenticated = $state<{ value: boolean }>({
	value: false
});

export async function initKeyCloak(){
  if(!browser) return { isAuthenticated: false }
  const config = {
    url: KEYCLOAK_URL,
    realm: KEYCLOAK_REALM,
    clientId: KEYCLOAK_CLIENT_ID
  };

  try{

    if(!keycloakInstance.instance){
      const keycloak = new Keycloak(config);
      const kcInitOpts: KeycloakInitOptions = { 
        onLoad: "login-required", 
        checkLoginIframe: false,
      };
  
      
      const isAuthenticated = await keycloak.init(kcInitOpts);
      keycloakInstance.instance = keycloak;
      authenticated.value = isAuthenticated;
  
      return {
        authenticated: isAuthenticated, keycloak: keycloak,
      };
    }
  } catch (error) {
		console.error('Keycloak Initialization Error:', error);
	}  
}
