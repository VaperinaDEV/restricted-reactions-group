import { apiInitializer } from "discourse/lib/api";
import BlockReactionButton from "../components/block-reaction-button";

export default apiInitializer("1.8.0", (api) => {
  const currentUser = api.getCurrentUser();
  let restrictUserGroup = false;

  if (currentUser && currentUser.groups) {
    const restrictedGroups = settings.restrict_for_groups.split("|");
    
    for (const group of currentUser.groups) {
      if (restrictedGroups.includes(group.name)) {
        restrictUserGroup = true;
        break;
      }
    }
  }

  api.registerValueTransformer(
    "post-menu-buttons",
    ({ value: dag, context: { post, buttonKeys } }) => {
      if (restrictUserGroup) {
        dag.replace(buttonKeys.LIKE, BlockReactionButton);
      }
    }
  );
});
