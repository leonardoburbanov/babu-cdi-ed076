import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import { htmlToReact, withPrefix, markdownify } from '../utils';
import Calendly from '../components/Calendly';
import CtaButtons from '../components/CtaButtons';


export default class agendar extends React.Component {
    render() {
        const page = _.get(this.props, 'page');
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const image = _.get(page, 'image');
        const imageAlt = _.get(page, 'image_alt');
        const markdownContent = _.get(page, 'markdown_content');
        const actions = _.get(section, 'actions');

        return (
            <Layout page={page} config={config}>
                <div className="outer">
                    <div className="inner-medium">
                        <article className="post post-full">
                            <header className="post-header">
                                <h1 className="post-title">{title}</h1>
                                {subtitle && <div className="post-subtitle">{htmlToReact(subtitle)}</div>}
                            </header>
                            {image && (
                                <div className="post-image">
                                    <img src={withPrefix(image)} alt={imageAlt} />
                                </div>
                            )}
                            
                            {markdownContent && <div className="post-content">{markdownify(markdownContent)}</div>}
                            <Calendly/>
                        </article>
                    </div>
                </div>
            </Layout>
        );
    }
}
