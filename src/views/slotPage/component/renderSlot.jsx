// 渲染式插槽组件
import { defineComponent } from "vue";
const RenderSlot = defineComponent({
  setup(props, { slots }) {
    return () => {
      return (
        <>
          <h2>渲染函数插槽组件</h2>
          {slots.default ? slots.default() : null}
          {slots.slot1 ? slots.slot1() : null}
          {slots.slot2 ? slots.slot2() : null}
        </>
      );
    };
  },
});

export default RenderSlot;
