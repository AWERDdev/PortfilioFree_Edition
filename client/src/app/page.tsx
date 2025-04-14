import NavBar from '@/components/NavBar';
import AboutMe from '@/components/AboutMe';
import Card from '@/components/cards';
import ProjectCard from '@/components/ProjectCard';
import Get_In_Touch from '@/components/GetInTouch';
// import Image from 'next/image'; Import Example 
export default function Home() {
  const Card1 = {
    Job: "Frontend Development",
    stat1: "React & Next.js",
    stat2: "TypeScript",
    stat3: "Tailwind CSS",
    stat4: "Redux / Context API",
    stat5: "Responsive Design"
  };

  const Card2 = {
    Job: "Backend Development",
    stat1: "Node.js & Express",
    stat2: "MongoDB / PostgreSQL",
    stat3: "RESTful APIs",
    stat4: "Authentication",
    stat5: "Security Best Practices"
  };

  const Card3 = {
    Job: "DevOps & Deployment",
    stat1: "Docker & Kubernetes",
    stat2: "CI/CD Pipelines",
    stat3: "AWS / Vercel",
    stat4: "Performance Monitoring",
    stat5: "Version Control (Git)"
  };

  return (
    <main className="w-screen min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] transition duration-300 overflow-x-hidden">
      
      {/* Navigation Bar */}
      <div className="NavBar">
        <NavBar />
      </div>

      {/* Hero Section */}
      <section className="DescribtionTitle flex justify-evenly items-center mt-32 px-4 flex-wrap">
      <div className="Image relative w-[180px] h-[180px] flex items-center justify-center rounded-full bg-gray-600 overflow-hidden">
      {/* Image  Display example */}
      {/* <Image
              src={profileImage}
              alt="Profile image"
              width={180}
              height={180}
              className="rounded-full object-cover"
            /> */}

    <span className="text-white text-5xl font-bold">?</span>

</div>


        <div className="context text-white">
          <h1 className="text-3xl font-bold mb-2">Software Engineer</h1>
          <h2 className="text-purple-400 font-semibold mb-3">
            Specializing in Full-Stack Development
          </h2>
          <p className="text-gray-300 mb-6">
            Building robust, scalable applications with modern technologies and best practices.
          </p>
          <div className="flex gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 md:px-5 md:py-2 rounded-md transition cursor-pointer">
              Get InTouch
            </button>
            <button className="border border-purple-400 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition cursor-pointer">
              ViewProjects
            </button>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="AboutMe mt-30">
        <AboutMe />
      </section>

      {/* Skills & Expertise */}
      <section className="Skills_Expertise mt-30 bg-[#111827]">
        <div className="Title text-white text-center">
          <h1 className="text-[1rem] sm:text-[2rem] font-bold">Skills & Expertise</h1>
        </div>

        <div className="Skills_Expertise_Container mt-5 bg-[#111827] grid sm:flex justify-center">
          <Card {...Card1} />
          <Card {...Card2} />
          <Card {...Card3} />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="Featured_Projects w-full h-full bg-[#1F2937]">
        <div className="Title text-white text-center">
          <h1 className="text-[1rem] sm:text-[2rem] font-bold">Featured Projects</h1>
        </div>

        <div className="Projects grid justify-center md:flex md:justify-evenly mt-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>

      {/* Get In Touch Placeholder */}
      <section className="getInTouch">
        {/* Add your content here */}
        <Get_In_Touch/>
      </section>
      <section className='Buttombar'>
      <main className="outline-1 outline-[#1F2937] w-full bg-[#111827] ">
                <div className="flex justify-center text-center ">
                    <div className="title ">
                        <h1 className="text-[1rem] font-bold ml-5 text-gray-500 p-5">© 2025 Alex Morgan. All rights reserved.</h1>
                    </div>
                </div>
            </main>
      </section>
    </main>
  );
}
