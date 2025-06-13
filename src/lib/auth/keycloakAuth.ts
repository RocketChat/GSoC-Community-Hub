import Keycloak from "keycloak-js";
import { browser } from "$app/environment";
import type { KeycloakInitOptions } from "keycloak-js";
import { user, keycloakInstance, authenticated } from "$lib/shared.svelte";


const KEYCLOAK_URL = import.meta.env.VITE_KEYCLOAK_URL;
const KEYCLOAK_REALM = import.meta.env.VITE_KEYCLOAK_REALM;
const KEYCLOAK_CLIENT_ID = import.meta.env.VITE_KEYCLOAK_CLIENT_ID;
const KEYCLOAK_USERNAME = import.meta.env.VITE_KEYCLOAK_USERNAME;

export async function initKeycloak(){
  let isAuthenticated : boolean = false;
  //if app is not running in the browser, set auth to false
    if(!browser){
      authenticated.value = isAuthenticated;
      return;
    }

    const config = {
      url: KEYCLOAK_URL,
      realm: KEYCLOAK_REALM,
      clientId: KEYCLOAK_CLIENT_ID,
    };
    if(!authenticated.value){
      const keycloak = new Keycloak(config);
      const kcInitOptions : KeycloakInitOptions = {
        onLoad: "login-required",
        checkLoginIframe : false,
      }
  
      isAuthenticated = await keycloak.init(kcInitOptions);
      console.log(isAuthenticated);
      if(isAuthenticated){
        user.name = keycloak.tokenParsed?.preferred_username;
        if(user. name === KEYCLOAK_USERNAME){
          keycloakInstance.instance = keycloak;
          authenticated.value = isAuthenticated;  
        }      
      }
    }
}