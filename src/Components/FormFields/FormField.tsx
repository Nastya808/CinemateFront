import "./Fields.css";

const Fields = (props: any) => {
  const { registerFormHook, placeholder, type, hasError } = props;

  return (
    <input
      {...registerFormHook}
      placeholder={placeholder}
      type={type}
      className={`field ${hasError ? "error" : ""}`}
    />
  );
};

export default Fields;