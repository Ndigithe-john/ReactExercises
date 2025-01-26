import PropTypes from 'prop-types';
import { useFetcher } from 'react-router-dom';

import Button from '@components/Button';
import { updateOrder } from '@services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>;
    </fetcher.Form>
  );
}

UpdateOrder.propTypes = {
  order: PropTypes.object,
};
export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  console.log(params);
  await updateOrder(params.orderId, data);

  return null;
}
