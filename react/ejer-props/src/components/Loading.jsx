export default function Loading({ show, children }) {
  if (show) {
    return <>{children}</>;
  } else {
    return <p>{"Loading..."}</p>;
  }
}
