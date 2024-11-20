mergeInto(LibraryManager.library, {
    getTelegramUserData: function () {
        if (window.Telegram && window.Telegram.WebApp) {
            const user  = window.Telegram.WebApp.initDataUnsafe.user;

            if (user) {
                const userData = {
                    id: user.id || 0,
                    first_name: user.first_name || "No First Name",
                    last_name: user.last_name || "No Last Name",
                    username: user.username || "No Username",
                    photoUrl: user.photo_url || "No Photo URL",
                };
                console.log("Telegram User Data:", userData);

                // 将用户数据转换为 JSON 字符串
                const jsonString = JSON.stringify(userData);

                // 分配内存并返回
                const bufferSize = lengthBytesUTF8(jsonString) + 1;
                const buffer = _malloc(bufferSize);
                stringToUTF8(jsonString, buffer, bufferSize);
                return buffer;
            }
        }

        console.error("Telegram WebApp is not available or no user data found.");
        const emptyJson = JSON.stringify({});
        const bufferSize = lengthBytesUTF8(emptyJson) + 1;
        const buffer = _malloc(bufferSize);
        stringToUTF8(emptyJson, buffer, bufferSize);
        return buffer;
    },
});
