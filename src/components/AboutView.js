import Hero from './Hero';


const AboutView = () => {
    return (
      <>
        <Hero text="About Us" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, ut repudiandae magnam distinctio voluptate sed, pariatur delectus temporibus eveniet eligendi optio accusantium numquam nisi voluptas cupiditate quam vel, veritatis quae.
                </p>
              </div>
            </div>
          </div>
      </>
    )
  }

  
export default AboutView;