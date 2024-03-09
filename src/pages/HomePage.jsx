import Navbar from "@/components/demo/Navbar"

const HomePage = () => {
    return (
    <div>
        <Navbar/>
        <main className="absolute top-24 w-[90%] left-[50%] translate-x-[-50%]">
            <h1 className="text-5xl">hello Home page</h1>
            
        </main>
    </div>
    )
}

export default HomePage