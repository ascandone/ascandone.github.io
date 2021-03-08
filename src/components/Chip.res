@react.component
export make = (~children, ~dark) =>
  <span className={"rounded p-px bg-gradient-45 " ++ CommonStyles.gradient}>
    <span
      className={"rounded px-2 " ++ if dark {
        "bg-darkest-gray"
      } else {
        "bg-white"
      }}>
      <span
        className={"text-xs font-mono antialiased leading-none " ++ if dark {
          "text-gray-200"
        } else {
          "text-gray-900"
        }}>
        {children}
      </span>
    </span>
  </span>
