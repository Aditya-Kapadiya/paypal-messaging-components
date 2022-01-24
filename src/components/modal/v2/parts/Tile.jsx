/** @jsx h */
import { h } from 'preact';
import { useContent } from '../lib';
import Icon from './Icon';

const Tile = ({ header, body, icon, viewName, setViewName }) => {
    const { tileIcons } = useContent('PRODUCT_LIST');

    return (
        <button className="tile" aria-label={`${header} ${body}`} type="button" onClick={() => setViewName(viewName)}>
            <div className="tile__row">
                <div className="tile__col tile__image">
                    <Icon content={tileIcons[icon]} />
                </div>
                <div aria-hidden="true" className="tile__col">
                    <div className="tile__header">{header}</div>
                    <div className="tile__body">{body}</div>
                </div>
            </div>
        </button>
    );
};

export default Tile;
