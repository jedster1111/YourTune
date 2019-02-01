import { PassportStatic } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { checkPasswordsMatch } from "./auth/authHelpers";
import { User } from "./database/entity/User";
import {
  getUserById,
  getUserByUsername
} from "./database/helpers/userDbMethods";
import { errorMessages } from "./types";

export function setUpPassport(passport: PassportStatic) {
  initLocalSrategy(passport);

  passport.serializeUser<User, number>((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser<User, number>(async (id, done) => {
    const user = await getUserById(id);

    if (!user) {
      return done(new Error(errorMessages.noUserFound));
    }

    return done(null, user);
  });
}

function initLocalSrategy(passport: PassportStatic) {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      const user = await getUserByUsername(username);

      if (!user) {
        return done(null, false);
      }

      const doPasswordsMatch = await checkPasswordsMatch(
        password,
        user.password
      );

      if (!doPasswordsMatch) {
        return done(null, false);
      }

      return done(null, user);
    })
  );
}
