import CreatePost from "@components/dash/modules/createpost";
import Posts from "@components/dash/modules/posts";
import Layout from "@components/dash/layout";


export default function Dashboard(props) {
//  const { profile , baseApiUrl} = props;



      const Dashboard = ()=> { return (
        <>
                        <CreatePost />
                        <Posts />
                        <Posts />
                        <Posts />
                      
        </>
      )
    }

    return (
      <>
        <Layout  childComponent = { <Dashboard /> } />
      </>
    )
}



export async function getServerSideProps (context){

  return {
    props: {
      baseApiUrl:"testurl",
      profile:"myurl",
    },
  };

}
