<script>
import { mapGetters } from 'vuex';

export default {
  name: 'navBar',
  data () {
    return {};
  },
  render () {
    return (
      <div class="navbar">
        <el-breadcrumb separator="/">
          {
            this.breadList.map(breadcrumb => (<el-breadcrumb-item className="cursor-pointer">{breadcrumb.title}</el-breadcrumb-item>))
          }
        </el-breadcrumb>
      </div>
    );
  },
  computed: {
    ...mapGetters([
      'breadList'
    ])
  }
};
</script>
