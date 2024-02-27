import { useState } from "preact/hooks";
import { FaAngleDown, FaAngleUp, FaTimes } from "react-icons/fa";
import { navigationItems } from "./items";

const isSubItemOfCurrent = (currentOpenSubItem: string, newItem: string) => {
  const currentItem = navigationItems.find(
    (item) => item.title === currentOpenSubItem,
  );
  if (currentItem && currentItem.subItems) {
    return currentItem.subItems.some((subItem) => subItem.title === newItem);
  }
  return false;
};

const SideNavigation = ({
  isOpen,
  toggleNav,
}: {
  isOpen: boolean;
  toggleNav: () => void;
}) => {
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [openSubItem, setOpenSubItem] = useState<string>("");

  const handleItemClick = (title: string, hasSubItems: boolean = false) => {
    if (!isSubItemOfCurrent(openSubItem, title)) {
      setOpenSubItem("");
    }

    if (!hasSubItems) {
      setSelectedItem(title);
      return;
    }

    const isCurrentlyOpen = openSubItem === title;
    setOpenSubItem(isCurrentlyOpen ? "" : title);
    setSelectedItem(isCurrentlyOpen ? "" : title);
  };

  return (
    <aside class="border-r border-r-gray-200">
      <div
        class={`fixed inset-0 z-50 mb-12 h-screen transform bg-white pr-4 transition-transform duration-300 ease-in-out md:relative md:inset-auto md:h-auto md:w-56 md:p-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div class="flex justify-end p-2 md:hidden">
          <button onClick={toggleNav}>
            <FaTimes size={24} />
          </button>
        </div>
        <div class="h-full overflow-y-auto">
          {navigationItems.map((item) => (
            <div key={item.title}>
              <div
                onClick={() => handleItemClick(item.title, !!item.subItems)}
                class={`flex cursor-pointer items-center px-2 py-3 ${selectedItem === item.title || openSubItem === item.title ? "border-l-4 border-blue-900 bg-[#e5f1ff]" : "border-l-4 border-transparent text-gray-700"}`}
              >
                <div class="mr-2">
                  <item.icon
                    color={
                      selectedItem === item.title || openSubItem === item.title
                        ? "#1e3a8a"
                        : "#afb8ce"
                    }
                    size={25}
                  />
                </div>
                <span
                  class={`${selectedItem === item.title || openSubItem === item.title ? "font-bold text-blue-900" : "text-black"}`}
                >
                  {item.title}
                </span>
                {item.subItems && (
                  <div class="ml-auto">
                    {openSubItem === item.title ? (
                      <FaAngleUp size={20} color="#1e3a8a" />
                    ) : (
                      <FaAngleDown size={20} color="#5f5f62" />
                    )}
                  </div>
                )}
              </div>
              {item.subItems && openSubItem === item.title && (
                <div class="space-y-4 bg-[#f6f9fd] p-2 pl-5">
                  {item.subItems.map((subItem) => (
                    <div
                      onClick={() => handleItemClick(subItem.title)}
                      class={`flex cursor-pointer items-center p-1 ${selectedItem === subItem.title ? "border-l-4 border-blue-900 bg-[#e5f1ff] " : "border-l-4 border-transparent"}`}
                    >
                      <div class="mr-2">
                        <subItem.icon
                          color={
                            selectedItem === subItem.title
                              ? "#1e3a8a"
                              : "#4a90e2"
                          }
                          size={25}
                        />
                      </div>
                      <span
                        class={`${selectedItem === subItem.title ? "font-bold text-blue-900" : "text-black"}`}
                      >
                        {subItem.title}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideNavigation;
