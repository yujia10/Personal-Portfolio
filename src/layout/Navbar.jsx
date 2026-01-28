const navLinks = [
  {href: "#about", label:"About"},
  {href: "#skills", label:"Skills"},
  {href: "#projects", label:"Projects"},
  {href: "#contat", label:"Contact"},
]

export const Navbar = () => {
  return (
    <header>
      <nav>
        <a>
          YG<span>.</span>
        </a>

        {/* Desktop Nav */}
        <div>
          <div>
            {navLinks.map((link,index) => (
              <a href={link.href} key={index}>{link.label}</a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
