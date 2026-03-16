import profile from "../assets/profile.jpg"

function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <div>
          <h1>
            Hi, I'm <span>Aakash Chauhan</span>
          </h1>
          <p>Frontend Developer specializing in React</p>
          
        </div>
  <div className="profile-wrapper">
      <div className="profile-border">
        <img src={profile} alt="profile" />
      </div>
    </div>
       
      </div>
    </section>
  )
}

export default Hero