// FILE: components/NavBar.jsx
export default function NavBar(){
    return(
        <>
            <main className="outline-1 outline-[#E5E7EB] w-full bg-white">
                <div className="flex justify-between">
                    <div className="title">
                       <a href="/ "> <h1 className="text-[1.3rem] md:text-[0.9] font-bold ml-5 text-gray-800 p-5">AlexMorgan</h1></a>
                    </div>
                    <div className="links hidden sm:flex p-5 mr-5 text-gray-800 gap-5 transition-all">
                        <a href="/about"className="hover:text-orange-500 md:text-[0.9]">About</a>
                        <a href="/Skills"className="hover:text-orange-500 md:text-[0.9]">Skills</a>
                        <a href="/Projects"className="hover:text-orange-500 md:text-[0.9]">Projects</a>
                        <a href="/Contact"className="hover:text-orange-500 md:text-[0.9]">Contact</a>
                    </div>
                </div>
            </main>
        </>
    )
}
