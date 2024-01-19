import { UserService } from "@medusajs/medusa";
import { User } from "../../models/user";

// import type
import type {
  MedusaNextFunction,
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/medusa";

export async function registerLoggedInUser(
  req: MedusaRequest,
  res: MedusaResponse,
  next: MedusaNextFunction
) {
  let loggedInUser: User | null = null;

  if (req.user && req.user.userId) {
    const userService = req.scope.resolve("userService") as UserService;
    loggedInUser = await userService.retrieve(req.user.userId);
  }

  req.scope.register({
    loggedInUser: {
      resolve: () => loggedInUser,
    },
  });

  next();
}
