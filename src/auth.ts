import { SvelteKitAuth } from "@auth/sveltekit"
import keycloak from "@auth/sveltekit/providers/keycloak"
 
export const { handle, signIn } = SvelteKitAuth({
  providers: [keycloak],
});