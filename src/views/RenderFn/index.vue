<!-- render函数 -->
<!-- <script>
import ChildComponent from "./components/ChildComponent";
// import { defineComponent } from "vue";
export default ({
  // components: { ChildComponent }
  //   //   return(()=> {
  //   //   return (<div> q2345</div >)
  //   // })
  // setup() {
  //   const render = () => {
  //     return (<div>3456</div>)
  //   }
  //   return render
  // }
  render() {
    return (
      <div>234ty</div>
    )
  }
})
</script> -->
<!-- <template>
  <div>234565432345</div>
</template> -->
<script>
import { h } from 'vue'
export default {
  setup() {
    return () => h('div', { class: 'bar' }, [
      'hello',
      h('p', '我是p标签'),
      h('div', '我是div标签'),
    ])
  }
}
</script>
<style scoped>
div {
  color: red
}
</style>