import Hero from "@/components/demo/Hero"
import Navbar from "@/components/demo/Navbar"

const HomePage = () => {
    return (
    <div className="flex flex-col">
        <div className="mb-6">
            <Navbar/>
        </div>
        <div className="mt-16">
            <Hero/>
        </div>
        
    </div>
    )
}

export default HomePage