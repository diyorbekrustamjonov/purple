"use strict";
const users = [
    {
        user_id: 1,
        user_phone: "998992312433",
        user_role: 200 /* Roles.ADMIN */
    },
    {
        user_id: 2,
        user_phone: "998992312422",
        user_role: 201 /* Roles.USER */
    },
];
users.map((user) => {
    if (user.user_role == 200 /* Roles.ADMIN */) {
        console.log(user);
    }
});
