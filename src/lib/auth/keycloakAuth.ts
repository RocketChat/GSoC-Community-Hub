import Keycloak from "keycloak-js";
import type { KeycloakInitOptions } from "keycloak-js";
import { browser } from "$app/environment";
import { setAuthenticated, setKeyCloakInstance } from "$lib/shared.svelte";


const KEYCLOAK_URL = import.meta.env.VITE_KEYCLOAK_URL;
const KEYCLOAK_CLIENT_ID = import.meta.env.VITE_KEYCLOAK_CLIENT_ID;
const KEYCLOAK_REALM = import.meta.env.VITE_KEYCLOAK_REALM;


export async function initKeycloak(){
  const isAuthenticated : boolean = true;
  //if app is not running in the browser, set authenticated to false
  try{
    if(!browser) return !isAuthenticated;
    
    const config = {
      url: KEYCLOAK_URL,
      realm: KEYCLOAK_REALM,
      clientId: KEYCLOAK_CLIENT_ID
    };
    const keycloak = new Keycloak(config);
    setAuthenticated(isAuthenticated);
    setKeyCloakInstance(keycloak);
    keycloak.onAuthSuccess = () => {
      // isAuthenticated = true;
      //Clean up params from url fragment.
  //    const href = location.href 
  //      .replace(/[&\?]code=[^&\$]*/, '') 
  //      .replace(/[&\?]scope=[^&\$]*/, '') 
  //      .replace(/[&\?]state=[^&\$]*/, '') 
  //      .replace(/[&\?]session_state=[^&\$]*/, ''); 
    
  //    history.replaceState(null, window.name, href); 
  //  } 
  }
    const kcInitOpts: KeycloakInitOptions = { 
      onLoad: "login-required",
      checkLoginIframe: false,
    };
    keycloak.init(kcInitOpts); 
  }catch(error){
  console.error("Keycloak Initialization error:", error);
  }
}