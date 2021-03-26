function run() {
    {
        var baz2 = "Bazz";
        console.log(baz2); // Bazz
    }

    console.log(baz2);
}

run();

// =========================

function run() {
    {
        let baz = "Bazz";
        console.log(baz); // Bazz
    }

    console.log(baz); // ReferenceError
}

run();