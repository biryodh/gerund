import TopNavrComponent from "@components/dash/topNav"
import SideNavComponent from "@components/dash/sideNav"
import CreatePost from "@components/dash/modules/createpost";
import Posts from "@components/dash/modules/posts";
import Link from 'next/link';
import { useState, useEffect } from "react";
import Layout from "@components/dash/layout";


export default function Dashboard(props) {
  const { profile , baseApiUrl} = props;



      const Dashboard = ()=> { return (
        <>
                        <CreatePost />
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
