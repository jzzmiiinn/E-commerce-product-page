import { CartDropdown } from "../cart/CartDropdown";

export const Navbar = () => {
  return (
    <header className="w-full border-b border-[hsl(220,14%,75%)]">
      <div className="mx-auto flex max-w-6xl flex-row items-center justify-between px-6 py-4">
        <div className="flex flex-row items-center gap-10">
          <img src="/logo.svg" alt="Sneakers logo" />

          <ul className="hidden flex-row items-center gap-6 text-[hsl(219,9%,45%)] md:flex">
            <li>
              <a href="#" className="transition-colors hover:text-black">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-black">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-black">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <CartDropdown />

          <button
            type="button"
            aria-label="Open user profile"
            className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <img
              className="h-10 w-10 rounded-full border-2 border-transparent hover:border-orange-500"
              src="/image-avatar.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </header>
  );
};
