import Header from "../components/header"
import router from 'next/router'

const Custom404 = () => {
    return (
        <div className="container mx-auto grid justify-items-center p-4 sm:p-1">
            <div className="w-full flex place-items-center gap-4 pt-6">
                <Header />
            </div>
            <div className="w-80 text-center md:p-12 bg-gray-700 rounded-lg shadow-xl">
                <h1>404</h1>
                <h2>Not Found</h2>
                <button onClick={()=>router.push('/')} className="text-gray-300 pt-4 hover:underline">Go to Homepage</button>
            </div>
        </div>
    )
}

export default Custom404