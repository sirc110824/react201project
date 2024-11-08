import Hero from './Hero';

const Home = () => {
    return (
      <>
        <Hero text="Welcome to React 201"/>
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

export default Home;