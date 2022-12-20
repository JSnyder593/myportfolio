import beer from '../assets/images/notfolsom.jpg'
import theatre from '../assets/images/urinetown.jpg'
import bros from '../assets/images/bros.jpg'

function About() {
    return (
        <div className="About backgroundImage">
            <div className="flex md:flex-wrap justify-center ">
                <div className='my-6 mx-5 border-2 border-black'><img src={beer} alt="drinking beer at Folsom" /></div>
                <div className='my-6 mx-5 border-2 border-black'><img src={theatre} alt="acting in a musical" /></div>
                <div className='my-6 mx-5 border-2 border-black'><img src={bros} alt="Jaeger and his younger brother kempton as tweens" /></div>
                <div className="bg-amber-50 rounded-md p-5 border-2 border-black lg:max-w-[70%] lg:h-84">At home I spend most of my time coding, gaming, sleeping, listening to music, cooking and baking. Whether you want Spaghetti Bolognese, Chicken Katsu with Rice, Chocolate Chip Cookies or a Cake it's no problem! There's nothing more I love than making a mess in the kitchen. Don't ask me if I like to clean up afterwards. I might have to lie.
                <br></br><br></br>
                As a gamer, my two favorites games are Overwatch and Dead by Daylight. I don't know what it is about running away from Michael Meyers, Pinhead or Nemesis but it's a grand time. Looping the killer and smacking them in the face with a pallet? SO satisfying. On Overwatch I'm a spicy Support Main who isn't afraid to Valk and go frag Mercy on a Widow. If I have to take her out myself, I'll do it. Risky rez? No problem. My Mercy madness knows no bounds.
                <br></br><br></br>
                Outside of the home, I spend most of my time with friends and family, exploring restaurants for good food and unique cocktails, hanging out at the family cabin on the Totten Inlet, going to the Theatre (I might miss performing a little bit) or going to Kraken games. I'm also a huge fan of traveling and I hope to visit more of the world someday. I've been to Canada, France and Australia. It's safe to say that my friends and family what get me through the days. We laugh a ton and act like fools whenever we can. We're quite silly and altogether a bit loud but I wouldn't have it any other way.
                </div>
            </div>
        </div>
    )

}

export default About;