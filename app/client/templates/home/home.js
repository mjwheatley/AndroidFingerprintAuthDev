/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
    'click #fingerprintAuth': function () {

        // FingerprintAuth.show({
        //     clientId: "myAppName",
        //     clientSecret: "UJejU6LXwLLRpBR9hUNLiA==",
        //     disableBackup: false,
        //     userAuthRequired: false
        //     //locale: "it"
        // }, successCallback, errorCallback);

        //* version 1.1.0
        // FingerprintAuth.show({
        //    clientId: "myAppName",
        //    cipherMode: FingerprintAuth.CipherMode.DECRYPT,
        //    username: "mwheatley",
        //    password: "wheatley",
        //    token: "TEaq85N90c7gtrZM3Jpfj2hzVXFSj7/GQtP8znSFTJ4=",
        //    disableBackup: false,
        //    userAuthRequired: false
        // }, successCallback, errorCallback);

        //* version 1.1.0
        // FingerprintAuth.show({
        //     clientId: "myAppName",
        //     cipherMode: FingerprintAuth.CipherMode.DECRYPT,
        //     username: "mjwheatley",
        //     password: "password",
        //     token: "9Fln3yTYUp8Yu/xcO724pHCcgwrEk1BkAQ4zO2Ie0qY=",
        //     disableBackup: false,
        //     userAuthRequired: false
        // }, successCallback, errorCallback);

        //* version 1.2.0
        // FingerprintAuth.decrypt({
        //     clientId: "myAppName",
        //     username: "mwheatley",
        //     password: "wheatley",
        //     token: "oPeQq00Ni1/N3WNEfwAtZdrrzx2Vwu/2Eguf2n6/SyU=",
        //     disableBackup: false,
        //     userAuthRequired: false
        // }, successCallback, errorCallback);

        //* version 1.2.0
        FingerprintAuth.encrypt({
            clientId: "myAppName",
            // username: "mjwheatley",
            // password: "password",
            // token: "3+PdvstXFmOe7rUipH3lv7CyMwSCWAlOAMUQ7QlZ3v4=",
            disableBackup: false,
            userAuthRequired: false
        }, successCallback, errorCallback);

    },
    'click #encrypt': function () {
        Session.set("cipherMode", "encrypt");
        // FingerprintAuth.isAvailable(isAvailableSuccess, isAvailableError);
        isAvailableSuccess(true);
    },
    'click #decrypt': function () {
        Session.set("cipherMode", "decrypt");
        // FingerprintAuth.isAvailable(isAvailableSuccess, isAvailableError);
        isAvailableSuccess(true);
    }
});

function successCallback(result) {
    console.log("successCallback(): " + JSON.stringify(result));
    if (result.withFingerprint) {
        console.log("Successfully authenticated using a fingerprint");
    } else if (result.withBackup) {
        console.log("Authenticated with backup password");
    }
    var cipherMode = Session.get("cipherMode");
    if (cipherMode === "encrypt") {
        Session.set("token", result.token);
    } else if (cipherMode === "decrypt") {
        console.log("decryptedPassword: " + result.password);
        Session.set("decryptedPassword", result.password);
    }
}

function errorCallback(message) {
    console.log("errorCallback(): " + message);
    alert(message);
}

function isAvailableSuccess(isAvailable) {
    console.log("FingerprintAuth available: " + JSON.stringify(isAvailable));
    var cipherMode = Session.get("cipherMode");
    var username = $('#username').val();
    if (cipherMode === "encrypt") {
        var password = $('#password').val();
        FingerprintAuth.encrypt({
            clientId: "myAppName",
            username: username,
            password: password,
            disableBackup: true,
            userAuthRequired: true
        }, successCallback, errorCallback);
    } else if (cipherMode === "decrypt") {
        FingerprintAuth.decrypt({
            clientId: "myAppName",
            username: username,
            token: Session.get("token"),
            disableBackup: true,
            userAuthRequired: true
        }, successCallback, errorCallback);
    }
}

function isAvailableError(message) {
    console.log("isAvailableError(): " + message);
}
/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
    token: function () {
        return Session.get("token");
    },
    decryptedPassword: function () {
        return Session.get("decryptedPassword");
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
