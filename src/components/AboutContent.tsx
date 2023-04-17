import { Fragment } from "react";
import Image from "next/image"

function AboutContent() {
  return (
    <Fragment>
        <div>
            <div className="rounded-full">
                <Image 
                    alt="Kunal Kashyap" 
                    src="/kunal.jpg" 
                    width={300}
                    height={300}
                    className="rounded-full"
                />
            </div>
        </div>
        <div className="laptop:w-2/3 text-gray-900">
            <p>My name is Kunal Kashyap and I am a Computer Engineering grad student at the New York University.</p>
            <p className="mt-4">I have immense experience in building scalable web and mobile(native apps) applications by implementing object-oriented design architectures and following the best software development practices. Having worked as a Software Development Engineer(Full-time and Intern) at various companies, ranging from small scale to large scale, I’m highly skilled at various technologies and computer science concepts, and I’m also comfortable with tools such as Git, AWS and Docker. Along with this, I have a strong design intuition and I like to actively participate in the UI/UX design of applications.</p>
            <p className="mt-4">My professional mission has always been to help people by creating value or solving problems with the help of technology and the internet. I believe a career as a Software Developer enables me to pursue this mission with the greatest effect.</p>
            <p className="mt-6 text-blue-500 font-medium text-xl">When I&#39;m not working</p>
            <p>You can find me watching sports, playing the guitar, watching movies or exploring new restaurants with friends.</p>
        </div>
    </Fragment>
  )
}

export default AboutContent