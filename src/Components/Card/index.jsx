import React from '@heroicons/react';
import PropTypes from 'prop-types';

const Card = ({ label, value }) => {
    return (
        <div className="ItemCard">
            <span className="label">{`${label} : `}</span>
            <span className="value">{value}</span>
        </div>
    );
};

Card.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};
export default Card;
