<script lang="ts">
import Hollow from './Hollow.vue'
import Basis from './Basis.vue'

const Pie = { Hollow, Basis }

export default Pie
</script>

<style lang="less">
.covid19-echarts-pie-between {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 40px;
}
.covid19-echarts-pie-between > div {
    width: 360px;
    height: 360px;
}
</style>
