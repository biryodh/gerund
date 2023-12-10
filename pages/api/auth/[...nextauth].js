import NextAuth, { getServerSession } from "next-auth"
//import Providers from "next-auth/providers"
//import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import { isUserExist, createUser, getUserByEmail } from "models/userModel";
import {connectMongo} from "lib/middlewares/mongodb";
import { passwordVerify } from "@helperFunctions/password";
import bcrypt from 'bcryptjs';


export const nextAuthOptions = {
  cookie: {
      secure: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
  },
   session: {
      jwt: true,
      maxAge: 30 * 24 * 60 * 60
  },
  pages: {
    signIn: '/signin',
    signOut: '/signin'
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
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
            let payLoad = {};
          
              /* Using API */
              //return false;
              // const res = await fetch("http://localhost:3000/api/login", {
              //   method: 'POST',
              //   body: JSON.stringify(payload),
              //   headers: { "Content-Type": "application/json" }
              // })

            /* Using Moogoose */
            await connectMongo();

            const user = await getUserByEmail(payload.email);
            
            if (!!user && await passwordVerify(credentials.password ,user.password)) {
              return {
                email:user.email,
                name:user.fname,
                role:user.role,
                isactive:user.isactive,
                id:user._id,
                picture:user.picture                
              };
            }
            return null;
          },
        
      }),

  ],
  callbacks: {
    signIn : async ({ user, account, profile, email, credentials })=> {
     
      if(account.provider == 'google'){
          let data = {
            fname: profile.given_name,
            lname: profile.family_name,
            email: profile.email,
            password: "",
            socialid:user.id,
            socialsite:account.provider,
            picture:user.image,
            verification_token:null,
            isactive:profile.email_verified
          }

          await connectMongo();
          const isUser = await isUserExist({email:user.email});
          if(isUser){
            return true;
          }else{
            const user = await createUser(data);
            return !!user;
          }
      }else{
        return true;
      }
    },
    redirect:async ({ url, baseUrl }) =>{
      return baseUrl
    },
    jwt: async ({token,user}) => {
      
      if (user) {
        token.email = user.email;
        token.username = user.name;
        token.role = user.role;
        token.picture = user.picture;
        token.accessToken = user.id;
      }
      return token;
    },
    session: ({ session, token, user }) => {
      
      if (token) {
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.role = token.role?token.role:null;
        session.user.accessToken = token.accessToken;
        session.user.picture = token.picture
      }
      return session;
    },
  },
}

export default NextAuth(nextAuthOptions);


export const getSessionAuth = (req, res)=>{
  const session = getServerSession(req, res, nextAuthOptions);
  return session;
}