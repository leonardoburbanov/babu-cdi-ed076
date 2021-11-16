import React from 'react';
import _ from 'lodash';

import { htmlToReact, withPrefix } from '../utils';

export default class SectionReviews extends React.Component {
    renderReview(review, index) {
        const content = _.get(review, 'content');
        const avatar = _.get(review, 'avatar');
        const avatarAlt = _.get(review, 'avatar_alt');
        const author = _.get(review, 'author');
        const author_desc = _.get(review, 'author_desc');
        
        return (
            <blockquote key={index} className="cell review">
                <div className="card">
                    <p className="review-text">{htmlToReact(content)}</p>
                    <footer className="review-footer">
                        {avatar && <img className="review-avatar" src={withPrefix(avatar)} alt={avatarAlt} />}
                        {author && <cite className="review-author">{author}</cite>}
                    </footer>
                    <footer className="review-footer">
                        {author_desc && <cite className="review-author-desc">{author_desc}</cite>}
                    </footer>
                    
                </div>
            </blockquote>
        );
    }

    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const background = _.get(section, 'background');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const reviews = _.get(section, 'reviews');

        return (
            <section id={sectionId} className={`block reviews-block bg-${background} outer`}>
                <div className="block-header inner-small">
                    {title && <h2 className="block-title">{title}</h2>}
                    {subtitle && <p className="block-subtitle">{htmlToReact(subtitle)}</p>}
                </div>
                {reviews && (
                    <div className="inner">
                        <div className="grid">{_.map(reviews, (review, index) => this.renderReview(review, index))}</div>
                    </div>
                )}
            </section>
        );
    }
}
