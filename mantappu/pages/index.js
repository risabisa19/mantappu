
export default function Home(props) {
    console.log(props.web.Datajson[0])
    return (
        <div id="page-top">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top">{props.web.Datajson[0].header[0].title}</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="nav-item"><a className="nav-link" href={props.web.Datajson[0].header[0].navbar[0].link}>{props.web.Datajson[0].header[0].navbar[0].title}</a></li>
                    <li className="nav-item"><a className="nav-link" href={props.web.Datajson[0].header[0].navbar[1].link}>{props.web.Datajson[0].header[0].navbar[1].title}</a></li>
                    <li className="nav-item"><a className="nav-link" href={props.web.Datajson[0].header[0].navbar[2].link}>{props.web.Datajson[0].header[0].navbar[2].title}</a></li>
                    <li className="nav-item"><a className="nav-link" href={props.web.Datajson[0].header[0].navbar[3].link}>{props.web.Datajson[0].header[0].navbar[3].title}</a></li>
                    </ul>
                </div>
                </div>
            </nav>
            {/* Masthead*/}
            <header className="masthead">
                <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                    <h1 className="text-white font-weight-bold">{props.web.Datajson[0].body[0].banner[0].title}</h1>
                    <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                    <p className="text-white-75 mb-5">{props.web.Datajson[0].body[0].banner[0].description}</p>
                    <a className="btn btn-light btn-xl" href={props.web.Datajson[0].body[0].banner[0].btn[0].link}>{props.web.Datajson[0].body[0].banner[0].btn[0].text}</a>
                    </div>
                </div>
                </div>
            </header>
            {/* About*/}
            <section className="page-section bg-secondary" id="about">
                <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                    <h2 className="text-white mt-0">{props.web.Datajson[0].body[1].kedua[0].title}</h2>
                    <hr className="divider divider-light" />
                    <p className="text-black-75 mb-4 text-light">{props.web.Datajson[0].body[1].kedua[0].description}</p>
                    <a className="btn btn-light btn-xl" href={props.web.Datajson[0].body[1].kedua[0].btn[0].link}>{props.web.Datajson[0].body[1].kedua[0].btn[0].text}</a>
                    </div>
                </div>
                </div>
            </section>
            {/* Services*/}
            <section className="page-section" id="services">
                <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">{props.web.Datajson[0].body[2].service[0].title}</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
  <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
</svg>
                        </div>
                        <h3 className="h4 mb-2">{props.web.Datajson[0].body[2].service[0].service[0].title}</h3>
                        <p className="text-muted mb-0">{props.web.Datajson[0].body[2].service[0].service[0].description}</p>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg>
                        </div>
                        <h3 className="h4 mb-2">{props.web.Datajson[0].body[2].service[0].service[1].title}</h3>
                        <p className="text-muted mb-0">{props.web.Datajson[0].body[2].service[0].service[1].description}</p>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
</svg></div>
                        <h3 className="h4 mb-2">{props.web.Datajson[0].body[2].service[0].service[2].title}</h3>
                        <p className="text-muted mb-0">{props.web.Datajson[0].body[2].service[0].service[2].description}</p>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
                        </div>
                        <h3 className="h4 mb-2">{props.web.Datajson[0].body[2].service[0].service[3].title}</h3>
                        <p className="text-muted mb-0">{props.web.Datajson[0].body[2].service[0].service[3].description}</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* portofolio*/}
            <div id="portofolio">
                <div className="container-fluid p-0 bg-light">
                <div className="row g-0">
                    <div className="col-lg-4 col-sm-6">

                        
                    <a className="portofolio-box" href={props.web.Datajson[0].body[3].portofolio[0].img} title="Project Name">
                        <img className="img-fluid" src={props.web.Datajson[0].body[3].portofolio[0].img} alt="..." />
                        <div className="portofolio-box-caption">
                        <div className="project-category text-white-50">{props.web.Datajson[0].body[3].portofolio[0].title}</div>
                        <div className="project-name">{props.web.Datajson[0].body[3].portofolio[0].name} </div>
                        </div>
                    </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <a className="portofolio-box" href={props.web.Datajson[0].body[3].portofolio[1].img} title="Project Name">
                        <img className="img-fluid" src={props.web.Datajson[0].body[3].portofolio[1].img} alt="..." />
                        <div className="portofolio-box-caption">
                        <div className="project-category text-white-50">{props.web.Datajson[0].body[3].portofolio[1].title}</div>
                        <div className="project-name">{props.web.Datajson[0].body[3].portofolio[1].name}</div>
                        </div>
                    </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <a className="portofolio-box" href={props.web.Datajson[0].body[3].portofolio[2].img} title="Project Name">
                        <img className="img-fluid" src={props.web.Datajson[0].body[3].portofolio[2].img} alt="..." />
                        <div className="portofolio-box-caption">
                        <div className="project-category text-white-50">{props.web.Datajson[0].body[3].portofolio[2].title}</div>
                        <div className="project-name">{props.web.Datajson[0].body[3].portofolio[2].name}</div>
                        </div>
                    </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <a className="portofolio-box" href={props.web.Datajson[0].body[3].portofolio[3].img} title="Project Name">
                        <img className="img-fluid" src={props.web.Datajson[0].body[3].portofolio[3].img} alt="..." />
                        <div className="portofolio-box-caption">
                        <div className="project-category text-white-50">{props.web.Datajson[0].body[3].portofolio[3].title}</div>
                        <div className="project-name">{props.web.Datajson[0].body[3].portofolio[3].name}</div>
                        </div>
                    </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <a className="portofolio-box" href={props.web.Datajson[0].body[3].portofolio[4].img} title="Project Name">
                        <img className="img-fluid" src={props.web.Datajson[0].body[3].portofolio[4].img} alt="..." />
                        <div className="portofolio-box-caption">
                        <div className="project-category text-white-50">{props.web.Datajson[0].body[3].portofolio[4].title}</div>
                        <div className="project-name">{props.web.Datajson[0].body[3].portofolio[4].name}</div>
                        </div>
                    </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <a className="portofolio-box" href={props.web.Datajson[0].body[3].portofolio[5].img} title="Project Name">
                        <img className="img-fluid" src={props.web.Datajson[0].body[3].portofolio[5].img} alt="..." />
                        <div className="portofolio-box-caption p-3">
                        <div className="project-category text-white-50">{props.web.Datajson[0].body[3].portofolio[5].title}</div>
                        <div className="project-name">{props.web.Datajson[0].body[3].portofolio[5].name}</div>
                        </div>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            {/* Call to action*/}
            <section className="page-section bg-secondary text-white" id="contact">
                <div className="container px-4 px-lg-5 text-center">
                <h2 className="mb-4">{props.web.Datajson[0].body[4].follow[0].title}</h2>
                <a className="btn btn-light btn-xl" href={props.web.Datajson[0].body[4].follow[0].btn[0].link}>{props.web.Datajson[0].body[4].follow[0].btn[0].teks}</a>
                </div>
            </section>
            {/* Footer*/}
            <footer className="bg-light py-5">
                <div className="container px-4 px-lg-5"><div className="small text-center text-muted">Copyright © 2022 - {props.web.Datajson[0].body[5].footer}</div></div>
            </footer>
        </div>
    )
}

export async function getServerSideProps(context){
    const locallink ="https://mantappu.herokuapp.com/"
    const onelineLink =""
    const dataResponse = await fetch(locallink);
    const dataJson = await dataResponse.json();
    return{
        props:{
            web:dataJson
        }
    }
}

