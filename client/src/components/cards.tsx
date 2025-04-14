interface CardProps {
  Job: string;
  stat1: string;
  stat2: string;
  stat3: string;
  stat4: string;
  stat5: string;
}

export default function Card({ Job, stat1, stat2, stat3, stat4, stat5 }: CardProps) {
  return (
    <div className="w-full bg-[#1F2937] border border-gray-600 rounded-lg p-4 m-4">
      <h2 className="text-[#C084FC] text-xl font-semibold mb-3">{Job}</h2>
      <ul className="list-disc list-inside text-white space-y-1">
        <li>{stat1}</li>
        <li>{stat2}</li>
        <li>{stat3}</li>
        <li>{stat4}</li>
        <li>{stat5}</li>
      </ul>
    </div>
  );
}
