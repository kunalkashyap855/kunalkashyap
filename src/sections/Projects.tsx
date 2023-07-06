import ProjectContainer from "@/components/ProjectContainer"
import Image from "next/image"
import { project } from "@/interfaces"


const projectDetails: Array<project> = [
    {
        title: "Payroll Management System",
        description: "A console application utilizing Object-Oriented Programming techniques, C++ graphics, pointers, and file handling. User can add new employees, edit, delete, and display all the details of an employee and even print the pay slip.",
        technologies: ["C++"],
        github: "https://github.com/kunalkashyap855/Payroll-Management-System",
        imageUrl: "projects/imag1.png"
    },
    {
        title: "DEVnet",
        description: "College exclusive web portal that aimed to inculcate a more aware and opportunistic coding environment among budding coders. Designed CRUD APIs following the REST architecture to implement features like following other users, creating posts, reacting and commenting on other users posts. Implemented middleware to authenticate users and verify sessions.",
        technologies: ["NodeJS", "Express", "MongoDB", "HTML", "CSS"],
        github: "https://github.com/kunalkashyap855/DTU-DEVnet",
        imageUrl: "projects/imag2.png"
    },
    {
        title: "gRPC Server & Client",
        description: "A gRPC server and client in Go with functionality for simple RPC, server-side streaming RPC, client-side streaming RPC, and bidirectional RPC. Handles concurrency, and data serialization to ensure reliable communication between client and server.",
        technologies: ["Go", "RPC"],
        github: "https://github.com/kunalkashyap855/",
        imageUrl: "projects/imag1.png"
    },
    {
        title: "Image Classification - ResNets",
        description: "Trained a Wide Residual Network (with a limit of 5M parameters at max) to classify images on the CIFAR-10 dataset of colored images with 10 classes. The Deep Residual Network model achieved an accuracy of 94% with less than 5M trainable parameters.",
        technologies: ["Python", "PyTorch", "NumPy"],
        github: "https://github.com/kunalkashyap855/wide-resnet-cifar10",
        imageUrl: "projects/imag1.png"
    },
]

function Projects() {
  return (
    <div className="w-full min-h-screen p-6 laptop:p-12">
        {/* <div className="w-full h-full bg-gray-200 bg-opacity-70 z-50 absolute flex justify-center items-center">
            <Image width={200} height={200} src="/wip.png" alt="Work In Progress" />
        </div> */}
        <p id="projectSection" className="mb-6 text-blue-500 font-semibold text-2xl">Some Things I&#39;ve Built</p>
        <div className="grid grid-cols-1 grid-rows-6 laptop:grid-cols-2 laptop:grid-rows-3 gap-4 laptop:gap-8 w-full">
            {
                projectDetails.map(pr => <ProjectContainer key={pr.title} project={pr} />)
            }
        </div>
    </div>
  )
}

export default Projects