import NextAuth from "next-auth"
//import Providers from "next-auth/providers"
//import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"


export default NextAuth({
    cookie: {
        secure: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
    },
     session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60
    },
    providers:[
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
           
            async authorize(credentials, req) {
              // You need to provide your own logic here that takes the credentials
              // submitted and returns either a object representing a user or value
              // that is false/null if the credentials are invalid.
              // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
              // You can also use the `req` object to obtain additional parameters
              // (i.e., the request IP address)
             
              const payload = {
                email:credentials.email,
                password:credentials.password
              }
                //return false;
              const res = await fetch("http://localhost:3000/api/login", {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: { "Content-Type": "application/json" }
              })

              const user = await res.json()
        
              console.log(user);
              // If no error and we have user data, return it
              if (res.ok && user) {
                return user
              }
              // Return null if user data could not be retrieved
              return null
            },
            callbacks: {
                jwt: async ({ token, user }) => {
                    console.log("jwt:")
                    console.log(user)
                  if (user) {
                    token.email = user.data.auth.email;
                    token.username = user.data.auth.userName;
                    token.user_type = user.data.auth.userType;
                    token.accessToken = user.data.auth.token;
                  }
            
                  return token;
                },
                session: ({ session, token, user }) => {
                    console.log("Session:")
                    console.log(session)
                  if (token) {
                    session.user.email = token.email;
                    session.user.username = token.userName;
                    session.user.accessToken = token.accessToken;
                  }
                  return session;
                },
              },
        }),

    ]
})