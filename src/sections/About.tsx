import AboutOption from "@/components/Option"
import { MouseEvent, useState } from "react"


function About() {
    const [currentSelected, setCurrentSelected] = useState<string>("about")

    const handleMouseEvent = (event: MouseEvent, value: string) => {
        event.preventDefault();

        setCurrentSelected(value);
    }

  return (
    <div className="flex flex-col w-full h-screen p-6 laptop:p-12">
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
            <div>
                Content
            </div>
        </div>
        <div className="">Skills</div>
    </div>
  )
}

export default About