export default function Card(props) {
  const {
    src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg",
    title = "title",
    realPrice = "RP 500,000",
    price = "Rp 100,000",
    cat = "category",
    link = "#",
  } = props;

  return (
    <div className="bg-white relative w-48 rounded-sm overflow-hidden shrink-0">
      <a href={link} className="h-full w-full">
        <div className="relative h-40 overflow-hidden">
          <img className="w-full h-full object-cover" src={src} alt={title} />
        </div>
        <div className="px-2 pt-0.5 pb-1">
          <div className="font-semibold text-base">{title}</div>
          <div className="font-bold text-red-500">Rp. {price}</div>
          <div className="flex justify-between items-center">
            <div className="text-xs text-stone-500">{cat}</div>
            <div className="text-xs line-through text-stone-400">
              Rp. {realPrice}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
