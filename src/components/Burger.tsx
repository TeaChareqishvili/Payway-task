import burger from "../assets/burger.png";

export default function Burger() {
  return (
    <div className="lg:hidden">
      <button>
        <img
          className="cursor-pointer w-[22px] h-[17px]"
          src={burger}
          alt="burger-menu"
        />
      </button>
    </div>
  );
}
