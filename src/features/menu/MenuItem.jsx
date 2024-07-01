import Button from '@/ui/Button';
import { formatCurrency } from '@/utils/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="mb-4 flex items-end gap-4 border-b-2 pb-2">
      <img
        className={`h-24 w-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex-1">
        <p className="text-semibold font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-6">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
      <Button type="small" className="justify-self-end">
        Add to cart
      </Button>
    </li>
  );
}

export default MenuItem;
