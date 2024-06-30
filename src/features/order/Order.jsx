// Test ID: IIDSAT

import OrderItem from '@/features/order/OrderItem';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { getOrder } from '@/services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';

const order = {
  id: 'ABCDEF',
  customer: 'Jonas',
  phone: '123456789',
  address: 'Arroios, Lisbon , Portugal',
  priority: true,
  estimatedDelivery: '2027-04-25T10:00:00',
  cart: [
    {
      pizzaId: 7,
      name: 'Napoli',
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: 'Diavola',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: 'Romana',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: '-9.000,38.000',
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const fetchedOrder = useLoaderData();
  // console.log(fetchedOrder);
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = fetchedOrder;
  console.log(fetchedOrder);
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6">
      <div className="flex flex-wrap items-center justify-between py-2">
        <h2 className="h-common-style"> Order #{id} Status</h2>

        <div className="q space-x-2">
          {priority && (
            <span className="rounded-2xl bg-red-500 px-3 py-1 text-sm font-medium uppercase text-white">
              Priority
            </span>
          )}
          <span className="rounded-2xl bg-green-500 px-3 py-1 text-sm font-medium uppercase text-white">
            {status} order
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between bg-stone-200 px-4 py-6">
        <p className="font-medium text-stone-700">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="my-8">
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className="mt-4 bg-stone-200 px-4 py-6">
        <p className="mb-2 text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="mb-2 text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-lg font-semibold text-stone-700">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
export default Order;
