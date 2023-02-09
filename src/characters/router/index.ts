import type { RouteRecordRaw } from "vue-router";
import CharacterLayout from "@/characters/layout/CharacterLayout.vue";
import characterId from "@/characters/pages/CharacterId.vue";
import characterList from "@/characters/pages/CharacterList.vue";
import characterSearch from "@/characters/pages/CharacterSearch.vue";

export const characterRoute: RouteRecordRaw = {
  path: "/characters",
  component: CharacterLayout,
  children: [
    {
      path: "by/id",
      name: "character-id",
      component: characterId,
    },
    {
      path: "list",
      name: "character-list",
      component: characterList,
    },
    {
      path: "search",
      name: "character-search",
      component: characterSearch,
    },
  ],
};
