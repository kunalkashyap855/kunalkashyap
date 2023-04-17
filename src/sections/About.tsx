import AboutContent from "@/components/AboutContent";
import EducationContent from "@/components/EducationContent";
import AboutOption from "@/components/Option"
import WorkContent from "@/components/WorkContent";
import { skill } from "@/interfaces";
import { skills } from "@/skills";
import { MouseEvent, useEffect, useState } from "react"
import Image from "next/image"

function SkillTile({ key, skill }: { key: string; skill: skill }) {
    return (
        <div className="rounded-lg flex justify-around w-max h-12 p-2 shadow-md items-center">
            <Image 
                alt={skill.name} 
                src={skill.logo_url}
                width={32}
                height={32}
             />
            <div>{skill.name}</div>
        </div>
    )
}

function About() {
    const [currentSelected, setCurrentSelected] = useState<string>("about")

    // useEffect(() => {
    //   async function fetchData() {
    //     try {
    //         let resp: Response = await fetch("", { method: "GET" })
    //         if (!resp.ok) throw resp.statusText;
    //         console.log(resp);
    //     } catch (error) {
    //         console.error(error)
    //     }
    //   }
    // }, [])
    

    const handleMouseEvent = (event: MouseEvent, value: string) => {
        event.preventDefault();

        setCurrentSelected(value);
    }

  return (
    <div id="aboutSection" className="flex flex-col w-full h-screen p-6 laptop:p-12">
        <div className="flex flex-col laptop:flex-row w-full h-full laptop:h-2/3 items-center">
            <div className="flex laptop:flex-col w-full laptop:w-32 justify-around laptop:justify-center laptop:h-full">
                <AboutOption 
                    selected={currentSelected === "about"} 
                    title="About me" 
                    onClick={(e) => handleMouseEvent(e, 'about')}
                />
                <AboutOption 
                    selected={currentSelected === "education"}  
                    title="Education" 
                    onClick={(e) => handleMouseEvent(e, 'education')}
                />
                <AboutOption 
                    selected={currentSelected === "work"}  
                    title="Work" 
                    onClick={(e) => handleMouseEvent(e, 'work')}
                />
            </div>
            <div className="flex flex-col laptop:flex-row w-full mt-8 laptop:ml-10 justify-around">
                {currentSelected === "about" && <AboutContent />}
                {currentSelected === "education" && <EducationContent />}
                {currentSelected === "work" && <WorkContent />}
            </div>
        </div>
        <p className="mt-6 text-blue-500 font-semibold text-2xl">Technologies I&#39;ve worked on</p>
        <div className="flex flex-wrap w-full h-1/4 gap-4">
            {
                skills.map(skill => {
                    return (
                        <SkillTile key={skill.name} skill={skill} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default About