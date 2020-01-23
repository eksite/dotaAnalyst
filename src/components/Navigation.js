import React from 'react';

import { Link } from 'react-router-dom';

const Links = ({ items }) =>
    Object.entries(items).map(arr => (
        <Link key={arr[1]} to={arr[1]}>
            {arr[0]}
        </Link>
    ));
export default Links;
