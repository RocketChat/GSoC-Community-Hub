import Keycloak from "keycloak-js";
import type { KeycloakInitOptions } from "keycloak-js";
import { browser } from "$app/environment";
import { authenticated, keycloakInstance } from "$lib/shared.svelte";


const KEYCLOAK_URL = import.meta.env.VITE_KEYCLOAK_URL;
const KEYCLOAK_CLIENT_ID = import.meta.env.VITE_KEYCLOAK_CLIENT_ID;
const KEYCLOAK_REALM = import.meta.env.VITE_KEYCLOAK_REALM;



export async function initKeycloak(){
  //if app is not running in the browser, set authenticated to false
  let isAuthenticated :boolean = false;
  if(!browser) return isAuthenticated;
  
  const config = {
    url: KEYCLOAK_URL,
    realm: KEYCLOAK_REALM,
    clientId: KEYCLOAK_CLIENT_ID
  };
    const keycloak = new Keycloak(config);
    keycloak.onAuthSuccess = () => {
        isAuthenticated = true;
        keycloakInstance.instance = keycloak;
        authenticated.value = true;

        //if auth is successful, clear params from url fragment.
        const url = new URL(window.location.toString());
          const params = ['code', 'state', 'session_state'];
          
          let hasParams;
          params.forEach(param => {
              if (url.searchParams.has(param)) {
                  url.searchParams.delete(param);
                  hasParams = true;
              }
          });
      }
      const kcInitOpts: KeycloakInitOptions = { 
        onLoad: "login-required",
				checkLoginIframe: false,
      };
      
      keycloak.init(kcInitOpts);
    }


