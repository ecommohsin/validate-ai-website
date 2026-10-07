type EmphasizedTextProps = {
  text: string;
  emphasis: string;
};

export function EmphasizedText({ text, emphasis }: EmphasizedTextProps) {
  const index = text.indexOf(emphasis);
  if (index === -1) {
    return <>{text}</>;
  }
  return (
    <>
      {text.slice(0, index)}
      <strong className="font-semibold text-navy">{emphasis}</strong>
      {text.slice(index + emphasis.length)}
    </>
  );
}
