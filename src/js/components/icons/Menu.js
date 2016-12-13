import React from 'react';
import classNames from 'classnames';


const Icon = ({ className = '', open }) => (
    <svg is width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
        class={classNames({
            [className]: className,
            'is-open': open
        })}
    >
        <g is stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g is transform="translate(-14.000000, -17.000000)" fill="#FFFFFF">
                <g is transform="translate(14.000000, 17.000000)">
                    <g is transform="translate(2.000000, 4.000000)">
                        <rect is class="bar1" x="0" y="0" width="21" height="3" />
                        <rect is class="bar2" x="0" y="7" width="21" height="3" />
                        <rect is class="bar3" x="0" y="14" width="21" height="3" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

Icon.propTypes = {
    className: React.PropTypes.string,
    open: React.PropTypes.bool
};

export default Icon;
