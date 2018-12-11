import React, { Component } from 'react';
import Details from './Details';
import styled from 'styled-components';

const SelectButton = styled.button`
  margin-left: 15px;
  text-align: center;
`;

const DetailNameStyles = styled.span`
  font-size: 20px;
  display: block;
  text-align: center;
`;

class DetailName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails() {
    this.setState(state => ({ showDetails: !state.showDetails }));
  }

  render() {
    const { detailName, details } = this.props;
    const { showDetails } = this.state;
    return (
      <>
        <DetailNameStyles>{detailName}:
          <span>
            <SelectButton
              type="button"
              onClick={this.toggleDetails}
            >
              {showDetails ? 'Return' : 'Select'}
            </SelectButton>
          </span>
        </DetailNameStyles>
        <br />
        {showDetails && <Details details={details} />}
      </>
    );
  }
};

export default DetailName;
