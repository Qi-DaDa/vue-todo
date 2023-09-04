import ChildComponent from "./components/ChildComponent";
import ChildComponent2 from "./components/ChildComponent2";

export default {
  data() {
    return {
      count: 0,
      num: 0, // 子组件
      tablist: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  methods: {
    onChangeNum() {
      console.log("23456");
      this.num = this.num + 1;
    },
  },
  render() {
    console.log("父组件组件=>", this);
    const { count, num, tablist, onChangeNum } = this;
    return (
      <div>
        <div>
          父组件
          <div>
            <button
              onClick={() => {
                this.count = count + 1;
              }}
            >
              按钮{count}
            </button>
          </div>
          <div>子组件值：{num}</div>
          {tablist.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
        <hr />
        <ChildComponent num={count} onChangeNum={onChangeNum}>
          {{
            slot1: <div>插槽1</div>,
            slot2: () => <div>插槽2</div>,
          }}
        </ChildComponent>
        <hr />
        <ChildComponent2>
          <div>2345y</div>
        </ChildComponent2>
      </div>
    );
  },
};
