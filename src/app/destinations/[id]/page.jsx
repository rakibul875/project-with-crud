import DetailsPage from "@/components/DetailsPage";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  
 const {token}=await auth.api.getToken({
    headers:await headers()
  })



  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,{
     headers:{
          authorization:`bearer ${token}`
        }
  });
  const data = await res.json();


  return (
    <div className="">
      <DetailsPage data={data}/>
    </div>
  );
};

export default DestinationDetailsPage;
