import Head from 'next/head'
import { decryption } from '@services/crypto';
import { verifyUserbyToken } from '@models/userModel';


export async function getServerSideProps({ query }) {
  let status = null;
  const obj = await decryption(query.s);
  const object = JSON.parse(obj);
  if(object){
    status = await verifyUserbyToken(query.s, object.email);
  }
  
  return { 
    props: {
      status:status
    } 
  };

}



export default function VerifyAccount(props) {
  return (
    <div className="">
      <Head>
        <title>Tracer!</title>
        <link rel="icon" href="/favicon.ico" />
        {props.status && (<div> Account is verified. </div>)}
        {!props.status && (<div> Unable to verify. </div>)}
      </Head>
    </div>
  )
}
