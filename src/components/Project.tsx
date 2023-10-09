type TProject = {
  name: string,
  website: string,
  github: string,
  logo: string,
  technologies: string[],
  about: string[]
}

type ProjectProps = {
  projectInfo: TProject
}

const Project:React.FC<ProjectProps> = ({projectInfo} : ProjectProps) => {
  const {name, website, github, logo, technologies, about} = projectInfo
  return (
    <div className="bg-white py-4 px-8 flex flex-col gap-4">
      <div className="name-logo flex items-center justify-between">
        <h2 className="text-3xl font-bold">{name}</h2>
        <img className="w-16" src={logo} alt={name} />
      </div>
      <div className="links underline text-xl">
        <a  href={website} target="_blank" rel="noreferrer">Preview link</a>
        <a className="ml-12" href={github} target="_blank" rel="noreferrer">Github</a>
      </div>
   
      <span className="block">[{[technologies.map((technology: string, index: number) => {
        if(index === technologies.length - 1){
          return technology
        }else{
          return technology + ", "
        }
        
      })]}]</span>
      <ul className="list-disc ml-8">
        {about.map((aboutItem: string) => {
          return <li>{aboutItem}</li>
        })}
      </ul>
    </div>
  )
}

export default Project