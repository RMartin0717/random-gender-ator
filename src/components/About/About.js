import './About.css'

const About = () => {
  return (
    <div className='about-page'>
      <h2 className='content'>About</h2>
      <h3>Want some ideas for how you might use this app?</h3>
      <p className='focus-q about-p'>How do you reconcile the fact that gender as a construct is fake with the fact that your gender is valid? Play and find out.</p>
      <p className='about-p'>There are several ways to approach The Random Gender-ator.</p>
      <div className='ways-to-play'>
        <div className='prompt-card about-p'>
          <p className='card-p'>It can be a fun, silly way to test the boundaries of what gender can be to you as an individual even if you've never thought about it before.</p>
          <p className='card-p'>What "feels" like you?</p>
          <p>Does "froth squirrel" resonate with you in some special way?</p>
        </div>
        <div className='prompt-card about-p'>
          <p className='card-p'>Or think about the Gender-ator as a criticism of the societal pressure on the individual to fit into a box.</p>
          <p>What even are labels? Whatever you want, that's what.</p>
        </div>
        <div className='prompt-card about-p'>
          <p className='card-p'>Maybe for you, the Gender-ator is an escape from the gatekeeping that exists even in queer spaces.</p>
          <p className='card-p'>Why do none of us ever feel "queer enough"? Now I'm a "light-disposable spaceship." You don't get to define what's "light-disposable spaceship" enough.</p>
          <p>Try to stop me.</p>
        </div>
        <div className='prompt-card about-p'>
          <p className='card-p'>It also works as a light-hearted response to the heavy-handed, "there are SO MANY new terms, I just CAN'T EVEN keep up" that so many of us hear from loved ones who cant be bothered to try to see us as we see ourselves.</p>
          <p className='card-p'>Too many gender words?</p>
          <p className='card-p'>FINE.</p>
          <p>Have even more gender words.</p>
        </div>
      </div>
      <p className='about-p'>Wherever you're coming from, play around a save some favorites. Use this app to goof off, find yourself, or tell someone to fuck off. Whatever you need.</p>
    </div>
  )
}

export default About
