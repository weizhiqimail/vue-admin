<script>
export default {
  name: 'separator',
  data () {
    return {
      mark: '|'
    };
  },
  render () {
    return (
      <div class="pr-10 pl-10 column-center">
        <span>{this.mark}</span>
      </div>
    );
  }
};
</script>

<style lang="scss" scoped></style>
