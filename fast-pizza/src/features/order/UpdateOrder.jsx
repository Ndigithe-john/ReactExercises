import PropTypes from 'prop-types';

import Button from '@components/Button';

function UpdateOrder({ order }) {
  return <Button type="primary">Make Priority</Button>;
}

UpdateOrder.propTypes = {
  order: PropTypes.object,
};
export default UpdateOrder;
