
function Project(props) {
    return (
        <div
            className="group bg-amber-50 h-48 md:h-52 w-80 md:w-96  my-8 border-2 border-black">
            <div className="bg-green-700 w-max border-r-2 border-b-2 border-black">
               
                {props.Deploy && (
                    <a
                        href={props.Deploy}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block ml-2 mt-1"
                    >
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="archive" class="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z"></path>
  </svg>
                    </a>
                )}

                <p className="inline-block text-black mx-2">{props.projectName}</p>
            </div>
        </div>
    )
}

export default Project;