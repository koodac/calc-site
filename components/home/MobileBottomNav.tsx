"use client";

type MobileBottomNavProps = {
  active: "home" | "favorites" | "menu";
  onChange: (tab: "home" | "favorites" | "menu") => void;
};

export function MobileBottomNav({ active, onChange }: MobileBottomNavProps) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white md:hidden"
      aria-label="하단 메뉴"
    >
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-around px-4">
        <TabButton
          active={active === "home"}
          icon="⌂"
          label="홈"
          onClick={() => onChange("home")}
        />
        <TabButton
          active={active === "favorites"}
          icon="☆"
          label="즐겨찾기"
          onClick={() => onChange("favorites")}
        />
        <TabButton
          active={active === "menu"}
          icon="☰"
          label="메뉴"
          onClick={() => onChange("menu")}
        />
      </div>
    </nav>
  );
}

function TabButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus-ring inline-flex flex-col items-center justify-center gap-0.5 px-3 py-1 text-xs ${
        active ? "text-blue-600" : "text-neutral-500"
      }`}
      aria-current={active ? "page" : undefined}
    >
      <span className="text-base" aria-hidden>
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}
