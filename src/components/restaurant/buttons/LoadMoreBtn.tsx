export const LoadMoreBtn = ({ onClickHandler }) => {
  return (
    <div className="flex-1 flex flex-row my-5 items-center justify-center">
      <hr className="border-t border-gray-300 my-3 w-full" />
      <button
        type="button"
        onClick={() => onClickHandler()}
        className="border border-gray-300 px-80 py-2 rounded-lg whitespace-nowrap text-slate-500"
      >
        Load more Data
      </button>
      <hr className="border-t border-gray-300 my-3 w-full" />
    </div>
  );
};
