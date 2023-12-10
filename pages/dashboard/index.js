import CreatePost from "@components/dash/modules/createpost";
import Analytics from "@components/dash/modules/analytics";
import Posts from "@components/dash/modules/posts";
import Layout from "@components/dash/layout";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]";

export async function getServerSideProps (context){
  const session = await getServerSession(context.req, context.res, nextAuthOptions);

  if (!session) {
    return {
      redirect: {
       
      },
    }
  }


  return {
    props: {
      user:{
        email:session.user.email,
      },
    },
  };

}

export default function Dashboard(props) {

      const Dashboard = ()=> { return (
        <>
            {/* <CreatePost /> */}
            {/* <Posts />
            <Posts />
            <Posts /> */}
            <div className="row">
              <Analytics title="Total Vehicles" count="3" />
              <Analytics title="Alerts" count="3" />
            </div>
                      
        </>
      )
    }

    return (
      <>
        <Layout  childComponent = { <Dashboard /> } />
      </>
    )
}

Dashboard.auth = true;



