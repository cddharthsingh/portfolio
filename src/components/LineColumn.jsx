export default function LineColumn({ height = 650 }) {
    const lineCount = Math.floor(height / 20) - 1;
    const lineNumber = [...Array(lineCount).keys()];
    return (
        <div className="flex flex-col w-14 bg-zinc-900 text-gray-700 text-right pr-2 select-none">
            {lineNumber.map((number) => (
                <div key={number} className="text-sm">
                    {number + 1}
                </div>
            ))}
        </div>
    );
}
