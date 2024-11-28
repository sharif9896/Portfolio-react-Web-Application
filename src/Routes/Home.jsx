import {useTypewriter,Cursor} from "react-simple-typewriter";
const Home = () => {

    const [typEffect] = useTypewriter({
        words:['Frontend Developer','HTML','CSS','JavaScript','Bootstrap','Tailwind Css','Frontend Frameworks-React.js','Redux','Redux Toolkit','python','Java','C','C++','PHP','MYSQL','Databases','Graphic Designer'],
        loop:{},
        typeSpeed: 200,
        delaySpeed: 180,
    })
  return (
    <>
   <center>
      <div class="containers col-xxl-8 px-4 ">
        <div class="row flex-lg-row-reverse align-items-center g-5 ">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
            src="./images/cvd.PNG"
            //   src="./images/nin-removebg-preview.png"
              class="width "
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            
            <div class="display-8  text-body-emphasis lh-1 mb-3">
            <div className="hed">I'm Sharif Rayan {' '}- <b className="hed1">{typEffect}|</b>  </div>
            </div>
            <p class="lead momo" >
            I’m a passionate and detail-oriented Frontend Developer with expertise in web technologies like HTML, CSS, JavaScript, and modern frameworks such as React. Eager to evolve into a    full-stack developer, currently exploring the MERN (MongoDB, Express, React, Node.js) stack and React Native for mobile application development. Known for building responsive,   user-friendly interfaces, improving user experiences, and delivering high-quality front-end solutions.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="back">
                Contact
              </button>
              {/* <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button> */}
            </div>
          </div>
        </div>
      </div>
      </center>
      {/* <div className="hero-container">
                <div className="left-hero">

                </div>
                <div className="right-hero">

                </div>
            </div> */}
            
    </>
  );
};
export default Home;
