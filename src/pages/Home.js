import React from 'react'
import me from '../assets/images/photo.jpg'

function Home() {
    return (
        
            <div className="backgroundImage grid grid-cols-2 place-content-center">
                <div className='justify-self-center place-self-center border-2 border-black'>
                <img src={me} alt="Jaeger at a boudoir shoot" />
                </div>
                <div className="bg-amber-50 p-5 text-center text-sm mr-20 border-2 border-black my-[100%]">Welcome. My name is Jaeger and I'm homegrown here in the good ol' Pacific Northwest. I grew up all over the Puget Sound in Kitsap, Pierce and King counties. From the day I was born until the day I left for college I was always creative, a critical thinker and liked to solve problems. Life was a puzzle and I was ready to put the pieces together. Growing up I also played the piano, sang and was quite the ham. My rendition of Animal Fair came landed me as the runner up in the local talent show behind the Riverdancing. 6 year old me still thinks he was snubbed! I went through High School and College deciding between a career in the arts or an unfulfilling career for the sake of financial stability. I landed up at Western Washington University where I cross-studied Theatre with a concentration in Acting. I had found my passion and I was not ready to give it up. Post university I realized that what I loved wasn't going to pay the bills. I worked a couple of different jobs until about two years into the pandemic when the lack of creativity and underappreciation had me burnt out. After a 6 month hiatus, I decided to take a coding bootcamp course through the University of Washington.
                <br></br>
                <br></br>
                It was three months of intense learning where all I could do was eat, sleep and code. I wasn't even sure I'd be able to make it through. Shortly after starting the course I realized that I could put my creative tendencies, critical thinking and problem solving skills to work. I had found something that can both be fulfilling and result in financial stability. There were moments where I wanted to give up but if anybody who knows me understand I am ambitious and not one to back down from a challenge. Perseverance might as well have been my middle name. From September to mid December I diligently plugged along through the course. When it was over, I couldn't believe the skills that I had cultivated and the knowledge I had absorbed. All of that is what brings me here today. This portfolio is a place where my projects can be shown off and you can contact me for employment or freelance projects. Hopefully this page demonstrates my quality of work as well. So make yourself at home and take a look around! So happy you've made it.</div>
            </div>

    )

}

export default Home;