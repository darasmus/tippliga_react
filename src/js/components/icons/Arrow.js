import React from 'react';


const colors = {
    grey: '#666666',
    orange: '#fa7d19',
    white: '#ffffff',
    whiteThree: '#e8e8e8'
};

const Icon = ({ open = false, color = 'white', className = '' }) => (
    open
    ? <svg is width="14px" height="10px" viewBox="0 0 14 10" version="1.1" xmlns="http://www.w3.org/2000/svg" class={`icon-arrow ${className}`}>
        <g is stroke="none" stroke-width="1.3" fill="none" fill-rule="evenodd">
            <g is transform="translate(-74.000000, -22.000000)" stroke={colors[color]} fill={colors[color]}>
                <g is transform="translate(74.000000, 22.000000)">
                    <polygon is transform="translate(7.500000, 4.860457) rotate(-270.000000) translate(-7.500000, -4.860457) " points="5.67706837 -2.27373675e-13 5.00053864 0.761259254 8.6464019 4.86065961 5 8.95985712 5.67706837 9.72091353 9.99371589 4.86755617" />
                </g>
            </g>
        </g>
    </svg>
    : <svg is width="10px" height="14px" viewBox="0 0 10 14" version="1.1" xmlns="http://www.w3.org/2000/svg" class={`icon-arrow ${className}`}>
        <g is stroke="none" stroke-width="1.3" fill="none" fill-rule="evenodd">
            <g is transform="translate(-101.000000, -44.000000)" stroke={colors[color]} fill={colors[color]}>
                <g is transform="translate(106.000000, 51.000000) rotate(-90.000000) translate(-106.000000, -51.000000) translate(99.000000, 46.000000)">
                    <polygon is transform="translate(7.500000, 4.860457) rotate(-270.000000) translate(-7.500000, -4.860457) " points="5.67706837 -2.27373675e-13 5.00053864 0.761259254 8.6464019 4.86065961 5 8.95985712 5.67706837 9.72091353 9.99371589 4.86755617" />
                </g>
            </g>
        </g>
    </svg>
);

Icon.propTypes = {
    open: React.PropTypes.bool,
    className: React.PropTypes.string,
    color: React.PropTypes.oneOf(Object.keys(colors))
};

export default Icon;
