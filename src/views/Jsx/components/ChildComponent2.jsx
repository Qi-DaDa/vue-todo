const ChildComponent = {
  name: "child-component",
  props: ["num"],
  emits: ["onChangeNum"],
  data() {
    return {
      count: 0,
    };
  },
  beforeCreate() {
    console.log("beforeCreate=>", "在组件实例初始化和props解析完成调用。");
  },
  created() {
    console.log("created=>", "在组件实例初始化完成之后立即调用。");
  },
  beforeMount() {
    console.log("beforeMount", "在组件被挂载之前调用。");
  },
  mounted() {
    console.log("mounted=>", "在组件实例处理完所有与状态相关的选项后调用。");
  },
  beforeUpdate() {
    console.log(
      "beforeUpdate=>",
      "在组件即将因为一个响应式状态变更而更新其 DOM 树之前调用。"
    );
  },
  updated() {
    console.log(
      "updated=>",
      "在组件因为一个响应式状态变更而更新其 DOM 树之后调用。"
    );
  },
  beforeUnmount() {
    console.log("beforeUnmount=>", "在一个组件实例被卸载之前调用。");
  },
  unmounted() {
    console.log("unmounted=>", "在一个组件实例被卸载之后调用。");
  },

  methods: {
    onChangeP(e) {
      const { count } = this;
      this.count = count + 1;
      console.log(this.$emit);
      this.$emit("onChangeNum", "onChangeNum", count + 1);
    },
  },
  render() {
    const { num, count, onChangeP, $scopedSlots } = this;
    console.log($scopedSlots);
    return (
      <div>
        子组件
        <div>
          <button onClick={onChangeP}>按钮：{count}</button>
        </div>
        <div>父组件传值:{num}</div>
        <div>{this.$slots.slot1()}</div>
        <div>{this.$slots.slot2("lalal")}</div>
      </div>
    );
  },
};
export default ChildComponent;
