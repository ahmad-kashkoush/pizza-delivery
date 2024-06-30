import { createOrder } from '@/services/apiRestaurant';
import Button from '@/ui/Button';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  // returns data coming from action
  const formErros = useActionData();
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
              required
            />
          </div>
        </div>

        <div className="mb-5 flex gap-4 sm:flex-row sm:items-center">
          <input
            type="checkbox"
            name="priority"
            className="h-6 w-6 accent-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 focus:ring-offset-2"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label
            className="text-xl font-medium text-stone-700"
            htmlFor="priority"
          >
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <Button disabled={isSubmitting}>
            {isSubmitting ? 'Placing order...' : 'Order now'}
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
    priority: data.priority === 'on',
    cart: data.cart ? JSON.parse(data.cart) : [],
  };
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = 'Not a valid phone number, please try again';
  if (Object.keys(errors).length > 0) return errors;

  //  mutate, write data
  const res = await createOrder(order);
  // //
  return redirect(`/order/${res.id}`);
}

export default CreateOrder;
