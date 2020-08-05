import React, { PureComponent } from 'react';
import { UncontrolledDropdown as RUncontrolledDropdown } from 'reactstrap';

/** @class
 * This class is used as react-strap's UncontrolledDropdown Compontent
 */
class UncontrolledDropdown extends PureComponent {
  render() {
    return <RUncontrolledDropdown {...this.props} />;
  }
}

export default UncontrolledDropdown;
