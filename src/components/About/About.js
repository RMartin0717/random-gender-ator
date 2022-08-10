import './About.css'

const About = () => {
  return (
    <div className='about-page'>
      <h2 className='content'>About</h2>
      <h3 className='question'>How do you reconcile the fact that gender as a construct is fake with the fact that your gender is valid?</h3>
      <h4 className='play'>Play and find out with a few approachs to The Random Gender-ator:</h4>
      <div className='ways-to-play'>
        <div className='prompt-card about-p'>
          <p className='card-p'>It can be a fun, silly way to test the boundaries of what gender can be to you as an individual even if you've never thought about it before.</p>
          <p>Does "froth squirrel" resonate with you in some special way?</p>
        </div>
        <div className='prompt-card about-p'>
          <p className='card-p'>Or think about the Gender-ator as a criticism of the societal pressure on the individual to fit into a box.</p>
          <p>What even are labels? Literally whatever you want.</p>
        </div>
        <div className='prompt-card about-p'>
          <p className='card-p'>Maybe for you, the Gender-ator is an escape from the gatekeeping that exists even in queer spaces.</p>
          <p>Nobody can tell you you're not queer enough or "bubble goat" enough here.</p>
        </div>
        <div className='prompt-card about-p'>
          <p className='card-p'>It also works as a light-hearted response to the heavy-handed, "there are SO MANY new terms, I just CAN'T EVEN keep up" that so many of us deal with so often.</p>
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
