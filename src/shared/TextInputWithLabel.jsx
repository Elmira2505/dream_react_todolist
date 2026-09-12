export default function TextInputWithLabel({elementId, labelText, onChange, ref, value}) {
  console.log(labelText);

  return (
    <>
      <label htmlFor={elementId}>{labelText}</label>
      <input
        id={elementId}
        type="text"
        ref={ref}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
