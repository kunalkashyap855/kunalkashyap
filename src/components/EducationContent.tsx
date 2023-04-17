import { university } from "@/interfaces"
import Image from "next/image"

const EducationTile = ({ details }: { details: university }) => {
    return (
        <div className="flex flex-row w-full laptop:w-2/3 mb-16 justify-around">
            <div>
                <Image 
                    alt="Kunal Kashyap" 
                    src={details.image} 
                    width={144}
                    height={144}
                    className="rounded-full"
                />
            </div>
            <div className="flex flex-col w-11/12 laptop:w-3/4">
                <p className="text-blue-500 font-semibold laptop:text-xl">{details.name}</p>
                <p className="text-gray-400 text-sm">{details.program}</p>
                <p className="mt-4 text-sm">Coursework</p>
                <div className="flex">
                    {
                        details.coursework.map(course => 
                            <p key={course} className="text-xs">{course} |</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

const universityDetails: Array<university> = [
    {
        "name": "New York University",
        "program": "Master of Science in Computer Engineering",
        "coursework": [
            "Data Structures & Algorithms",
            "Machine Learning",
            "Deep Learning",
            "ML for Cyber Security",
            "Network Security"
        ],
        "image": "/nyu1.jpeg"
    },
    {
        "name": "Delhi Technological University",
        "program": "Bachelor of Technology in Computer Engineering (ECE)",
        "coursework": [
            "Operating Systems",
            "Internet & Web Technologies",
            "Object-Oriented Programming",
            "Big Data Analytics"
        ],
        "image": "/dtu.jpg"
    }
]

function EducationContent() {
    return (
      <div className="w-full laptop:ml-16">
        {
            universityDetails.map(uni => <EducationTile key={uni.program} details={uni} />)
        }
      </div>
    )
  }
  
  export default EducationContent