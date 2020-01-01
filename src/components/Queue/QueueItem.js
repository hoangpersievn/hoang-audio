import React from 'react';
import { Link } from 'react-router-dom';
import { changeAlias } from '../../utils/func';
import LinkArtist from '../LinkArtist/LinkArtist';

const QueueItem = ({ id, thumbnail, artists, title, renderLazyloadImage, actDeleteQueueItem }) => {
    
    return (
        <li className="list-item">
            {renderLazyloadImage('queue', { id, thumbnail })}
            <div className="queue-list-info">
                <div className="queue-track-title ellipsis">
                    <Link to={`/song/${changeAlias(title)}/${id}`}>{title}</Link>
                </div>
                <LinkArtist
                    artists={artists}
                    definePath="nghe si"
                />
            </div>
            <div className="queue-track-actions">
                <i className='ion-android-download'></i>
                <i className="ion-trash-b" onClick={() => actDeleteQueueItem(id)}></i>
            </div>
        </li>
    );
};

export default QueueItem;