import Articles from "../components/Articles"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import LatestNews from "../components/LatestNews"
import Navbar from "../components/Navbar"
import Program from "../components/Program"

const Home = () =>{
    return(
        <div className="bg-white text-gray-800">
            {/* <!-- Navigation --> */}
            <Navbar></Navbar>

            {/* <!-- Hero Section --> */}
            <Hero></Hero>

            {/* <!-- Program Section --> */}
            <Program></Program>

            {/* <!-- Latest News Section --> */}
            <LatestNews></LatestNews>

            {/* <!-- Articles Preview --> */}
            <Articles></Articles>

            {/* <!-- Footer --> */}
            <Footer></Footer>
        </div>
    )
}

export default Home