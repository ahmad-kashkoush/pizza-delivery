import EmptyCart from '@/features/cart/EmptyCart';
import { clearCart, getCart, getTotalPrice } from '@/features/cart/cartSlice';
import { createUser } from '@/features/user/userSlice';
import { createOrder } from '@/services/apiRestaurant';
import store from '@/store';
import Button from '@/ui/Button';
import { formatCurrency } from '@/utils/helpers';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const state = useSelector((store) => store.userReducer);
  const totalPrice = useSelector(getTotalPrice);
  const priorityPrice = withPriority * (totalPrice + totalPrice * 0.2);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  // returns data coming from action
  const formErros = useActionData();
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="w-full px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold text-stone-700">
        Ready to order? Let's go!
      </h2>
      {/* action here by default submits to closest route, but keep it explicit */}
      <Form method="POST" action="/order/new">
        <div className="order-field mb-5">
          <label className="sm:basis-40">First Name</label>
          <div className="grow">
            <input
              className="input w-full grow"
              type="text"
              name="customer"
              defaultValue={state.username}
              required
            />
          </div>
        </div>

        <div className="order-field mb-5">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              className="input w-full grow"
              type="tel"
              name="phone"
              defaultValue={state.phone}
              required
            />
            {formErros?.phone ? (
              <p className="mt-2 px-4 text-red-500">{formErros.phone}</p>
            ) : (
              ''
            )}
          </div>
        </div>

        <div className="order-field mb-5">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full grow"
              type="text"
              name="address"
              defaultValue={state.address}
              required
            />
          </div>
        </div>

        <div className="mb-5 flex gap-4 sm:flex-row sm:items-center">
          <input
            type="checkbox"
            name="priority"
            defaultChecked={state.priority || false}
            className="h-6 w-6 accent-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 focus:ring-offset-2"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label
            className="text-xl font-medium text-stone-700"
            htmlFor="priority"
          >
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? 'Placing order...'
              : `Order now ${formatCurrency(totalPrice + priorityPrice)}`}
          </Button>
        </div>
        <input
          type="text"
          hidden={true}
          className="!hidden"
          name="cart"
          defaultValue={JSON.stringify(cart)}
        />
      </Form>
    </div>
  );
}

export async function action({ request }) {
  // get request
  const formData = await request.formData();
  // customize request object
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    priority: data.priority === 'true',
    cart: data.cart ? JSON.parse(data.cart) : [],
  };
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = 'Not a valid phone number, please try again';
  if (Object.keys(errors).length > 0) return errors;

  //  mutate, write data
  store.dispatch(
    createUser({
      username: order.customer,
      phone: order.phone,
      priority: order.priority,
    }),
  );
  const res = await createOrder(order);
  //
  store.dispatch(clearCart());
  return redirect(`/order/${res.id}`);
}

export default CreateOrder;

/* 

address
: 
"ok"
cart
: 
[{…}]
customer
: 
"ahmed"
phone
: 
"01211987170"
priority
: 
true
*/
