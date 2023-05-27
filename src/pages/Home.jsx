import About from "../components/About";
import Faq from "../components/Faq";
import Specialties from "../components/Specialties";
import Treatments from "../components/Treatments";
import WppButton from '../components/WppButton'

export default function Home (){
    return(
        <>
        <WppButton number='+552196402-6412' />
       <About/>
       <Specialties/>
       <Treatments/>
       <Faq/>
       </>
    )
}