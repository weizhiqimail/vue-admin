<script>
import MHeader from './header';
import MenuBar from './menuBar';
import Footer from './footer';

export default {
  name: 'layout',
  components: {
    MenuBar
  },
  computed: {
    key () {
      return this.$route.path;
    }
  },
  render () {
    return (
      <transition name="fade">
        <el-container>
          <el-aside width="140px">
            <MenuBar/>
          </el-aside>
          <el-container>
            <el-header class="el-header">
              <MHeader/>
            </el-header>
            <el-main>
              <router-view key={this.key}/>
            </el-main>
            <el-footer>
              <Footer/>
            </el-footer>
          </el-container>
        </el-container>
      </transition>
    );
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.el-header {
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 1px 5px 4px $box-shadow;
}
</style>
