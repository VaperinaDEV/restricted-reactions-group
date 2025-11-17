import Component from "@glimmer/component";
import DButton from "discourse/components/d-button";
import DTooltip from "float-kit/components/d-tooltip";
import { i18n } from "discourse-i18n";

export default class BlockReactionButton extends Component {

  get restrictedIcon() {
    return settings.restricted_like_icon;
  }

  <template>
    <DTooltip>
      <:trigger>
        <DButton
          class="btn-toggle-reaction-like btn-flat btn-icon no-text reaction-button"
          @icon={{this.restrictedIcon}}
        />
      </:trigger>
      <:content>
        <div class="block-reaction-button-tooltip__content">
          {{i18n (themePrefix "restricted_reaction_tootltip")}}
        </div>
      </:content>
    </DTooltip>
  </template>
}
