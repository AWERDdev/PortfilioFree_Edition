export default function ProjectCard() {
    return (
        <div className="bg-[#1e293b] rounded-xl p-4 w-[90vw] sm:w-[60vw] md:w-[30vw] m-4 shadow-lg">
            <div className="bg-[#334155] h-32 flex items-center justify-center rounded-md">
                <h1 className="text-gray-400 text-2xl font-semibold">Project 1</h1>
            </div>
            <div className="mt-4 text-white">
                <h2 className="text-lg font-bold">Project Title 1</h2>
                <p className="text-gray-300 mt-2 text-sm">
                    A brief description of the project, technologies used, and problems solved.
                </p>
                <div className="flex gap-2 mt-4">
                    <span className="bg-[#6d28d9] text-white text-xs font-medium px-2 py-1 rounded-full">React</span>
                    <span className="bg-[#9333ea] text-white text-xs font-medium px-2 py-1 rounded-full">Node.js</span>
                </div>
            </div>
        </div>
    );
}
