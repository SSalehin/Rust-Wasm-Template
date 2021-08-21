const rust = import("./pkg/index_bg");

rust.then(m => m.say_hello_from_rust());