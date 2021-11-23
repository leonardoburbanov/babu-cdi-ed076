import React from 'react';
import _ from 'lodash';

import Calendly from '../components/Calendly';


export default class SectionCalendly extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');

        return (
            <section id={sectionId} className="block cta-block bg-accent outer">
                <div className="outer">
                    <div className="inner-medium">
                        <Calendly/>
                    </div>
                </div>
            </section>
        );
    }
}
