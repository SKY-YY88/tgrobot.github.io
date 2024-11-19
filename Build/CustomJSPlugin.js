mergeInto(LibraryManager.library, {
    // 定义一个方法获取 Telegram 用户数据
    GetTelegramUserInfo: function() {
        if (window.Telegram && window.Telegram.WebApp) {
            const user = window.Telegram.WebApp.initDataUnsafe.user;

            if (user) {
                const userData = {
                    id: user.id,
                    first_name: user.first_name || "No First Name",
                    last_name: user.last_name || "No Last Name",
                    username: user.username || "No Username",
                };
                console.log("Telegram User Data:", userData);

                // 返回 JSON 字符串
                return allocateUTF8(JSON.stringify(userData));
            } else {
                console.error("Failed to get Telegram user information.");
            }
        } else {
            console.error("Telegram WebApp is not available.");
        }
        return allocateUTF8("{}");
    }
});
