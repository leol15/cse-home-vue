/**
*  * @type {import('@vue/cli-service').ProjectOptions}
*   */
module.exports = {
	// options...
	// 
	publicPath: "/~leol15/x/home/",
	devServer: {
		disableHostCheck: true,
		https: false,
        public: "http://attu5.cs.washington.edu:4657/~leol15/x/home/",  //// This line makes the client browser talk DIRECTLY to this address / server for hot reloading.
        host: "0.0.0.0" ,
        port: 4567,
	},
	css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";@import "@/styles/_themes.scss";`
      }
    }
  }
}



