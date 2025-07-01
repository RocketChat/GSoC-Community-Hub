import Keycloak from "keycloak-js";
import { browser } from "$app/environment";
import type { KeycloakInitOptions } from "keycloak-js";
import { keycloakInstance, authenticated } from "$lib/shared.svelte";
import { PUBLIC_KEYCLOAK_URL, PUBLIC_KEYCLOAK_REALM, PUBLIC_KEYCLOAK_CLIENT_ID } from "$env/static/public"

export async function initKeycloak(){
  //if app is not running in the browser, set auth to false
    if(!browser){
      authenticated.value = false;
      return;
    }
    try{
      const config = {
        url: PUBLIC_KEYCLOAK_URL,
        realm: PUBLIC_KEYCLOAK_REALM,
        clientId: PUBLIC_KEYCLOAK_CLIENT_ID,
      };
      const keycloak = new Keycloak(config);
      const kcInitOptions : KeycloakInitOptions = {
        onLoad: "login-required",
        checkLoginIframe : false,
      }
      keycloak.onAuthSuccess = () => {
        keycloakInstance.instance = keycloak;
        authenticated.value = true; 
      }
      keycloak.onAuthSuccess();
      keycloak.init(kcInitOptions);         
    }catch(e){
      console.log("Keycloak iniialialization error:", e);
    }
}