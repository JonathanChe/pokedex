// npm installs
import React from 'react';
import styled from 'styled-components';

// rel path imports
import flattenArray from '../../helpers';

// styled-components
const DetailsLiItem = styled.li`
  text-align: center;
  list-style: none;
  font-style: italic;
`;

const DetailsTitleItem = styled.h3`
  text-align: center;
`;

// helper function to help extract data from fetched data
// TODO - create unique identifier for below components
function extractData(details, idx = 0) {
  const collection = [];
  // base-case
  if (typeof details !== 'object') {
    return (
      <DetailsLiItem key={details + ++idx}>
        {typeof details === 'boolean' ? details.toString() : details}
      </DetailsLiItem>
    );
  } else if (Array.isArray(details)) {
    // iterate through the array and recursively pass each value as an arg
    details.forEach(detail => collection.push(extractData(detail, ++idx)));
  } else {
    const storage = [];
    const keys = Object.keys(details);
    for(const key of keys) {
      storage.push(<DetailsTitleItem key={++idx + key}>{key}</DetailsTitleItem>);
      storage.push(extractData(details[key], ++idx));
    }
    return storage;
  }
  return collection;
}

const Details = (props) => {
  const data = extractData(props);
  const flattenData = flattenArray(data);
  return (
    <div>
      {flattenData}
      <br />
    </div>
  );
};

export default Details;
