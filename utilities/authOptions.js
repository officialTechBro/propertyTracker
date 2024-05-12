import GithubProvider from "next-auth/providers/google"

export const authOpations = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
        })
      ],
      callbacks: {
        // Invoke on succesful signin
        async signIn({ profile }) {
        //   if (account.provider === "google") {
        //     return profile.email_verified && profile.email.endsWith("@example.com")
        //   }
        //   return true // Do different verification for other providers that don't have `email_verified`
        },

        // Modifies the session object
        async session({session}) {

        }
      }
}