import { workplace } from "@/interfaces"
import Image from "next/image"

const WorkTile = ({ details }: { details: workplace }) => {
    return (
        <div className="flex flex-col w-full laptop:w-3/4 mb-10">
            <p className="text-blue-500 font-semibold laptop:text-xl">{details.position} <span className="text-indigo-300">@ {details.company}</span></p>
            <p className="text-gray-400 text-sm">{details.timeline}</p>
            <p className="mt-4 text-sm text-gray-900">{details.work}</p>
        </div>
    )
}

const workDetails: Array<workplace> = [
    {
        "company": "Advanced Micro Devices (AMD)",
        "position": "Software Engineer Intern",
        "timeline": "June 2022 - Present",
        "work": "A lot of work"
    },
    {
        "company": "Sourcefuse Technologies",
        "position": "Full-Stack Software Developer",
        "timeline": "June 2021 - August 2021",
        "work": "A lot of work"
    },
    {
        "company": "The Right Guru",
        "position": "Lead Software Developer",
        "timeline": "February 2021 - June 2021",
        "work": "A lot of work"
    },
    {
        "company": "TATA Communications Transformation Services",
        "position": "Software Development Intern",
        "timeline": "June 2020 - August 2020",
        "work": "A lot of work"
    },
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