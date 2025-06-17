function ButtonWhite(props) {
  const { text = "button", link = "#" } = props;

  return (
    <a href={link} className="bg-white text-red-500 px-2.5 py-1 rounded-sm hover:bg-stone-100">
      {text}
    </a>
  );
}

function ButtonPink(props) {
  const { text = "button", link = "#" } = props;

  return (
    <a href={link} className="tx-white hover:bg-red-700 bg-red-500 px-2.5 py-1 rounded-sm">
      {text}
    </a>
  );
}

export {ButtonWhite, ButtonPink}
