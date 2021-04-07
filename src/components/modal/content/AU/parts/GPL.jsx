/** @jsx h */
import { h } from 'preact';
import { useContent, useProductMeta } from '../../../lib';

const auCurrencyFormat = string => string.replace(/\.00/g, '');

const GPL = () => {
    const { headline, subHeadline, terms, instructions } = useContent('GPL');
    const { qualifying: qualifyingString } = useProductMeta('GPL');
    const qualifying = qualifyingString?.toLowerCase() === 'true';

    return (
        <section className="content-body">
            <div className="description">
                <h2>{headline.singleProduct}</h2>

                <h3>{qualifying ? subHeadline.qualified : auCurrencyFormat(subHeadline.unqualified)}</h3>

                <div className="call-to-action">
                    <div>
                        <p>
                            <span className="d-inline-block">
                                {instructions.title[0]} <b className="dark-text">{instructions.title[1]}</b>
                            </span>{' '}
                            <span className="d-inline-block">
                                {instructions.title[2]} <b className="dark-text">{instructions.title[3]}</b>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <hr className="divider" />

            <div className="terms">
                <ul>
                    {terms.map(term => (
                        <li>{auCurrencyFormat(term)}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default GPL;
