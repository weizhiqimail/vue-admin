<script>
import Header from './Header';
import MenuBar from './MenuBar';
import Footer from './Footer';

export default {
  name: 'Layout',
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
        <div>
          <el-container>
            <el-aside>
              <MenuBar/>
            </el-aside>
            <el-container>
              <el-header>
                <Header/>
              </el-header>
              <el-main>
                <router-view key={this.key}/>
              </el-main>
              <el-footer>
                <Footer/>
              </el-footer>
            </el-container>
          </el-container>
        </div>
      </transition>
    );
  }
};
</script>
