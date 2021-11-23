import React from 'react';
import _ from 'lodash';

import { htmlToReact,markdownify } from '../utils';
import CtaButtons from './CtaButtons';
import Calendly from '../components/Calendly';


export default class SectionCalendly extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const actions = _.get(section, 'actions');
        const content = _.get(section, 'content');

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
