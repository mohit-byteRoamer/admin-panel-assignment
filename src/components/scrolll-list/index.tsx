const ScrollList = ({ list }) => {
    return (
        <div className="bg-white h-[800px] overflow-x-hidden overflow-y-scroll flex flex-col p-4 rounded-lg w-full custom-scrollbar">
            {list.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center w-full gap-5 py-2"
                >
                    <div className="w-[48%] flex justify-end text-sm font-semibold">{item.label}</div>
                    <div className="w-[48%] text-gray-500 text-sm font-medium">{item.value}</div>
                </div>
            ))}
        </div>
    );
};

export default ScrollList;
