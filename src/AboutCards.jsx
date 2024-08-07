import { Link } from "react-router-dom"
import AatmikaImg from "./assets/aboutpics/aatmika.jpg"
import AnanyaImg from "./assets/aboutpics/ananya.jpg"

import gmailImg from './assets/social-media/gmail.png';  
import githubImg from './assets/social-media/github.png';  
import instagramImg from './assets/social-media/instagram.png';
import linkedinImg from './assets/social-media/linkedin.png';  
export function Card() {

    return (
        <>
            <div className="cardabout">
                <img src={AatmikaImg} alt="" />
                <div className="cardabout__content">
                    <p className="cardabout__title">Aatmika Gangeley</p>
                    <p className="cardabout__description">Motivated and passionate Programmer. Confident orator, and occasional content writer. I am an enthusiastic learner, keen to expand my horizons in the professional realm and simultaneously looking forward to embrace challenges as opportunities for personal development.
                    </p>
                    <div className="card2">
                        <span>Social</span>
                        <div className="flex">
                            {/* <div><a className="social-link" href="#"><img src="./src/assets/social-media/github.png" /></a></div>
                            <div><a className="social-link" href="#"><img src="./src/assets/social-media/linkedin.png" /></a></div>
                            <div><a className="social-link" href="#"><img src="./src/assets/social-media/instagram.png" /></a></div>
                            <div><a className="social-link" href="#"><img src="./src/assets/social-media/gmail.png" /></a></div> */}
                            <a className="social-link m-1" href="https://github.com/Aag2004"><img src={githubImg} /></a>
                            <a className="social-link m-1" href="https://www.linkedin.com/in/aatmika-gangeley-821175259"><img src={linkedinImg} /></a>
                            <a className="social-link m-1" href="https://www.instagram.com/aatmikagangeley/?hl=en"><img src={instagramImg}/></a>
                            <a className="social-link m-1" href="mailto:aatmika.gan2608@gmail.com"><img src={gmailImg}/></a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="cardabout">
                <img src={AnanyaImg} alt="" />
                <div className="cardabout__content">
                    <p className="cardabout__title">Ananya Srivastava</p>
                    <p className="cardabout__description">An extroverted, enthusiastic, and creative CSE undergraduate with a strong
                        passion for problem-solving and teamwork. Adept at analyzing and solving complex problems, with a proven
                        track record in competitive coding. Currently seeking opportunities to leverage my skills in web
                        development because I find it very interesting to encounter problems while working on projects and then
                        overcoming them. Fluent in multiple programming languages and committed to continuous learning.
                    </p>
                    <div className="card2">
                        <span>Social</span>
                        <div className="flex">
                            {/* <div><a className="social-link" href="#"><img src="./src/assets/social-media/github.png" /></a></div>
                            <div><a className="social-link" href="#"><img src="./src/assets/social-media/linkedin.png" /></a></div>
                            <div><a className="social-link" href="#"><img src="./src/assets/social-media/instagram.png" /></a></div>
                            <div><a className="social-link" href="#"><img src="./src/assets/social-media/gmail.png" /></a></div> */}
                            <a className="social-link m-1" href="https://github.com/Anva41103"><img src={githubImg}/></a>
                            <a className="social-link m-1" href="https://www.linkedin.com/in/ananya-srivastava-98455825b"><img src={linkedinImg}/></a>
                            <a className="social-link m-1" href="#"><img src={instagramImg} /></a>
                            <a className="social-link m-1" href="mailto:praanu03@gmail.com"><img src={gmailImg}/></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}