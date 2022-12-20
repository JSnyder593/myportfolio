import Project from '../Components/Project'

function Portfolio() {
    return (
        <div className="Portfolio backgroundImage">
            <div className='grid grid-cols-1 place-items-center'>
                <Project Deploy="https://rachlally.github.io/bucket-list/" projectName="Bucketlist Scrapbook" />
                <Project Deploy="https://birdbrain2022.herokuapp.com/" projectName="Bird Brain: A Bird Journal" />
                <Project Deploy="https://mattdack.github.io/dokkan-battle-deluxe/" projectName="Dokkan Battle Builder Deluxe" />
            </div>
        </div>
    )
}

export default Portfolio;