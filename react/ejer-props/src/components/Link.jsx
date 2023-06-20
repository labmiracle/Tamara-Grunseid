export default function Link({ href, openInNewTab, children }) {
  return (
    <a href={href} target={openInNewTab ? "_blank" : "_self"}>
      {children}
    </a>
  );
}
