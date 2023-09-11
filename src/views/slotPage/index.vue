<!-- 插槽页面 -->
<script setup>
import FnSolt from "./component/fnSolt";
import CompositionSlot from "./component/compositionSlot.vue";
import RenderSlot from "./component/renderSlot";
import OptionSlot from "./component/optionSlot.vue";

</script>

<template>
  <div class="slot_page">
    <h1>插槽页面</h1>
    <FnSolt v-slot="slotProps">
      <div>单项插槽 ===>{{ slotProps.count }} </div>
    </FnSolt>
    <hr />
    <FnSolt>
      <template v-slot:slot1="slotProps">
        <div>多项项插槽slot1 ===>{{ slotProps.count }} </div>
      </template>
      <template #slot2>
        <div>多项项插槽slot2</div>
      </template>
    </FnSolt>
    <hr />
    <CompositionSlot v-slot="slotProps">
      <div>单项插槽 ====>{{ slotProps.count }}</div>
    </CompositionSlot>
    <hr />
    <CompositionSlot>
      <template v-slot:slot1="slotProps">
        <div>多项项插槽slot1=====> {{ slotProps.count }}</div>
      </template>
      <template #slot2>
        <div>多项项插槽slot2</div>
      </template>
    </CompositionSlot>
    <hr />
    <RenderSlot>
      <div>单项插槽</div>
    </RenderSlot>
    <hr />
    <RenderSlot>
      <template v-slot:slot1>
        <div>多项项插槽slot1</div>
      </template>
      <template #slot2>
        <div>多项项插槽slot2</div>
      </template>
    </RenderSlot>
    <hr />
    <OptionSlot>
      <div>单项插槽</div>
    </OptionSlot>
    <hr />
    <OptionSlot>
      <template v-slot:slot1>
        <div>多项项插槽slot1</div>
      </template>
      <template #slot2>
        <div>多项项插槽slot2</div>
      </template>
    </OptionSlot>

  </div>
</template>
<style scoped lang="scss"></style>