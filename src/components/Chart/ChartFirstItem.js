import React from 'react';
import { Link } from 'react-router-dom';
import { changeAlias } from '../../utils/func';
import LinkArtist from '../LinkArtist/LinkArtist';

const ChartFirstItem = ({ title, order, id, artists, thumbnail, renderDropDown, toggleDropDown, renderLazyloadImage}) => (
    <li className="chart-item">
        <div className="chart-item-detail detail-first">
            <div className="chart-item-detail-left">
                <div className="chart-item-order order-first">
                    {renderLazyloadImage('chart', {id, thumbnail})}
                    {order}
                </div>
                <div className="chart-item-info">
                    <div className="chart-item-title ellipsis">
                        <Link to={`/song/${changeAlias(title)}/${id}`}>{title}</Link>
                    </div>
                    <LinkArtist
                        artists={artists}
                        definePath="nghe si"
                    />
                </div>
            </div>
            <div className="chart-item-detail-right">
                <button className="sc-ir">
                    <i className="ion-android-download"></i>
                </button>
                <button className="sc-ir ignore-react-onclickoutside" onClick={() => toggleDropDown('chart', id)}>
                    <i className="ion-more"></i>
                </button>
            </div>
        </div>
        {renderDropDown('chart', {id, thumbnail, artists, title})}
    </li>
);

export default ChartFirstItem;