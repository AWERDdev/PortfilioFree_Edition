export default function ProjectCard() {
    return (
        <div className="bg-gray-900 rounded-xl p-4 w-[90vw] sm:w-[60vw] md:w-[30vw] m-4 shadow-lg">
            <div className="bg-black h-32 flex items-center justify-center rounded-md">
                <h1 className="text-gray-400 text-2xl font-semibold">Project 1</h1>
            </div>
            <div className="mt-4 text-gray-200">
                <h2 className="text-lg font-bold">Project Title 1</h2>
                <p className="text-gray-300 mt-2 text-sm">
                    A brief description of the project, technologies used, and problems solved.
                </p>
                <div className="flex gap-2 mt-4">
                    <span className="bg-green-900/30 text-green-400 text-xs font-medium px-2 py-1 rounded-full">React</span>
                    <span className="bg-green-900/30 text-green-400 text-xs font-medium px-2 py-1 rounded-full">Node.js</span>
                </div>
            </div>
        </div>
    );
}
