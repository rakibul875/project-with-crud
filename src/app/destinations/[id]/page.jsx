import DetailsPage from "@/components/DetailsPage";


const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:8000/destination/${id}`);
  const data = await res.json();


  return (
    <div className="">
      <DetailsPage data={data}/>
    </div>
  );
};

export default DestinationDetailsPage;
