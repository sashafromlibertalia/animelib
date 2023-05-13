import { Button, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger } from "@fluentui/react-components";
import { userModel } from "@entities/user";

export const AddAnimeToList = () => {
  const { useWatchLists  } = userModel.selectors;

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button appearance={"primary"}>Add to list</Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {
            useWatchLists().map((watchList) => (
              <MenuItem key={watchList.id}>
                {watchList.name}
              </MenuItem>
            ))
          }
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
