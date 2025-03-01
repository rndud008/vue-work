

export default {
  //  재사용 할 컴포넌트 옵션 & 로직

 mounted(){
   this.$store.dispatch("END_SPINNER", false)
  }

  // created() {
  //   this.$store.dispatch("START_SPINNER", true);
  //   this.$store
  //     .dispatch("FETCH_LIST", this.$route.name)
  //     .then(() => this.$store.dispatch("END_SPINNER", false))
  //     .catch((error) => console.log(error));
  // },
};
