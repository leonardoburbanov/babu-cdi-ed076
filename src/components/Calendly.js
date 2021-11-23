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
            url="https://calendly.com/leofr7nco/15min"   
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
                email: 'test@test.com',
                firstName: 'Jon',
                lastName: 'Snow',
                name: 'Jon Snow',
                customAnswers: {
                  a1: 'a1',
                  a2: 'a2',
                  a3: 'a3',
                  a4: 'a4',
                  a5: 'a5',
                  a6: 'a6',
                  a7: 'a7',
                  a8: 'a8',
                  a9: 'a9',
                  a10: 'a10'   
                }
              }}
            utm = { {
                utmCampaign: 'Spring Sale 2019',
                utmContent: 'Shoe and Shirts',
                utmMedium: 'Ad',
                utmSource: 'Facebook',
                utmTerm: 'Spring'
              }}
        />
      </div>
    );
  }
}