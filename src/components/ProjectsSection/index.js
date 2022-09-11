import React from 'react'
import Section from '../Section'
import ProjectUnit from '../ProjectUnit'

import lyricsLogo from '../../assets/images/projects/lyrics.png'
import spotifyRewrappedLogo from '../../assets/images/projects/rewrapped.png'
import dataDataLogo from '../../assets/images/projects/datadata.jpeg'
import musicMagalLogo from '../../assets/images/projects/musicmagal2.jpeg'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="PROJECTS">
        <div className="row">
          <ProjectUnit
            logo={lyricsLogo}
            colour="#efefda"
            title="Bewildering Brain"
            link="https://towardsdatascience.com/bewildering-brain-332d5192e95b?source=friends_link&sk=201802393d3ef10cafcdeb4a2d6db955"
            subtitle="An exploration of Markov Chains and RNNs (Recurrent Neural Networks), a comparison and analysis of which one outputs better results and how they both perform when predicting the lyrics of Bob Dylan (or Luis Alberto Spinetta in the Spanish version). Pulled lyrics from Genius API and guided myself with Spotify’s Web API."
            github="https://github.com/alexing/lyrics_prediciton"
            medium="https://towardsdatascience.com/bewildering-brain-332d5192e95b?source=friends_link&sk=201802393d3ef10cafcdeb4a2d6db955"
            

            additional_link1="https://towardsdatascience.com/bewildering-brain-332d5192e95b?source=friends_link&sk=201802393d3ef10cafcdeb4a2d6db955"
            additional_link1_icon="fa fa-medium"
            additional_link1_title="Bewildering Brain: Bob Dylan's version (in English)"

            additional_link2="https://medium.com/datos-y-ciencia/oraciones-artificiales-88b8c66a6e3d"
            additional_link2_icon="fa fa-medium"
            additional_link2_title="Oraciones artificiales: Luis Alberto Spinetta's version (in Spanish)"

            additional_link3="https://www.lanacion.com.ar/tecnologia/creo-bot-compone-letras-estilo-luis-alberto-nid2246043"
            additional_link3_icon="fa fa-newspaper-o"
            additional_link3_title="Article published in La Nacion, Argentina's most prestigious newspaper."

            additional_link4="https://silencio.com.ar/noticias/lo-ultimo/crean-un-bot-capaz-de-escribir-en-el-estilo-de-luis-alberto-spinetta-40784/"
            additional_link4_icon="fa fa-newspaper-o"
            additional_link4_title="Article published in Silencio.com.ar, a music medium from Argentina."
          />


          <ProjectUnit
            logo={spotifyRewrappedLogo}
            colour="#B89ACA"
            title="Spotify ReWrapped"
            link="https://towardsdatascience.com/spotify-rewrapped-e2a7cc94fb4e"
            subtitle="Pulling data from my Spotify and Last.fm accounts using their APIs, I did some time series analysis to check which were my real stats and see if what Spotify told me in my Spotify Wrapped end-of-year summary was correct. Also did some interesting data visualization to help explain my insights."
            github="https://github.com/alexing/spotify_rewrapped"
            medium="https://towardsdatascience.com/spotify-rewrapped-e2a7cc94fb4e"
          />
          <ProjectUnit
            logo={dataDataLogo}
            colour="#1A1A19"
            title="Data, data"
            link="https://towardsdatascience.com/data-data-1fedfac91c79"
            subtitle="An immersive analysis into Jorge Drexler’s universe through statistical exploration of his music and lyrics."
            github="https://github.com/alexing/datadata"
            medium="https://towardsdatascience.com/data-data-1fedfac91c79"
            additional_link1="https://medium.com/@alexing/data-data-b82201ec1cf4"
            additional_link1_icon="fa fa-medium"
            additional_link1_title="Spanish translation"


            additional_link2="https://www.elobservador.com.uy/nota/-cual-es-la-palabra-mas-usada-por-jorge-drexler-en-sus-canciones--20181020141350"
            additional_link2_icon="fa fa-newspaper-o"
            additional_link2_title="Article published in El Observador, one of the Uruguayan newspapers with widest distribution."
            additional_link3="https://www.redaccion.com.ar/inmersion-en-el-mundo-de-jorge-drexler-a-traves-de-la-exploracion-estadistica-de-su-letra-y-musica/"
            additional_link3_icon="fa fa-newspaper-o"
            additional_link3_title="Article published in Redaccion.com.ar, a new and modern Argentinean medium."
          />
          <ProjectUnit
            logo={musicMagalLogo}
            colour="#DAD9D6"
            title="Music Magal"
            link="https://hackernoon.com/musicmagal-c93e9dabd01a?gi=651af09b85f4"
            subtitle="MusicMagal is a group recommendation system that recommends n music tracks to a group of m users taking all of the m users preferences into account. Used last.fm data, an alternating least squares model and item2vec embeddings. After computing and when the resulting playlist is output, we create a real playlist using Spotify Web."
            github="https://github.com/alexing/musicmagal"
            medium="https://hackernoon.com/musicmagal-c93e9dabd01a"
            timeperiod="2018"
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
