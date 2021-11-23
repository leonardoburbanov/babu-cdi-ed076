import React from 'react';
import _ from 'lodash';

import components,{ Layout } from '../components/index';
import { htmlToReact, withPrefix, markdownify } from '../utils';
import Calendly from '../components/Calendly';


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
        const sections = _.get(page, 'sections');
        const posts = _.get(this.props, 'posts');

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
                            
                            
                           
                        </article>
                    </div>
                </div>
                {_.map(sections, (section, index) => {
                    const sectionType = _.get(section, 'type');
                    const component = _.upperFirst(_.camelCase(sectionType));
                    if (!component) {
                        throw new Error(`page section does not have the 'type' property, page: ${pageUrl}`);
                    }
                    const Component = components[component];
                    if (!Component) {
                        throw new Error(`no component matching the page section's type: ${sectionType}`);
                    }
                    return <Component key={index} section={section} data={data} posts={posts} />;
                })}
                 <Calendly/>
            </Layout>
        );
    }
}
