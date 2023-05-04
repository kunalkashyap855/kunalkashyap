import { workplace } from "@/interfaces"

const WorkTile = ({ details }: { details: workplace }) => {
    return (
        <div className="flex flex-col w-full laptop:w-3/4 mb-10">
            <p className="text-blue-500 font-semibold laptop:text-xl">{details.position} <span className="text-indigo-400">@ {details.company}</span></p>
            <p className="text-gray-400 text-sm">{details.timeline}</p>
            <div className="mt-4 text-sm text-gray-900">
                <ul>
                    {
                        details.work.map((w, index) => <li key={index}>{w}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

const workDetails: Array<workplace> = [
    {
        "company": "Advanced Micro Devices (AMD)",
        "position": "Software Engineer Intern",
        "timeline": "June 2022 - Present",
        "work": [
            "Designed and developed enterprise software applications to automate key business processes that measure and optimize performance of post-Silicon EPYC server processors.",
            "Increased utilization of machines running jobs to 100%, resulting in multi-fold increase in workflow efficiency.",
            "Created a methodology and infrastructure for Test-Driven Development using Jest and React Testing Library.",
            "Automated testing and CI pipelines for web applications and services to always have them ready for deployment using Docker.",
            "Authored technical documentations and software development artifacts.",
            "Worked in an Agile Scrum Environment."
        ]
    },
    {
        "company": "The Right Guru",
        "position": "Lead Software Developer",
        "timeline": "February 2021 - June 2021",
        "work": [
            "Led a team of 4 developers to create the product for a new edu-tech startup.",
            "Architected the system design of personal education portals provided to registered students and teachers, which include features like attendance and performance visualizations, doubt solving, uploading, and viewing of lecture notes and booking classes; It also included real-time notifications and chat support, implemented using Django Channels.",
            "Created a custom video call and chat application by implementing WebRTC and generating our own STUN and TURN servers for live 1:1 and group video classes."
        ]
    },
    // {
    //     "company": "TATA Communications Transformation Services",
    //     "position": "Software Development Intern",
    //     "timeline": "June 2020 - August 2020",
    //     "work": [
    //         "Designed and developed the Fiber Splicing Portal which was used by field engineers to record their day-to-day jobs of repair and addition of fibers and visualization of statistics.",
    //         "Tracked which fibers were serving which customer and which fibers were available for new connections and allowed the service providers to reduce their costs by 30%."
    //     ]
    // },
]

function WorkContent() {
    return (
      <div className="w-full laptop:ml-16">
        {
            workDetails.map(e => <WorkTile key={e.company} details={e} />)
        }
      </div>
    )
  }
  
  export default WorkContent