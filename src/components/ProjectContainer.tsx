import { project } from "@/interfaces"
import Image from "next/image"

function ProjectContainer({project}: {project: project}) {
  return (
    <div className="shadow-md hover:shadow-xl rounded-lg border border-gray-100">
        <div className="flex flex-grow w-full h-full">
            <div className="w-4/12">Image</div>
            <div className="flex flex-col w-8/12 p-8">
                <div className="flex justify-between">
                    <div className="text-blue-500 font-semibold text-lg">{project.title}</div>
                    <a href={project.github} className="bg-gray-900 p-1.5 rounded-lg flex justify-between hover:shadow-xl">
                        <Image width={40} height={16} alt="GitHub" src="/GitHub_Logo_White.png" />
                        <Image width={16} height={16} alt="Up Right Arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nN3ROwoCMRhF4QHBwg0INhYuxN49uAbBRbgFEQY3YWcpVnaCr95GLOwt9BMhxShOMpZ6IUUI5yT/TZb9X1DDCDNsccIlrCPGKUEde+VZV3lFM9z+Kbuqo+Qlgk0VeBgZYZWCe7hFBPMY3AltF3MPv3II+zwmWL7BV/TDWetZIAYxwbQAn9FNFpa9ChqYYIH2V/Dv5gEXvSc6VKc/LAAAAABJRU5ErkJggg==" />               
                    </a>
                </div>
                <div>{project.description}</div>
                <div className="mt-auto font-medium text-gray-500">
                    {project.technologies}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectContainer