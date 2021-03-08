open Bindings.Fontawesome
open React

module LinkIcon = {
  @react.component
  let make = (~href, ~icon) =>
    <div
      className="cursor-pointer transition-colors duration-300 hover:bg-dark-gray flex h-12 w-12 items-center justify-center ">
      <a href rel="noopener noreferrer" target="__blank">
        <FontAwesomeIcon icon className="fill-current" size=#lg />
      </a>
    </div>
}

@react.component
let make = () => {
  let keywordClass = `text-darkest-gray -mx-1 px-1 animate-gradient ${CommonStyles.gradient}`

  <div className="max-w-md mx-auto">
    <h1 className="text-5xl font-extrabold text-white leading-snug font-serif">
      {"Hi, I'm Alessandro."->string}
      <br />
      {" I "->string}
      <span className="appear">
        <span className={`bg-gradient-45 animate-gradient-a ${keywordClass}`}>
          {"design"->string}
        </span>
        {" and "->string}
        <span className={`bg-gradient-150 animate-gradient-b ${keywordClass}`}>
          {"build"->string}
        </span>
        {"* things."->string}
      </span>
    </h1>
    <p className="mt-6 text-sm text-gray-200 font-light">
      {"*Also, I usually break them"->string}
    </p>
    <div className="h-16" />
    <div className="text-gray-200 flex space-x-4 -ml-4">
      <LinkIcon
        href="https://www.linkedin.com/in/alessandro-scandone-035b241a2/" icon={faLinkedin}
      />
      <LinkIcon href="https://github.com/ascandone" icon={faGithub} />
      <LinkIcon href="https://www.instagram.com/alescandone/" icon={faInstagram} />
    </div>
  </div>
}
