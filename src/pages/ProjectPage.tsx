import { useState } from "react"
import Project from "../components/Project"
import elephant from '../assets/project-logos/elephant-todo.png'
import pizza from '../assets/project-logos/pizza-petruccio.png'
import library from '../assets/project-logos/my-cozy-library.png'


const ProjectPage = () => {

  const [projectNumber, setProjectNumber] = useState(0)

  type TProject = {
    name: string,
    website: string,
    github: string,
    logo: string;
    technologies: string[],
    about: string[]
  }
   
    const projects = [
      { 
        name:'Elephant-To-Do', 
        website: "https://elephant-to-do-front.onrender.com",
        github: "https://github.com/deiman999202/elephant-to-do-front",
        logo: elephant,
        technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'React', 'React-Router', 'JWT', 'cookies', 'REST', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'CORS', 'REST', 'CRUD'],
        about: [
          'Application with Registration, Login and Logout', 
          'Authenticated users can create, read, update and delete their todos', 
          'Adaptivity to different screen sizes',
          'User-friendly design',
          'Good Front-end and Back-end communication'
          ]
      }, 
      {
        name:'Pizza Pettrucio', 
        website: 'https://pizzeria-font.onrender.com',
        github: "https://github.com/deiman999202/petruccio-front", 
        logo: pizza,
        technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'React-Router', 'Redux', 'Redux toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'CORS'],
        about: [
          'Application for ordering pizza, drinks and sauces to your house',
          'Users can choose the product they like and filter it according to preferences',
          'For ordering pizza we have nice popup with customization',
          'Adaptivity to different screen sizes',
          'User-friendly design',
          'Good Front-end and Back-end communication'
        ]
      }, 
      {
        name:'My cozy library', 
        website: 'https://my-cozy-library.firebaseapp.com/',
        github: "https://github.com/deiman999202/petruccio-front", 
        logo: library,
        technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Google Books API', 'React', 'Redux', 'Redux toolkit', 'Firebase', 'Firebase Auth', 'Firestore'],
        about: [
          'Application for searching books',
          'Firebase for database, auth and hosting',
          'Pages for search by inputs, categories and my books',
          'Explicit interface'
        ]
      } 
    ]

  return (
    <div className="h-screen flex flex-col items-center gap-4 mt-16 md:mt-32 px-4 overflow-auto">
      {
        <Project key={projects[projectNumber].name} projectInfo={projects[projectNumber]} />
      }
      <div className="flex gap-8">
         {
           projects.map((project: TProject, index: number) => {
            return <span className="bg-white py-2 px-4 cursor-pointer hover:brightness-90" 
            onClick={() => {
              setProjectNumber(index)
            }}>{index + 1}</span>
           })
          }
      </div>
     
    </div>
  )
}

export default ProjectPage