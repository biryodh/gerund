import TopNavrComponent from "@components/dash/topNav"
import SideNavComponent from "@components/dash/sideNav"
import CreatePost from "@components/dash/modules/createpost";
import Posts from "@components/dash/modules/posts";
import Link from 'next/link';
import { useState, useEffect } from "react";

export async function getServerSideProps (context){

  return {
    props: {
      baseApiUrl:"testurl",
      profile:"myurl",
    },
  };

}

export default function Layout(props) {
//   const { profile , baseApiUrl} = props;

  const [openMenu, doOpen]= useState(false);
  const [openMenuInPhone, doOpenInPhone] = useState(false);
  
  /* functions   */
  const handleClick = () => {
    doOpen(!openMenu);
  }

  const handleClickMobile = ()=>{
    doOpenInPhone(!openMenuInPhone);
  }

  /* Hooks   */
  useEffect(() => {
    document.body.classList.toggle('sidebar-icon-only', openMenu);
  },[openMenu])

  
  return (
    <>
      <div className="container-scroller">
        <TopNavrComponent handleClick = {handleClick} handleClickMobile = {handleClickMobile} />
        <div className="container-fluid page-body-wrapper">
          <SideNavComponent settings={{mobile:openMenuInPhone}} />
          <div className="main-panel">
            <div className="content-wrapper">
                {props.childComponent}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}