import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  server: {
	  //uni-app代理无效，参考 https://zh.uniapp.dcloud.io/tutorial/CORS.html
      proxy: {
        '/api': {
          target: 'https://82tc385147.goho.co',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
	  }
	}
});
