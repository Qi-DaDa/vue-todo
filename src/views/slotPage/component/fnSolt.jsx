import { defineComponent } from "vue";
// 函数插槽组件
const FnSolt = (props, { slots, emit }) => {
  return (
    <div>
      <h2>函数插槽组件</h2>
      {slots.default ? slots.default({ count: 1 }) : null}
      {slots.slot1 ? slots.slot1({ count: "1" }) : null}
      {slots.slot2 ? slots.slot2() : null}
    </div>
  );
};
export default FnSolt;
