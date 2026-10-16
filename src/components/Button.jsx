import "./Button.css";

export default function Button({ children, variant = "primary", as: Component = "button", ...props }) {
  return (
    <Component className={`btn btn--${variant}`} {...props}>
      {children}
    </Component>
  );
}
