import { redirect } from "react-router-dom";
import UIPageTitle from "../UI/PageTitle";

const Home = () => {
  return <>
    <UIPageTitle title="Trensy Homepage" subtitle="Trensy homepage for any users" />
  </>
}
 
export default Home;

export const loader = ()=>{
  return redirect("/home")
}