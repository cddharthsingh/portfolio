export default function LineColumn() {
    const lineNumber = [...Array(79).keys()];
    return (
        <div className="flex flex-col w-14 bg-zinc-900 text-gray-700 text-right pr-2">
            {lineNumber.map((number) => (
                <div key={number} className="text-sm">
                    {number + 1}
                </div>
            ))}
        </div>
    );
}
