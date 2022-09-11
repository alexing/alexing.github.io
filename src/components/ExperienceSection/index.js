import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import outbrainLogo from '../../assets/images/experience/outbrain.png'
import chorusLogo from '../../assets/images/experience/chorus.png'
import namogooLogo from '../../assets/images/experience/namogoo.png'
import cactusLogo from '../../assets/images/experience/cactus.jpg'
import awLogo from '../../assets/images/experience/aw.png'
import coreLogo from '../../assets/images/experience/core.jpg'


class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="RECENT EXPERIENCE">
        <div className="row">
          <ExperienceUnit
            logo={outbrainLogo}
            colour='#FFFFFF'
            title='Outbrain'
            link='https://www.outbrain.com'
            timeperiod='2019 - present'
            position='Machine Learning Engineer'
            subtitle="AutoML team, Recommendations group. Owner of various internal products that help data scientists automate their work, allowing them to deploy models at a large scale. End to end responsibilities: backend and frontend development, machine learning research, MLops & product management."
          />
          <ExperienceUnit
            logo={namogooLogo}
            colour='#403949'
            title='Namogoo'
            link='http://www.namogoo.com/'
            timeperiod='2018 - 2019'
            position='Data Engineer'
            subtitle='Senior engineer in Data Infrastructure & Algorithms team. Carried out Data Engineering and Machine Learning projects and tasks.'
          />
          <ExperienceUnit
            logo={chorusLogo}
            colour='#58BCD2'
            title='Chorus.ai'
            link='http://www.chorus.ai/'
            timeperiod='2018'
            position='Data Scientist Intern'
            subtitle='Analyzed utterances of sales calls using Natural Language Processing and Machine Learning techniques to get new insights which helped to attract new clients.'
          />
          {/*
          <ExperienceUnit
            logo={awLogo}
            colour='#AFCA5B'
            title='AW Software'
            link='http://www.awsoftware.com.ar/'
            timeperiod='2015-2016'
            subtitle='Software Engineer: worked offering software solutions based on iOS applications projects for the company’s clients. Amongst them was BBVA Banco Francés.'
          />
          <ExperienceUnit
            logo={coreLogo}
            colour='#FFFFFF'
            title='Core Security'
            link='https://www.secureauth.com/'
            timeperiod='2014'
            subtitle='Cyber Security Research Internship: worked on diverse projects involving vulnerating basic systems, network sniffing, cryptography concepts and disassembling code among others.'
          />
        */}
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
