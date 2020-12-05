const { shell } = require("electron/common");

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    shell.openExternal(e.currentTarget.href);
  });
});

new Vue({
  el: "#app",
  data() {
    return {
      authstatus: false,
    };
  },
  template: `
    <main>
      <form class="login" autocomplete="on">
        <h2 class="login-title"></h2>
        <label for="user">Username</label>
        <input
          type="text"
          name="user"
          id="login-user"
          placeholder="example@gmail.com"
        />
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="login-password"
          placeholder="****"
        />
        <input type="checkbox" name="remember" id="remember" value="remember" />
        <label for="remember">Remember me</label>
        <input type="submit" value="Login" />
      </form>
    </main>
  `,
});
