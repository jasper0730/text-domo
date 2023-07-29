(function (global, $) {
  let Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  let supportLanguage = ["zh", "en"];

  let greetings = {
    zh: "哈囉",
    en: "Hello",
  };

  let formalGreetings = {
    zh: "你好",
    en: "Greetings",
  };

  let logMessages = {
    zh: "登入",
    en: "Logged in",
  };

  Greetr.prototype = {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
    validate: function () {
      if (supportLanguage.indexOf(this.language) === -1) {
        throw "錯誤 沒有支援這個語言";
      }
    },
    greeting: function () {
      return greetings[this.language] + " " + this.firstName + "!";
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + " " + this.firstName + "!";
    },
    greet: function (formal) {
      let msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }
      return this
    },
    log: function() {
      if(console) {
        console.log(logMessages[this.language] + ':' + this.fullName());
      }
    },
    setLang: function(lang) {
      this.language = lang;
      this.validate()
      return this
    }
  };

  Greetr.init = function (firstName, lastName, language) {
    let self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
