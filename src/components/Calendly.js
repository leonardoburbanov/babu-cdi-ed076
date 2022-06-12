import React from 'react'
import {InlineWidget} from 'react-calendly'
export default class Calendly extends React.Component {
  componentDidMount() {
    // whatever stuff you need here
  }
  componentWillUnmount() {
    // whatever cleanup stuff you need here
  }
  render(){
    return (
      <div>
        <InlineWidget 
            url="https://calendly.com/babu-meetings/evaluacion"   
            styles={ {
                height: '1000px'
              }}
            pageSettings  = { {
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '00a2ff',
                textColor: '4d5055'
              }}
            prefill = { {
                email: '',
                firstName: '',
                lastName: '',
                name: '',
                customAnswers: {
                  a1: '',
                  a2: '',
                  a3: '',
                  a4: '',
                  a5: '',
                  a6: '',
                  a7: '',
                  a8: '',
                  a9: '',
                  a10: ''   
                }
              }}
            utm = { {
                utmCampaign: '01PW-Agendamiento',
                utmContent: 'Agendamiento evaluación',
                utmMedium: 'SEO',
                utmSource: 'PaginaWeb',
                utmTerm: 'Spring'
              }}
        />
      </div>
    );
  }
}