type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition duration-300">
      {text}
    </button>
  );
}