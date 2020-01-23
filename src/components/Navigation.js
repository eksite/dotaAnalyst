import React from 'react';

import { Link } from 'react-router-dom';

const Links = ({ items }) => {
    const res = Object.entries(items).map(arr => (
        <Link key={arr[1]} to={arr[1]}>
            {arr[0]}
        </Link>
    ));
    return res;
};
export default Links;
