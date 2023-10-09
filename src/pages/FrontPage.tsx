import { Link } from 'react-router-dom'
import github from '../assets/github.png'
import gmail from '../assets/gmail.png'
import linkedin from '../assets/linkedin.png'
import telegram from '../assets/telegram.png'


const FrontPage = () => {
  return (
    <section className="flex flex-col items-center mt-36 ">
        <aside className="absolute bottom-2 lg:bottom-48 lg:left-2 flex lg:flex-col bg-white p-2 rounded-lg w-72 lg:w-16 gap-8 lg:gap-4 items-center">
            <a href="https://github.com/deiman999202" target='_blank' rel="noreferrer">
                <img src={github} alt="github" />
            </a>
            <a href="mailto:dimavolosin999202@gmail.com" >
                <img src={gmail} alt="gmail" />
            </a>
            <a href="https://www.linkedin.com/in/dmytro-voloshyn-151a0b1bb/" target='_blank' rel="noreferrer">
                <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://t.me/Deiman999202" target='_blank' rel="noreferrer">
                <img src={telegram} alt="telegram" />
            </a>
        </aside>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">Hello, world! My name is Dmytro and welcome to my portfolio</h2>
        <h2 className="text-lg md:text-xl w-11/12 md:w-8/12 lg:w-6/12 text-center md:font-bold m-12">I am a Junior Front-End Developer. I like creating websites, having fun with finding the best solution and learning something new. Click the button below to see my projects.</h2>
        <Link to={"/projects"} className="text-xl rounded-lg bg-white p-2 font-bold">See my projects</Link>
    </section>
  )
}

export default FrontPage