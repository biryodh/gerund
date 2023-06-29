import Image from "next/image"
import Link from "next/link";
import dummy from "uploads/profile/dummy.jpg";
import WorkerSideMenu from "./worker";


export async function getServerSideProps (context){

  const session = await getServerSession(context.req, context.res, nextAuthOptions);
  console.log("session");
  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }


  return {
    props: {
      user:{
        email:session.user.email,
        role:session.user.role,
      },
    },
  };

}


export default function sideNav(e) {
  return (
    <>
    {/* + e.mobile?"Acives":"" */}
      <nav className={"sidebar sidebar-offcanvas " + (e.settings.mobile?"active":"") } id="sidebar" >
      <Link href="/dashboard">
        <div className="user-profile">
          <div className="user-image">
            <Image src={"https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"} alt="Profile Pic"  width={50} height={50} />
          </div>
          <div className="user-name">
              Balwinder Singh
          </div>
          <div className="user-designation">
              Developer
          </div>
        </div>
      </Link>
        <WorkerSideMenu />
      </nav>
      </>
  )
}
