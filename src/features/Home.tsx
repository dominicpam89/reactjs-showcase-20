import { redirect } from "react-router-dom";

const Home = () => {
  return <>
    <h1>Home</h1>
  </>
}
 
export default Home;

export const loader = ()=>{
  return redirect("/home")
}